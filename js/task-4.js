const formatString = function (string) {  
  const stringLength = string.length;


  return stringLength <= 40 ? console.log(string) : console.log(string.slice(0, 40) + '...');
};

formatString('Curabitur ligula sapien, tincidunt non.');
// вернется оригинальная строка

formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
// вернется форматированная строка

formatString('Curabitur ligula sapien.');
// вернется оригинальная строка

formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');
// вернется форматированная строка