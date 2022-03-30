module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f91cdf06242b2d20c661f465f5861cd1'),
  },
});
