// https://leetcode.com/problems/two-sum/
const twoSum = (nums, target) => {
    for(let i=0;i<nums.length;i++){
        for(let k=i+1;k<nums.length;k++){
            if(nums[i] + nums[k] === target) {
                return [i, k];
            }
        }
    }
}