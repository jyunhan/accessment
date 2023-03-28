const { sequelize } = require('../database')
const { DataTypes } = require('sequelize')

const QuestionModule = sequelize.define('Question', {
    // Model attributes are defined here
    data: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'PENDING',
    }
  }, { 
    tableName: 'questions',
  }, {
    // TODO: add index into status col.
    // indexes: []
  });

module.exports = QuestionModule
