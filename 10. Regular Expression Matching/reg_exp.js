/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
    function innnerIsMatch(s, p, stringIndex, patternIndex, prevChar = '1') {
        // console.log(`Function call stringIndex : ${stringIndex}, patternIndex: ${patternIndex}, prevChar: ${prevChar} \n`);
        
        if (stringIndex < s.length && patternIndex < p.length) {
            
                // * character 
                if (p[patternIndex] == '*') {
                    // zero part of the *
                    let stepOver = innnerIsMatch(s, p, stringIndex,patternIndex+1 , prevChar);
                    if (stepOver) {
                        return true;
                    }
                    // stringIndex += 1;
                    while (stringIndex < s.length && (s[stringIndex] == prevChar) || (prevChar == '.') || ) {
                        let stepOver = innnerIsMatch(s, p, stringIndex+1, patternIndex+1, prevChar);
                        if (stepOver) {
                            return true;
                        }
                        stringIndex += 1;
                    }
                }

                // . character
                else if (p[patternIndex] == '.') {
                    stringIndex += 1;
                    patternIndex += 1;
                    prevChar = '.';
                    return innnerIsMatch(s, p, stringIndex,patternIndex , prevChar);
                }

                // regular character
                else
                {
                    if (p[patternIndex] != s[stringIndex]) {
                        return false;
                    }
                    prevChar = s[stringIndex];
                    patternIndex +=1;
                    stringIndex += 1;
                    return innnerIsMatch(s, p, stringIndex,patternIndex , prevChar);
                }
            
        }
    if (patternIndex == p.length && stringIndex == s.length) {
        return true;    
    }
    return false;
    }
    return innnerIsMatch(s,p,0,0);
};
