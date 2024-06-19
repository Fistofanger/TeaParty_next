const React = require('react');
const Layout = require('./Layout');

function ProfilePage({ title, userR}) {
  return (
    <Layout title={title} user={userR}>
      <h1>Профиль</h1>
      <div className='profileCard'>
        <div className='avatar'><img src={userR.avatar} alt="avatar" className='avaImg'/></div>
        
        <div className='textProfile'>
          <div className='userName'>Имя: {userR.userName}</div>
          <div className='email'>Почта: {userR.email}</div>

          
        </div>
        
      </div>
      <button type='button' className='btn-update'>
           <a href={`/profile/${userR.id}/update`}>Изменить</a></button>
       
      
    </Layout>
  );
}

module.exports = ProfilePage;