const router = require('express').Router();
const { Tea } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const teas = await Tea.findAll();
    res.json({ teas });
  } catch ({ message }) {
    res.status(500).json('Ошибка отображения');
  }
});
module.exports = router;
