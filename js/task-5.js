let cost = 0;
let countryDelivery = '';
let country = '';
let delivery;

country = prompt('Укажите страну доставки');

if (country === null) {
  alert('"Отменено пользователем!"');
} else if (country !== null) {
  country = country.toLowerCase();
} 
  switch (country) {
    case 'китай': {
      delivery = true;
      cost = 100;
      countryDelivery = 'Китай';
      break;
    }      
  
    case 'чили': {
      delivery = true;
      cost = 250;
      countryDelivery = 'Чили';
      break;
    }      
  
    case 'австралия': {
      delivery = true;
      cost = 170;
      countryDelivery = 'Австралию';
      break;
    }      
  
    case 'индия': {
      delivery = true;
      cost = 80;
      countryDelivery = 'Индию';
      break;
    }      
  
    case 'ямайка': {
      delivery = true;
      cost = 120;
      countryDelivery = 'Ямайку';
      break; 
    }         
  }   

if (delivery !== undefined && country !== null) {
  alert(`Доставка в ${countryDelivery} будет стоить ${cost} кредитов`);
} else if (delivery === undefined && country !== null) {
  alert('"Доставка в Вашу страну не осуществляется!"'); 
}

console.log(country);
console.log(delivery);