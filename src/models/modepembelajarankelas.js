'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModePembelajaranKelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ModePembelajaranKelas.belongsTo(models.ModePembelajaran, {
        foreignKey: "id_mode",
      });

      ModePembelajaranKelas.belongsTo(models.Kelas, {
        foreignKey: "id_kelas",
      });
      
      ModePembelajaranKelas.hasMany(models.MataPelajaran, {
        foreignKey: "id_mpk",
      });
    }
  }
  ModePembelajaranKelas.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    
    id_mode: DataTypes.INTEGER,
    id_kelas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModePembelajaranKelas',
  });
  return ModePembelajaranKelas;
};