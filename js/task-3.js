const ADMIN_PASSWORD = 'jqueryismyjam';
let message = '';

message = prompt('Введите пароль');

if (message === null) {
  alert('"Отменено пользователем!"');
} else if (message === ADMIN_PASSWORD) {
  alert('"Добро пожаловать!"');
} else {
  alert('"Доступ запрещен, неверный пароль!"');
}

console.log(message);