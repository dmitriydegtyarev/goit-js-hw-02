const checkForSpam = function(message) {
  const spamAndSale = message.toLowerCase();
  const trueSpamAndSale = spamAndSale.includes('spam') || spamAndSale.includes('sale');

  // return spamAndSale.includes('spam') || spamAndSale.includes('sale') ? true : false;

  return trueSpamAndSale;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

