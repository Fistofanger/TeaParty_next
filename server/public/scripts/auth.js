const registartionForm = document.querySelector('.Registration');
const authorizationForm = document.querySelector('.Authorization');

if (registartionForm) {
  registartionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { userName, password, email } = e.target;
    console.log(userName, password, email);

    if (
      userName.value.trim() === '' ||
      password.value.trim() === '' ||
      email.value.trim() === '' ||
      email.value.includes(' ')
    ) {
      alert('Заполните все поля');
      return;
    }

    const res = await fetch('/api/auth/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName.value,
        password: password.value,
        email: email.value,
      }),
    });
    const data = await res.json();

    // console.log(data);

    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}

// if (authorizationForm) {
//   authorizationForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const { password, email } = event.target;

//     if (password.value.trim() === '' || email.value.trim() === '') {
//       alert('Заполните все поля');
//       return;
//     }

//     const res = await fetch('/api/auth/authorization', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         password: password.value,
//         email: email.value,
//       }),
//     });

//     const data = await res.json();

//     if (data.message === 'success') {
//       window.location.assign('/');
//     } else {
//       alert('Неверные данные');
//     }
//   });
// }



