function isPalindrome(word) {
  // Write your algorithm here
  var reg = /[\W_]/g;
  var smallStr = word.toLowerCase().replace(reg, '');
  var reverseStr = smallStr.split('').reverse().join('');
  if (smallStr === reverseStr) {
    return true;
  }
  return false

}

/* 
  Add your pseudocode here
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
