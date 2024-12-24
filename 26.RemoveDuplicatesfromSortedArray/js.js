/*
Runtime:    0 ms 
Beats :     100.00%
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = 0;
    let numsMap = new Map();
    for(const num of nums )
    {
        if(! numsMap.has(num))
        {
            nums[unique] =num;
            unique += 1;
            numsMap.set(num, true);
        }
    }
    return unique;
};

