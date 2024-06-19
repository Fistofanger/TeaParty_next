require('@babel/register');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const removeHeaders = require('./middleware/removeHeaders');
// const ssr = require('./middleware/ssr');
const verifyAccessToken = require('./middleware/verifyJWT');

const corsOptions = {
  origin: 'http://localhost:3000', // Ваш фронтенд домен
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

const app = express();

const indexRouter = require('./routes/index.router');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(removeHeaders);
// app.use(ssr);
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(verifyAccessToken);
app.use('/', indexRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`наш сервер работает на порте ${PORT}`);
});
