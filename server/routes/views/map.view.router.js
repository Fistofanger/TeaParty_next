const router = require('express').Router();
const TeaMap = require('../../components/TeaMap.jsx');

router.get('/', (req, res) => {
  try {
    res.send(res.renderComponent(TeaMap, { title: 'Tea Map' }));
  } catch ({ message }) {
    res.status(500).json('Ошибка отображения');
  }
});

module.exports = router;
