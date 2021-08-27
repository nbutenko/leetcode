// https://leetcode.com/problems/valid-palindrome
var isPalindrome = s => {
    let str = s.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
    return str === str.split('').reverse().join('');
};