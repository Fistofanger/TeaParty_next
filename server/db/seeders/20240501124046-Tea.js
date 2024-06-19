/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [
      {
        teaName: 'Puer',
        teaLocation: '25.046519, 102.711330',
        teaDescription:
                    'Этот сорт отличается темно-коричневыми листьями, а цвет его настоя варьируется от светло-коричневого до почти черного оттенка. Необычный резковатый и немного вяжущий вкус этот вид чая приобретает из-за длительной обработки, завершающейся полной ферментацией чайных листьев.',
        teaType: 'Зеленый',
        teaImg: 'https://101tea.ru/upload/ammina.optimizer/jpg-webp/q70/upload/iblock/de4/de4225684257d33ff24a7199bca4dc94.webp',
        teaRegion: 'Юньнань',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teaName: 'Мате',
        teaLocation: '-25.265191, -57.488709',
        teaDescription:
                    'Чай мате обладает оздоровительными, стимулирующими, очищающими и тонизирующими свойствами. Этот напиток получают из высушенных листьев падуба парагвайского.',
        teaType: 'Зеленый',
        teaImg: 'https://coffeelb.ru/upload/medialibrary/1b0/1b07bfa7be4345af2be195a2a8cdcbb9.jpeg',
        teaRegion: 'Парагвай',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teaName: 'Дарджилинг',
        teaLocation: '28.632853, 77.219725',
        teaDescription:
                    'Дарджилинг имеет классический хлебно-пряный вкус индийского чая, если бы не нежная цветочная нотка. Напиток плотный. Чуть менее крепкий, чем Ассам. Немного терпкий, с фруктовой кислинкой и стойким освежающим послевкусием.',
        teaType: 'Черный',
        teaImg: 'https://teashades.ru/wp-content/uploads/2019/09/chernyj-chaj-dardzhiling-1024x672.jpg',
        teaRegion: 'Индия',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teaName: 'Лун Цзин',
        teaLocation: '20.048576, 110.196534',
        teaDescription:
                    'Лун Цзин – эстетичный, яркий, с гармоничным вкусом и нежным, чуть сладковатым послевкусием. Благодаря уникальному цветочно-травяному аромату этот чай запоминается сразу и навсегда!',
        teaType: 'Зеленый',
        teaImg: 'https://domhu.ru/blog/8-1.jpg',
        teaRegion: 'Китай',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teaName: 'Викулькина жижка',
        teaLocation: '59.867933, 29.452831',
        teaDescription:
                    'С легкими нотками дуба, которого ты дашь, если его выпьешь.',
        teaType: 'Болотный',
        teaImg: '/img/zhizha.jpeg',
        teaRegion: 'Пульман',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teas', null, {});
  },
};
