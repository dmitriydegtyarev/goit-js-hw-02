let total = 0;
let input = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    alert('Отменено пользователем');
    break
  } 

  input = Number(input);

  if (Number.isNaN(input)) {
    alert('Введите числовое значение!');
    continue;
  }

  total += input;
}

if (total > 0) {
  alert(`Общая сумма чисел равна ${total}`);
}