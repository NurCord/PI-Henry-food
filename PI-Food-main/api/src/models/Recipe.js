const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        isInt: true, 
        max: 100,
        min: 0
      }
    },
    recipe:{
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
      validate:{
        isUrl: true,  
      }
    },
    dishTypes:{
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false
});
};
