'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubBab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubBab.belongsTo(models.Bab, {
        foreignKey: "id_bab",
      });

      SubBab.hasMany(models.Material, {
        foreignKey: "id_SubBab",
      })
    }
  }
  SubBab.init({
    nama_sub: DataTypes.STRING,
    thumbnail_sub: DataTypes.STRING,
    gratis: DataTypes.BOOLEAN,
    id_bab: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubBab',
  });
  return SubBab;
};