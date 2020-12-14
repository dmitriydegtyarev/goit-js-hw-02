const credits = 23580;
const pricePerDroid = 3000;
let order = 0;

order = prompt('Введите колличество ремонтных дроидов');

let totalPriceNegative = 0;
let totalPrice = 0;

totalPriceNegative = order * pricePerDroid - credits;
totalPrice = credits - (order * pricePerDroid);

if (order === null) {
  console.log('"Отменено пользователем!"');  
} else if (order <= 0) {
  // Задача в условии не стояла этой проверки, но логично было сделать эту проверку;
  console.log('Вы указали недопустимое значение, укажите количество дроидов от 1 шт и выше!');
} else if (order * pricePerDroid > credits) {
  // По условию не нужно считать, сколько кредитов не хватает, но так решение выглядит более законченным;
  console.log(`Недостаточно средств на счету! Вам не хватает ${totalPriceNegative} кредитов`);
} else if (order * pricePerDroid < credits) {
  console.log(`Вы купили ${order} дроидов, на счету осталось ${totalPrice} кредитов.`);
} else {
  // По условию делать не нужно, но так код более логичней получается;
  console.log('Повторите ввод, необходимо ввести цифровое значение'); 
}