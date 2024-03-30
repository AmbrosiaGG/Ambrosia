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
          email: String,
          bearerToken: String,
          plan: String
        },
      ]
);

const User = mongoose.model('User', user);

module.exports = User