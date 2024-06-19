/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      teaName: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT,
      },
      teaLocation: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      teaDescription: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      teaType: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      teaImg: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      teaRegion: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Teas');
  },
};
