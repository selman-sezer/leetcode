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
        // mid =  Math.floor((start + end)/2);
        temp = nums[mid];
        if(temp == target)
        {
            return mid;
        }
        else if(temp > target)
        {
            end = mid-1;
            // end = mid;
            // bo = true;
            
        }
        else
        {
            start = mid+1;
            // start = mid;
            // bo= false;
            

        }
        mid =  Math.floor((start + end)/2);
    }
    console.log(`start : ${start}, end: ${end}, mid : ${mid}`);
    
    return start;
    
};

let nums =[2,3,5,6,8,9];
// let nums =[2,3];
let target =7;

console.log(searchInsert(nums, target));

target =4;

console.log(searchInsert(nums, target));




target =1;

console.log(searchInsert(nums, target));
/*
start   0 2 3
end     3 3 3
mid     1 2


 */


target =11;

console.log(searchInsert(nums, target));