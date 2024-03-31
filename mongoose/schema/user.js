const mongoose = require('mongoose');
const inbx = new mongoose.Schema({
  type: String,
  discription: String,
  closed: Boolean,
  cid: String
});
const subdomain = new mongoose.Schema({
  domain: String,
  custom: Boolean,
});
const serversarray = new mongoose.Schema({
  id: String,
  setupd: Boolean
});
const user = new mongoose.Schema(
      [
        {
          name: String,
          role: String, // Admin/User
          org: String,
          password: String,
          avatar: String,
          inbox: [inbx],
          subdomains: [subdomain],
          servers: [serversarray],
          email: String,
          bearerToken: String,
          plan: String
        },
      ]
);

const User = mongoose.model('User', user);

module.exports = User