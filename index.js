function isPalindrome(word) {
  const wordArray = word.split("");
  const revWordArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    revWordArray.unshift(wordArray[i]);
  }
  let revWord = revWordArray.join("");
  console.log(word);
  console.log(revWord);
  if (word === revWord) {
    return true;
  } else {
    return false;
  }
}


// 1. convert string (word) to an array and assing it to a variable
// 2. create a new empty array
// 3. for each letter in the array, add it to the new array in reverse order
// 4. convert the new reversed array to a string
// 5. compare the two strings. If they're the same, return true. If not, return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
