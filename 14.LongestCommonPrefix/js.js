/*
Runtime
0 ms
Beats
100.00%


Memory
49.23 MB
Beats
71.23%
*/




/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let index = 0;
    while (true) {
        let char = strs[0][index];
        if (char != undefined && strs.every((x)=> x[index] == char ) )
        {
            prefix += char;
        }
        else
        {
            return prefix;
        }
        index += 1;
    }
};

