// https://leetcode.com/problems/squares-of-a-sorted-array
var sortedSquares = nums => nums.map(el => el**2).sort((a, b) => a-b)