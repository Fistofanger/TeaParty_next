import NavLink from './navlink/NavLink';

const linksArr = [
  {
    title: 'Главная',
    path: '/',
  },
  {
    title: 'Чайная карта',
    path: '/teamap',
  },
  {
    title: 'Чаи',
    path: '/teas',
  },
];

//Temp
const session = true;

export default function Links() {
  return (
    <>
      {linksArr.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {!session ? (
        <>
          <NavLink item={{ title: 'Регистрация', path: '/registration' }} />
          <NavLink item={{ title: 'Авторизация', path: '/login' }} />
        </>
      ) : (
        <>
          <NavLink item={{ title: 'Профиль', path: '/profile' }} />
          <button>Выйти</button>
        </>
      )}
    </>
  );
}

// {
//     title: 'Авторизация',
//     path: '/login',
//   },
//   {
//     title: 'Регистрация',
//     path: '/registration',
//   },
