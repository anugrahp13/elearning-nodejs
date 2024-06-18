'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Progres.belongsTo(models.Material, {
        foreignKey: "id_material"
      });

      Progres.belongsTo(models.User, {
        foreignKey: "id_user"
      });
    }
  }
  Progres.init({
    id_material: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Progres',
  });
  return Progres;
};