var twoSum = function (nums, target) {
    //确保你的nums里面有总和减去当前index的数值, 和确保那个被需要index的数值不是你目前x index的数值
    for(let i = 0; i < nums.length; i++){
        if(nums.includes(target - nums[i])){
            if(nums.indexOf(target-nums[i]) !==i){
                return [nums.indexOf(target-nums[i]), i]
            }
        }
    }

};

const nums = [3,2,3];
const target = 6;

twoSum(nums, target);


/* 
Input: nums = [3,2,4], target = 6
Output: [1,2]

*/