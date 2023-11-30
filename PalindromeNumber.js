/*
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // check for special cases where number is less than 0 and numbers that end with 0
  if(x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  // Initialize variables to store the reversed number and the original number
  let numReverse = 0;
  let initialNum = x;

  // Reverse the number
  while (x > 0){
    // Get the last digit of the number
    const digit = x % 10;
     // Add the digit to the reversedNumber after shifting its digits one place left
    numReverse = numReverse * 10 + digit;
    // Remove the last digit from x
    x = Math.floor(x / 10);
  }
  // Compare the original number with the reversed number to check for palindrome
  return (initialNum === numReverse);
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));