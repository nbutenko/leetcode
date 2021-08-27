// https://leetcode.com/problems/sort-colors
var sortColors = function(nums) {
    for(let i =0;i<nums.length;i++){
        if(nums[i] < nums[i-1]){
            let temp = nums[i-1];
            nums.splice(i-1, 1);
            nums.push(temp);
            return sortColors(nums)
        }
    }
    return nums
};