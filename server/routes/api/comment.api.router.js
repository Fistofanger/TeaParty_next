const router = require('express').Router();

const OneCommentForm = require('../../components/OneCommentForm.jsx');

const { Comment, User } = require('../../db/models');

router.post('/add', async (req, res) => {
  try {
    const { id } = res.locals.user;
    const {
      commentText,
      teaid,
    } = req.body;

    console.log(
      commentText,
      teaid,
    );

    const commentToDB = await Comment.create({
      commentText,
      userId: id,
      teaId: teaid,
    });

    const commentFromDB = await Comment.findOne({
      where: { teaId: teaid },
      include: { model: User },
      order: [['id', 'DESC']],
    });

    const html = res.renderComponent(OneCommentForm, { comment: commentFromDB }, { doctype: false });
    if (commentToDB) {
      res.status(201).json({ message: 'success', html });
      return;
    }
    res.status(400).json('Ошибка добавления');
  } catch ({ message }) {
    res.status(500).json('Ошибочка');
  }
});

module.exports = router;
