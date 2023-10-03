module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f91cdf06242b2d20c661f465f5861cd1'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','NHBP4Q9HQdXtSwNADhuYYK2y7VSbs6'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','42JfkkicoFA7Vd8t6FXSbm7vWyUNHB'),
    },
  },
});
