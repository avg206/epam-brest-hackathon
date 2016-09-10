import express from 'express';
import webpack from 'webpack';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
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

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

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
      successRedirect: 'https://localhost:3500/',
      failureRedirect: 'https://localhost:3500/aaa',
    })
);

app.post('/saml',
  passport.authenticate('saml',
    {
      failureRedirect: 'https://localhost:3500/aaa',
      failureFlash: true,
    }),
  (req, res) => {
    const token = getCoockieToken(req.user);
    res.cookie('clientToken', token, { maxAge: 100 * 24 * 60 * 60 * 1000, httpsOnly: true });
    res.redirect('https://localhost:3500/');
  }
);

export default app;
