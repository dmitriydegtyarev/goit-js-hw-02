// const loginInputRef = document.querySelector('input[name="login"]');

// const buttonRef = document.querySelector('button');

// let loginInput;

// buttonRef.addEventListener('click', () => {
//   loginInput = loginInputRef.value; 
//   console.log(loginInput);
//   return loginInput;
// });

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length < 4 || login.length > 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {    
    return true;
  }
  return false;
};

const addLogin = function (allLogins, login) {

  if (isLoginValid(login)) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return
  }

  if (isLoginUnique(allLogins, login)) {
    console.log(`Логин ${login} уже используется!`);
    return;
  }

  logins.push(login);
  console.log(`Логин ${login} успешно добавлен!`);
  console.log(logins);
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'