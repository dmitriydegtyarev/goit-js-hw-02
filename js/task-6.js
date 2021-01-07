let input = 0;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число', '');

  if (input === null) {
    alert('Отменено пользователем');
    break
  } 

  if (input === '') {
    alert('Число введено не было, попробуйте еще раз');
    continue;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }

  numbers.push(input);
  // total += input;
};

console.log(numbers);

for (const number of numbers) {
  total += number
}

if (numbers.length > 0) {
   console.log(`Сумма элементов массива = ${total}`);
};