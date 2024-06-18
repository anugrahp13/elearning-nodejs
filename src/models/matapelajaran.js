'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MataPelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      MataPelajaran.belongsTo(models.ModePembelajaranKelas, {
        foreignKey: "id_mpk",
      });

      MataPelajaran.hasMany(models.Bab, {
        foreignKey: "id_pelajaran",
      });
    }
  }
  MataPelajaran.init({
    nama_pelajaran: DataTypes.STRING,
    thumbnail_pelajaran: DataTypes.STRING,
    id_mpk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MataPelajaran',
  });
  return MataPelajaran;
};