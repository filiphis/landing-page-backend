module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd18e985e8bdf341f0113efddda6dc7b3'),
    },
  },
});
