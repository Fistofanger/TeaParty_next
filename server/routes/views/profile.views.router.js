const router = require('express').Router();

const ProfilePage = require('../../components/ProfilePage.jsx');
const UpdateProfilePage = require('../../components/UpdateProfilePage.jsx');
const NotFound = require('../../components/NotFound.jsx');

const { User } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userR = await User.findOne({ where: { id } });

    if (userR) {
      return res.status(201).send(res.renderComponent(ProfilePage, { title: 'Profile', userR }));
    }
    return res.send(res.renderComponent(NotFound, { title: '404' }));
  } catch ({ message }) {
    res.status(500).json('Ошибочка profile');
  }
});

router.get('/:id/update', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (user) {
      return res.status(201).send(res.renderComponent(UpdateProfilePage, { title: 'UpdateProfile', user }));
    }
    return res.send(res.renderComponent(NotFound, { title: '404' }));
  } catch ({ message }) {
    res.status(500).json('Ошибочка profile');
  }
});

module.exports = router;
