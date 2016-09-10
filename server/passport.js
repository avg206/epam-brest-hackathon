import { Strategy } from 'passport-saml';
import User from '../model/user';

module.exports = (passport, config) => {
  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((user, done) => done(null, user));

  passport.use(new Strategy(
    config.passport.saml, (profile, done) => {
      const name = profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

      User.findOne({ name })
        .then((user) => {
          if (user) return done(null, user);

          const newUser = new User({
            name: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
            epamID: `${profile['http://epam.com/claims/pmcid']}`,
          });

          newUser.save((err) => {
            if (err) console.log(err);
          });

          return done(null, newUser);
        });
    }
  ));
};
