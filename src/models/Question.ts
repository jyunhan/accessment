import { DataTypes } from 'sequelize';
import sequelize from '../database';

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

export default QuestionModule
