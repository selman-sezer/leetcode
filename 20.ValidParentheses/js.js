/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let reverse = [];
    let obj =  { '(' : ')', '{' : '}', '[' : ']'};

    for(let char of s)
    {
        if (char == '(' || char == '{' || char == '[') {
            reverse.push(obj[char]);
        }
        else
        {
            if (char != reverse.pop()) {
                return false;
            }
        }
    }
    return reverse.length == 0;
};



/*
alternative solution, 
first one is 2 times faster
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function(s) {

    let obj = {
        '(': 0,
        set ')'(n) {
            this['('] -= 1;
        },

        '[': 0,
        set ']'(n) {
            this['['] -= 1;
        },

        '{': 0,
        set '}'(n) {
            this['{'] -= 1;
        },
    };

    let expected = '';
    let expecedArr = [];
    let values = { '(' : 1, '{' : 1 , '[' : 1, ']' : -1, '}' : -1 , ')' : -1};
    let expectedOjb = { '(' : ')', '{' : '}', '[' : ']'};


    for(const char of s)
    {
        if (obj['('] < 0 || obj['['] < 0 || obj['['] < 0) {
            return false;
        }
        else
        {
           if ( char in expectedOjb){
             obj[char]  += values[char];
             expecedArr.push(expectedOjb[char]);
           }
           else
           {
            expected = expecedArr.pop();
            if (char != expected) {
                return false;
            }
            obj[char]  += values[char];
           }
        }
    }
    return obj['('] == 0 && obj['['] == 0 && obj['['] == 0;
};











// let s = "()";
// let s = "()[]{}";
// let  s = "(]";
// let s = "([])"
let s = "([]{(}))"

const t1 = performance.now();
for (let index = 0; index < 100; index++) {
    isValid(s);
}
const t2 = performance.now();
console.log(`time : ${(t2-t1)}`);




const t3 = performance.now();
for (let index = 0; index < 100; index++) {
    isValid1(s);
}
const t4 = performance.now();
console.log(`time : ${(t4-t3)}`);
