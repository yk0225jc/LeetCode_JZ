const maxSubArray = (nums) =>{
    //hold the current value
    let currentValue = nums[0];
    //hold the total value
    let totalValue = nums[0];

    if(nums.length ===0){
        return 0;
    }
    for(let i = 1; i<nums.length; i++){
        //if the current value is larger than the sum value
        if(nums[i] > currentValue + nums[i]){
            currentValue = nums[i];
        }
        else if(nums[i] < currentValue + nums[i] || nums[i] == currentValue +nums[i]) {
            currentValue = nums[i] + currentValue;
        }

        if(currentValue > totalValue) {
            totalValue = currentValue;
        }
    }

    console.log(totalValue);

}