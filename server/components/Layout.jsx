const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, user, children }) {
  return (
    <html lang="ru">
      <head>
        <title>{title}</title>

        <link rel="stylesheet" href="/css/map.css" />
        <link rel="stylesheet" href="/css/style.css" />

        <script defer src="/scripts/auth.js" />

        <script src="https://api-maps.yandex.ru/2.1/?apikey=011e8e24-6ada-487e-94d9-802f04e0b473&lang=ru_RU" />
        <script defer src="/scripts/map.js" />

        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/form.css" />
        <link rel="stylesheet" href="/css/navbar.css" />
        <script defer src="/scripts/tea.js" />
        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/comment.js" />
      </head>
      <body className="flex-column">
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
