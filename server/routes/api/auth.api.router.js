const router = require('express').Router();
const bcrytp = require('bcrypt');

// const multer = require('multer');
const jwtConfig = require('../../config/jwtConfig');
const generateToken = require('../../utils/authutils');
const upload = require('../../utils/multer');

const { User, Favorite } = require('../../db/models');

router.post('/registration', upload.single('avatar'), async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    let userInDb;
    userInDb = await User.findOne({ where: { email } });

    if (userInDb) {
      res.status(400).json('Друг, такой email уже зареган');
      return;
    }

    const newFileUrl = `/img/${req.file.originalname}`;

    const hashPassword = await bcrytp.hash(password, 10);

    userInDb = await User.create({
      userName: userName.trim(),
      email: email.trim(),
      password: hashPassword,
      avatar: newFileUrl,
    });

    const user = await User.findOne({
      where: { id: userInDb.id },
      include: Favorite,
      attributes: ['id', 'userName', 'email', 'avatar'],
      // , 'Favorites'],
    });
    // console.log(user);
    if (user) {
      const { accessToken, refreshToken } = generateToken({ user });
      res.locals.user = user;
      res
        .cookie('access', accessToken, {
          maxAge: jwtConfig.access.expiresIn,
          httpOnly: true,
        })
        .cookie('refresh', refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .status(201)
        .json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/authorization', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInDb = await User.findOne({ where: { email } });

    if (userInDb.password.length !== 60) {
      if (userInDb.password === password) {
        const user = await User.findOne({
          where: { id: userInDb.id },
          include: Favorite,
          attributes: ['id', 'userName', 'email'],
          // 'Favorites'],
        });
        if (user) {
          const { accessToken, refreshToken } = generateToken({ user });
          res.locals.user = user;

          res
            .cookie('access', accessToken, {
              maxAge: jwtConfig.access.expiresIn,
              httpOnly: true,
            })
            .cookie('refresh', refreshToken, {
              maxAge: jwtConfig.refresh.expiresIn,
              httpOnly: true,
            })
            .status(201)
            .json({ message: 'success' });
        } else {
          res.json({ message: 'Неверные данные' });
        }
      }
    }

    const isLogin = await bcrytp.compare(password, userInDb.password);

    if (isLogin) {
      const user = await User.findOne({
        where: { id: userInDb.id },
        include: Favorite,
        attributes: ['id', 'userName', 'email'],
      });
      if (user) {
        const { accessToken, refreshToken } = generateToken({ user });
        res.locals.user = user;

        res
          .cookie('access', accessToken, {
            maxAge: jwtConfig.access.expiresIn,
            httpOnly: true,
          })
          .cookie('refresh', refreshToken, {
            maxAge: jwtConfig.refresh.expiresIn,
            httpOnly: true,
          })
          .status(201)
          .json({ message: 'success' });
      } else {
        res.json({ message: 'Неверные данные' });
      }
    }
  } catch ({ message }) {
    // console.log(message);
    res.status(500).json('Ошибка');
  }
});

// обновление профиля
router.put('/:id/update', upload.single('avatar'), async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email } = req.body;

    const newFileUrl = `/img/${req.file.originalname}`;

    const result = await User.update(
      { userName, email, avatar: newFileUrl },
      { where: { id } }
    );
    const user = await User.findOne({ where: { id } });
    // res.app.locals.user = user;
    res.locals.user = user;

    if (result[0] > 0) {
      res.status(201).json({ message: 'success', user });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
