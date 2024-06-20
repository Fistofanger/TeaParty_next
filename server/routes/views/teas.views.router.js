const router = require('express').Router();

const TeasPage = require('../../components/TeasPage.jsx');
const TeaPage = require('../../components/TeaPage.jsx');
const FormUpdateTea = require('../../components/FormUpdateTea.jsx');
const NotFound = require('../../components/NotFound.jsx');
const { Tea, Comment, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const teaDataArray = await Tea.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Comment,
        include: { model: User },
        order: [['id', 'DESC']],
      },
    });

    res.send({ data: teaDataArray });
    // res.renderComponent(TeasPage, { teaDataArray, title: 'Teas Page', user })
    // );
  } catch ({ message }) {
    res.status(500).json('Ошибочка Teas page алл гет');
  }
});

router.get('/:teaid', async (req, res) => {
  try {
    // const { user } = res.locals;

    const { teaid } = req.params;
    const teaData = await Tea.findOne({
      where: { id: teaid },
      include: {
        model: Comment,
        include: { model: User },
      },
      // include: [{ model: Like }, { model: Like, include: [{ model: User }] }],
      // order: [['id', 'ASC']],
    });

    if (teaData) {
      res.send(
        { data: teaData }
        // res.renderComponent(TeaPage, { teaData, title: 'Tea Page', user })
      );
      return;
    }
    res.send(res.renderComponent(NotFound, { title: '404' }));
  } catch ({ message }) {
    res.status(500).json('Ошибочка');
  }
});

router.get('/update/:teaId', async (req, res) => {
  try {
    const { user } = res.locals;
    const { teaId } = req.params;

    const teaData = await Tea.findOne({ where: { id: teaId } });

    const result = res.renderComponent(FormUpdateTea, {
      teaData,
      title: 'Post Edit Page',
      user,
    });
    if (result) {
      res.send(result);
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
