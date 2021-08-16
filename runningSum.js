// https://leetcode.com/problems/running-sum-of-1d-array/
var runningSum = nums => nums.map((el, index) => nums.filter((e, i) => i <= index).reduce((a, b) => a+b));