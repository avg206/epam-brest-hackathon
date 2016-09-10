module.exports = {
  passport: {
    strategy: 'saml',
    saml: {
      path: '/api/saml',
      protocol: 'https://',
      host: 'localhost:3500',
      entryPoint: 'https://login-prod.epm-sso.projects.epam.com/adfs/ls/idpinitiatedsignon',
      issuer: 'https://localhost:3500',
      signatureAlgorithm: 'SHA-256',
      disableRequestedAuthnContext: true,
    },
  },
};
