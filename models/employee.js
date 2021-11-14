const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class employee extends Model {}

// first_name, last_name, role_id, manager_id

employee.init(
    {
      first_name: {
        type: DataTypes.STRING,
        
        // Your code here to prevent NULL values
        // Your code here to only allow 1 to 160 characters
        allowNull: false,
        validate: {
          len : [1, 160]
        }
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        // Your code here to prevent NULL values
        validate: {
          len: [1]
        }
      },
      role_id: {
        type: DataTypes.STRING,
        defaultValue: 'personal'
        // Your code here to have default value of 'Personal'
      },
      manager_id: {
        type: DataTypes.STRING,
        defaultValue: 'personal'
        // Your code here to have default value of 'Personal'
      }
    },
    {
      sequelize
    }
  );

  module.exports =  employee;