"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.hasMany(models.Transaction_details, {
        foreignKey: "transactionId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Transaction.init(
    {
      name: { type: DataTypes.STRING, allowNull: true },
      total: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
      isPaid: { type: DataTypes.BOOLEAN, defaultValue: false },
      staff: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
