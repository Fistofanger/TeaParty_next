const router = require('express').Router();

const OneCommentForm = require('../../components/OneCommentForm.jsx');

const { Favorite } = require('../../db/models/favorite');

router.post('/add', async (req, res) => {
  try {
    const { id } = res.locals.user;
    const { teaId } = req.params;

    const comment = await Favorite.create({
      userId: id,
      teaId,
    });

    const html = res.renderComponent(OneCommentForm, { comment }, { doctype: false });
    if (comment) {
      res.status(201).json({ message: 'success', html });
      return;
    }
    res.status(400).json('Ошибка добавления');
  } catch ({ message }) {
    res.status(500).json('Ошибочка');
  }
});

module.exports = router;
