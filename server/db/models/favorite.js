const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Tea }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Tea, { foreignKey: 'teaId' });
    }
  }
  Favorite.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      teaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Teas',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Favorite',
    },
  );
  return Favorite;
};
