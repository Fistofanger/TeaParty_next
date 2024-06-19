"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comments", [
      {
        commentText: "Jane Doe",
        userId: 1,
        teaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        commentText: "Jane Doe",
        userId: 1,
        teaId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
