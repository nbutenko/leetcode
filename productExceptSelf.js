// https://leetcode.com/problems/product-of-array-except-self
var productExceptSelf = nums => nums.map((el, index) => (nums.slice(0, index).concat(nums.slice(index+1))).reduce((a, b) => a*b));

var productExceptSelf2 = nums => {
    let prod = nums.reduce((a,b) => a*b);
    return nums.map((el, index) => el !== 0 ? prod / el : (nums.slice(0, index).concat(nums.slice(index+1))).reduce((a, b) => a*b));
}