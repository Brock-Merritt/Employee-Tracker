const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class role extends Model {}

role.init(
  {
    id: {
      type: DataTypes.STRING,
      
      // Your code here to prevent NULL values
      // Your code here to only allow 1 to 160 characters
      allowNull: false,
      validate: {
        len : [1, 160]
      }
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      // Your code here to prevent NULL values
      validate: {
        len: [1]
      }
    },
    salary: {
      type: DataTypes.STRING,
      defaultValue: 'personal'
      // Your code here to have default value of 'Personal'
    }
    // : {
    //   type: DataTypes.STRING,
    //   defaultValue: 'personal'
    //   // Your code here to have default value of 'Personal'
    // }
  },
  {
    sequelize
  }
);

module.exports =  role;