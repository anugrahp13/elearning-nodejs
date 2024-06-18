'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Bab.belongsTo(models.MataPelajaran, {
        foreignKey: "id_pelajaran"
      });
      Bab.hasMany(models.SubBab, {
        foreignKey: "id_bab"
      });
    }
  }
  Bab.init({
    nama_bab: DataTypes.STRING,
    thumbnail_bab: DataTypes.STRING,
    sub_bab_gratis: DataTypes.DOUBLE,
    id_pelajaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bab',
  });
  return Bab;
};