import { Strategy } from 'passport-saml';
import User from '../model/user';

module.exports = (passport) => {
  const saml = {
    path: '/api/saml',
    protocol: 'https://',
    host: 'localhost:3400',
    entryPoint: 'https://login-prod.epm-sso.projects.epam.com/adfs/ls/idpinitiatedsignon',
    issuer: 'https://localhost:3400',
    signatureAlgorithm: 'SHA-256',
    disableRequestedAuthnContext: true,
  };
  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((user, done) => done(null, user));

  passport.use(new Strategy(saml, async(profile, done) => {
    const name = profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    const user = await User.findOne({ name });

    if (user) {
      return done(null, user);
    }

    let newUser = new User({
      name: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
      epamID: `${profile['http://epam.com/claims/pmcid']}`,
    });

    newUser = await newUser.save();

    return done(null, newUser);
  }));
};
