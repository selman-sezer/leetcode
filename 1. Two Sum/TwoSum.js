/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let newArray = Array.from(nums);
    nums.sort((a,b)=> {return a-b});

    while(left < right)
    {   
        let total = nums[left] + nums[right];
        if (total == target) {
            break;
        }
        else
        {
           if (total < target) {
                left++;
           }
           else
           {
            right--;
           }
        }
    }
    return [newArray.indexOf(nums[left]), newArray.lastIndexOf(nums[right])]
};
