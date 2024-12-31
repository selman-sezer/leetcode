/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length == 0) {
        return []
    }
    let digitsToLettersMap = new Map();
    digitsToLettersMap.set(2, 'abc');
    digitsToLettersMap.set(3, 'def');
    digitsToLettersMap.set(4, 'ghi');
    digitsToLettersMap.set(5, 'jkl');
    digitsToLettersMap.set(6, 'mno');
    digitsToLettersMap.set(7, 'pqrs');
    digitsToLettersMap.set(8, 'tuv');
    digitsToLettersMap.set(9, 'wxyz');

    let result = [''];
    for(let digit of digits) {
        let tempList= [];
        while (result.length != 0) {
            let tempString = result.pop();
            let letters = digitsToLettersMap.get(+digit);
            for(const char of letters)
            {
                tempList.push(tempString+char);
            }
        }
        result = tempList;
    }
    return result;
};



let digits = "456";
console.log(letterCombinations(digits));
