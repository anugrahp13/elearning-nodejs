'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModePembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ModePembelajaran.belongsToMany(models.Kelas, {
        through:models.ModePembelajaranKelas,
        as:"kelas",
        foreignKey: "id_mode",
      })
    }
  }
  ModePembelajaran.init({
    nama_mode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ModePembelajaran',
  });
  return ModePembelajaran;
};