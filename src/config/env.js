require("dotenv").config();
module.exports = {
  PORT: process.env.PORT || 3000,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
};
