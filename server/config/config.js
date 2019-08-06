import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 7777,
  env: process.env.NODE_ENV,
  
};

module.exports = config;
