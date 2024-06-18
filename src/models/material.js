'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Material.belongsTo(models.SubBab, {
        foreignKey: "id_sub"
      });

      Material.hasMany(models.progres, {
        foreignKey: "id_material"
      });
    }
  }
  Material.init({
    nama_material: DataTypes.STRING,
    gold: DataTypes.INTEGER,
    exp: DataTypes.INTEGER,
    type_material: DataTypes.STRING,
    id_sub: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};