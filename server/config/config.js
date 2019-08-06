const  dotenv = require ('dotenv');

dotenv.config();

const config = {
  port: process.env.PORT || 7870,
  env: process.env.NODE_ENV,
  
};

module.exports = config;
