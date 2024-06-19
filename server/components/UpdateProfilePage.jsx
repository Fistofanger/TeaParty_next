const React = require('react');
const Layout = require('./Layout');

function UpdateProfilePage({ title, user}) {
  return (
    <Layout title={title} user={user}>
      <h1>Изменить профиль</h1>
      <form
        action={`api/auth/${user.id}/update`}
        method='PUT'
        className='FormUpdateProfile'
        data-userid={user.id}
      >
        <input type='text' name='userName' value={user.userName}  required minlength="3"/>
        <input type='text' name='email' value={user.email}  required minlength="3"/>
        <input type='file' multiple placeholder='avatar' name='avatar'  required minlength="3"/>
        <button type='submit'>Изменить данные</button>
      </form>
      
    </Layout>
  );
}

module.exports = UpdateProfilePage;