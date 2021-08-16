// https://leetcode.com/problems/move-zeroes/
var moveZeroes = nums => {
    let l = nums.length;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 0) {
            nums.splice(i, 1);
            i--;
        }
    }
    while(nums.length < l) nums.push(0);
}