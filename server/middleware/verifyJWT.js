const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const generateTokens = require('../utils/authutils');

function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, 'refresh');
    const { accessToken, refreshToken } = generateTokens({
      user,
    });

    res.locals.user = user;
    res
      //                  refresh        token
      .cookie(jwtConfig.refresh.type, refreshToken, {
        // 12 часов
        maxAge: jwtConfig.refresh.expiresIn,
        httpOnly: true,
      })
      .cookie(jwtConfig.access.type, accessToken, {
        maxAge: jwtConfig.access.expiresIn,
        httpOnly: true,
      });
    next();
  } catch (error) {
    res.clearCookie(jwtConfig.refresh.type).clearCookie(jwtConfig.access.type);
    next();
  }
}

// проверяет наши билеты
function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const { user } = jwt.verify(access, 'access');
    console.log(user, 11111111);
    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

module.exports = verifyAccessToken;
