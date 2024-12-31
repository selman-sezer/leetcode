/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    let resultArray = [];
    nums.sort((a,b)=>{return a-b});

    for (let outerLeft = 0; outerLeft < nums.length-2; outerLeft++) {
        let targetOfThree = target - nums[outerLeft];
        for (let index = outerLeft+1; index < nums.length-1; index++) {
            let targetValue = targetOfThree -  nums[index];
            let left = index+1;
            let right = nums.length-1;
            while (left < right) {
                if ( (nums[left] + nums[right]) == targetValue) {
                    resultArray.push([nums[outerLeft], nums[left], nums[index], nums[right]] ) ;
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
    while (outerLeft < nums.length-2 && nums[outerLeft] == nums[outerLeft+1]) {
        outerLeft++;
    }
    }
    return resultArray;
};