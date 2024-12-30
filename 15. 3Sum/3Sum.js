/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    let resultArray = [];
    let left ;
    let right ;
    nums.sort((a,b)=>{return a-b});
    let targetValue ;
    
    for (let index = 0; index < nums.length-1; index++) {
        targetValue = -1 * nums[index];
        left = index+1;
        right = nums.length-1;
        while (left < right) {
            if ( (nums[left] + nums[right]) == targetValue) {
                resultArray.push([nums[left], -targetValue+0, nums[right]] ) ;
                left++;
                right--;
                while(left < right && nums[left] == nums[left-1])
                    {
                        left++;
                    }
                    while(left < right && nums[right] == nums[right+1])
                    {
                        right--;
                    }
            }
            else
            {
                if (nums[left] + nums[right] > targetValue) {
                    right--;   
                }
                else{
                    left++;   
                }
            }
        }
        while (index < nums.length-1 && nums[index] == nums[index+1] ) {
            index++;
        }
    }
    return resultArray;
};