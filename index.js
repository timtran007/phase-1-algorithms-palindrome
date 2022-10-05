function isPalindrome(word) {
  let reverseWord = word.split(' ').map(char => char.split('').reverse().join(''))
  return word === reverseWord.join()? true : false
}



/* 
  the function isPalindrome takes in a word that is a string. 
  Let the variable reverseWord represent our variable word that is split into individual characters chain the map method to create a new array char pushes a reverse method and joining the characters
  if word is strictly equal to reverseWord then return out the boolean of true...
  else if word is not strictly the reverseWord return the boolean of false
*/

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
