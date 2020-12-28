const findLongestWord = function(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  console.log(longestWord);
};

findLongestWord('The quick brown fox jumped over the lazy dog'); // 'jumped'

findLongestWord('Google do a roll'); // 'Google'

findLongestWord('May the force be with you'); // 'force'