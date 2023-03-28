const { Sequelize } = require("sequelize");

const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres',
    pool: {
      max: 4,
      min: 1,
      acquire: 30000,
      idle: 10000
    },
});

module.exports = {
  sequelize,
}
