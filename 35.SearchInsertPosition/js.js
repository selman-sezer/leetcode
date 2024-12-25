/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid =  Math.floor((start + end)/2);
    let temp;

    while(start <= end)
    {
        temp = nums[mid];
        if(temp == target)
        {
            return mid;
        }
        else if(temp > target)
        {
            end = mid-1;
        }
        else
        {
            start = mid+1;
        }
        mid =  Math.floor((start + end)/2);
    }
    return start;
};
