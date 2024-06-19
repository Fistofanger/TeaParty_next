/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        userName: 'Вася Пупкин',
        email: 'v@puk',
        password: '123',
        avatar: '/img/pupkin.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Вася Шизик',
        email: 'v@shiz',
        password: 'qqq',
        avatar: '/img/shizik.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Любитель Викульки',
        email: '111@111',
        password: '111',
        avatar: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
