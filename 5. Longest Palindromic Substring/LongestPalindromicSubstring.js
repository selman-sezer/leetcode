/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    let diff = s.length -1;
    let pairs = [];

    let end ;
    while (diff) {
        end = diff;
        let left = 0;
        while (end < len) {
            if (s[left] == s[left+diff]) {
                pairs.push([left, left+diff]);     
            }
            left+=1;
            end +=1;
        }
        diff -= 1;
    }
    let palSet = new Set();
    let currentPair;

    while (pairs.length > 0) {
        currentPair = pairs.pop();
        if ((currentPair[1] - currentPair[0])  < 3) {
            palSet.add(`${currentPair}`);
        }
        else if ( (currentPair[1] - currentPair[0])  >= 3 && (palSet.has(`${[currentPair[0]+1, currentPair[1]-1]}`))) {
            palSet.add(`${currentPair}`);
        }
    }

    let max = 0;
    let leftSide;
    let rightSide;

    for(let pair of palSet)
    {
        pair = pair.split(',');
        let dif = +pair[1] - +pair[0];
        if (dif > max) {
            leftSide = +pair[0];
            rightSide = +pair[1];
            max = dif;
        }
    }
    if (max == 0) {
        return s[0];
    }
    return s.slice(leftSide, rightSide+1);
};