/*
my solution without using built in methods 
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
    // return haystack.indexOf(needle);
    let curr= 0;
    let max = needle.length;
    let hayLength = haystack.length;

    for (let index = 0; index < hayLength; index++) {
        if (haystack[index] != needle[curr]) {
            index -= curr;
            curr = 0;
        }
        else
        {
            curr+=1;
            if (curr == max) {
                return index - max+1;
            }   
        }
    }
    return -1;
};


let haystack = 'mississippi'; needle = "issip";
console.log(strStr(haystack, needle));



