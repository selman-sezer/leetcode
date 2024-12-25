/*
Runtime : 0 ms
Beats   : 100.00% 
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let last = s.length-1;
    while(s[last] == ' ')
    {
        last -= 1;
    }
    let len = 0;
    while(last >= 0 && s[last] != ' ')
    {
        len+= 1;
        last-=1;
    }
    return len;
};