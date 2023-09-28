/*
Given a string s, find the length of the longest 
substring
without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  let charMap = {};

  for (let i = 0; i < s.length; i++){
    const char = s[i];

    // if the char is already in the substring, update the start pointer
    if(charMap[char] !== undefined && charMap[char] >= start){
      start = charMap[char] + 1;
    }
    // update the character's index in the map
    charMap[char] = i;

    // calculate the length of the current substring
    const currentLen = i - start + 1;

    // update maxLength if the current substring is longer
    maxLength = Math.max(maxLength, currentLen);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));