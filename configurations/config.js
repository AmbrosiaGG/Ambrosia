module.exports = {
  webserver: {
    port: 3000,
    domain: "127.0.0.1:3000",
    cache: true,
  },
  oauth: {
    // Something more in the future ¯\_(ツ)_/¯
    builtin_oauth: {
      discord: {},
      github: {},
      gitlab: {},
      microsoft: {},
      google: {},
    },
  },
  web_ui: {
    enable_admin: true,
    enable_registration: true,
    enable_emailveri: true,
    enable_phoneveri: true
  },
  smtp: {
    TLS: true,
    host: process.env.smtp_host,
    authentication: true,
    username: process.env.smtp_username,
    password: process.env.smtp_password,
    from: "noreply@ambrosia.gg"
  },
  secrets: {
    database_mongodb: process.env.database_mongodb,
    database_redis: process.env.database_redis,
    session_secret: process.env.session_secret,
    sentry_dsn: process.env.sentry_dsn
  }
};
