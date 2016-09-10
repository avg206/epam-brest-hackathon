import express from 'express';
import webpack from 'webpack';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../webpack';

const app = express();
const NODE_ENV = process.env.NODE_ENV;
const secret = 'task';
const tokenCreation = (obj, time) => jwt.sign(obj, secret, {
  expiresIn: time,
});
const getCoockieToken = (model) => {
  const expires = '356 days';
  const generateTokenUser = {
    _doc: {
      _id: model._id,
      name: model.name,
    },
  };

  return tokenCreation(generateTokenUser, expires);
};

if (NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/../public`));
} else {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

const passportConfig = require('../config/configPassport');
require('./passport')(passport, passportConfig);

app.get('/api/epamlogin',
  passport.authenticate(passportConfig.passport.strategy,
    {
      successRedirect: 'https://localhost:3400/',
      failureRedirect: 'https://localhost:3400/',
    })
);

app.post(passportConfig.passport.saml.path,
  passport.authenticate(passportConfig.passport.strategy,
    {
      failureRedirect: 'https://localhost:3400/',
      failureFlash: true,
    }),
  (req, res) => {
    const token = getCoockieToken(req.user);
    res.cookie('clientToken', token, { maxAge: 100 * 24 * 60 * 60 * 1000, httpsOnly: true });
    res.redirect('/');
  }
);

export default app;
