/**
 * @param {string} p
 * @return {Array<string>}
 */
function tokenize(p)
{
    let res = [];
    let index = 0;
    while (index < p.length) {
        if (p[index+1] == '*') {
            res.push(`${p[index]}${p[index+1]}`)
            index += 1;
        }
        else
        {
            res.push(`${p[index]}`)
        }
        index+= 1;
    }
    return res;
}

function matching(char, index, tokens )
{
    if ( tokens[index][0] == '.' || char == tokens[index][0] ) {
        return true;
    }
    return false;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p)
{
    let tokens = tokenize(p);

    let checked = new Map();

    function inner(strInd, patInd)
    {
        if (checked.has(`${strInd},${patInd}`)) {
            return checked.get(`${strInd},${patInd}`)
        }

        if (strInd == s.length) {
            if (patInd == tokens.length) {
                return true;     
            }
            else if (patInd < tokens.length && tokens[patInd].length == 2) {
                return inner(strInd, patInd+1)
            }
            checked.set(`${strInd},${patInd}`, false);
            return false;
        }

        else if (strInd < s.length  && patInd < tokens.length)
        {
            // * seen
            if (tokens[patInd].length == 2) {
                let starDeletesPrevChar = inner(strInd, patInd+1);
                if (starDeletesPrevChar)
                {
                    return true;
                }
                
                if (matching(s[strInd], patInd, tokens)) {
                    let startingToLookForNewPart = inner(strInd+1, patInd+1);
                    if (startingToLookForNewPart) {
                        return true;
                    }
                    let stillOnStar = inner(strInd+1, patInd);
                    if (stillOnStar) {
                        return true;
                    }
                    checked.set(`${strInd},${patInd}`, false);
                    return false;
                }

                // not matching with the * token
                else
                {
                    checked.set(`${strInd},${patInd}`, false);
                    return false;
                }
            }
            // single char
            else
            {
                if (matching(s[strInd], patInd, tokens)) {
                    return inner(strInd+1, patInd+1);
                }
                else
                {
                    checked.set(`${strInd},${patInd}`, false);
                    return false;
                }
            }
        }
        else
        {
            checked.set(`${strInd},${patInd}`, false);
            return false;
        }
    }
    return inner(0,0);
}

module.exports = isMatch;