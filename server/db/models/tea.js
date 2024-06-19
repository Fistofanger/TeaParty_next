const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Favorite, User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'teaId' });
      this.hasMany(Favorite, { foreignKey: 'teaId' });
    }
  }
  Tea.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      teaName: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      teaLocation: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      teaDescription: {
        allowNull: false,
        type: DataTypes.TEXT,
      },

      teaType: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      teaImg: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      teaRegion: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
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
      modelName: 'Tea',
    },
  );
  return Tea;
};
