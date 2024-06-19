const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <form
        action="/api/auth/registration"
        method="post"
        className="Registration"
      >
        <input type="text" placeholder="userName" name="userName" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="file" multiple placeholder="avatar" name="avatar" />
        <button type="submit">add</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;
