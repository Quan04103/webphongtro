'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: 'userId', as: 'user' })
      User.hasMany(models.HistoryTransaction, { foreignKey: 'user_id', as: 'userTransaction' })
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    zalo: DataTypes.STRING,
    fbUrl: DataTypes.STRING,
    avatar: DataTypes.BLOB,
    money: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};