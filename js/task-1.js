const logItems = function (items) {
  for (let i = 0; i < items.length; i += 1) {
    const message = `Позиция ${i + 1} - ${items[i]}`;
    console.log(message);
  }  
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);