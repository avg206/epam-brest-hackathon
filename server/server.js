import express from 'express';
import webpack from 'webpack';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../webpack';

const app = express();
const NODE_ENV = process.env.NODE_ENV;
const tokenCreation = (obj, time) => jwt.sign(obj, 'task', {
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

require('./passport')(passport);

app.get('/login',
  passport.authenticate('saml',
    {
      successRedirect: 'https://localhost:3400/',
      failureRedirect: 'https://localhost:3400/',
    })
);

app.post('/api/saml',
  passport.authenticate('saml',
    {
      failureRedirect: 'https://localhost:3400/',
      failureFlash: true,
    }),
  (req, res) => {
    const token = getCoockieToken(req.user);
    res.cookie('clientToken', token, { maxAge: 100 * 24 * 60 * 60 * 1000, httpsOnly: true });
    res.redirect('https://localhost:3400/');
  }
);

export default app;
