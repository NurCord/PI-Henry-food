const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('diet', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        definition:{
            type: DataTypes.TEXT,
        }
    }, {
        timestamps: false
    });
  };
