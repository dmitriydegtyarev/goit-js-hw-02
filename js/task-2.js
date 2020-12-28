const calculateEngravingPrice = function (message, pricePerWord) {
  const totalPrice = message.split(' ').length * Number(pricePerWord);
  console.log(`Гравировка надписи "${message}" будет стоить ${totalPrice} кредитов`);
};

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10); // 80

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20); // 160

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40); // 240

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20); // 120