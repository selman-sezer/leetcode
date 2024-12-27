/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    if (len==1) {
        return s;
    }

    let palSet = new Set();
    let diff = 1;
    let longesPal ; 




    while (diff <= 2) {
        let left = 0;
        while (left+diff < len) {
            if (s[left] == s[left+diff]) {
                palSet.add(`${[left, left+diff]}`);   
                longesPal =   [left, left+diff];
            }
            left+=1;
        }
        diff += 1;   
    }

   
    while (diff < len) {
        let left = 0;
        while (left+diff < len) {
            if (s[left] == s[left+diff] && palSet.has(`${[left+1, left+diff-1]}`)) {
                palSet.add(`${[left, left+diff]}`); 
                longesPal =   [left, left+diff];    
            }
            left+=1;
        }
        diff += 1;
    }    

    if (palSet.size == 0) {
        return s[0];
    }
    return s.slice(longesPal[0], longesPal[1]+1);
};
