'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class HistoryTransaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            HistoryTransaction.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'id', as: 'user' })
        }
    }
    HistoryTransaction.init({
        transaction_id:DataTypes.STRING,
        user_id: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.DATEONLY,
            defaultValue: Sequelize.fn('now'),
        } 
    }, {
        sequelize,
        modelName: 'HistoryTransaction',
    });
    return HistoryTransaction;
};