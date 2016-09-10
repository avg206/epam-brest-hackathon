import { Strategy } from 'passport-saml';
import User from '../model/user';

module.exports = (passport) => {
  const saml = {
    path: '/saml',
    protocol: 'https://',
    host: '10.26.160.11:3500/',
    entryPoint: 'https://login-prod.epm-sso.projects.epam.com/adfs/ls/idpinitiatedsignon',
    issuer: 'https://10.26.160.11:3500/',
    signatureAlgorithm: 'SHA-256',
    disableRequestedAuthnContext: true,
  };

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((user, done) => done(null, user));

  passport.use(new Strategy(saml, async(profile, done) => {
    const name = profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    let user = await User.findOne({ name });

    if (!user) {
      user = new User({
        name: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        epamID: `${profile['http://epam.com/claims/pmcid']}`,
      });
      user = await user.save();
    }

    return done(null, user);
  }));
};
