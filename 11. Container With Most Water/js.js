/*
Runtime : 1 ms
Beats   : 95.73%

Memory  : 56.60 MB 
Beats   : 95.92%

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    

    let left = 0;
    let right = height.length-1;

    let leftHeight  = height[left];
    let rightHeight = height[right];
    let min = leftHeight > rightHeight ? rightHeight : leftHeight;
    let water = min * (right - left);
    let tempwater; 

    while(left < right)
    {
        leftHeight = height[left];
        rightHeight = height[right];

        if (leftHeight < rightHeight) {
            while (left < right && height[left] <= min) {
                left+=1;
            }
            leftHeight = height[left];
        }
        else
        {
            while (left < right && height[right] <= min) {
                right -=1;
            }
            rightHeight = height[right];
        }


        min =  leftHeight > rightHeight ? rightHeight : leftHeight;
        tempwater = (right - left) * min;
        if (water <= tempwater) {
            water = tempwater;
        }
    }
    return water;
};