// https://leetcode.com/problems/sort-array-by-parity
var sortArrayByParity = nums => nums.filter(el => !(el % 2)).concat(nums.filter(el => el % 2))