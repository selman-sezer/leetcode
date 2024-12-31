/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    let currentMinDifference = 99999999 ; 
    let res ;
    let left ;
    let right ;
    nums.sort((a,b)=>{return a-b});

    
    for (let index = 0; index < nums.length-1; index++) {
        targetValue = nums[index];
        left = index+1;
        right = nums.length-1;
        while (left < right) {
            let totalOfThree = (nums[left] + nums[right] + targetValue); 
            if (  Math.abs( target -  totalOfThree ) ==0 ) {
                return target;
            }
            else
            {
                if (Math.abs( target -  totalOfThree )  < currentMinDifference ) {
                    currentMinDifference = Math.abs( target -  totalOfThree ); 
                    res = totalOfThree;
                }
                if (totalOfThree > target) {
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
    return res;
};