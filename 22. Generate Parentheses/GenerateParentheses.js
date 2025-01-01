/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    function countChar(s, c)
    {
        let res = 0;
        for(const char of s)
        {
            if (char == c) {
                res++;
            }
        }
        return res;
    }

    let res = [''];

    while (res[0].length < 2*n) {
        let newArray = []

        for(let str of res)
        {
            let leftParantCount = countChar(str, "(");

            if ( leftParantCount <= Math.floor(str.length /2) &&  leftParantCount < n ) {
                newArray.push (str + "(");
            }
            else if (leftParantCount < n) {
                newArray.push (str + "(");
                newArray.push (str + ")");
            }
            else
            {
                newArray.push (str + ")");
            }
        }
        res = newArray;
    }
    return res;
};