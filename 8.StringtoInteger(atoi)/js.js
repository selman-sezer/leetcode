/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    s = s.trim();
    if(s.length ==0)
    {
        return 0;
    }
    let negative = 1;
    let index = 0;
    if(s[0] == '-' || s[0] == '+')
    {
        if(s[0] == '-')
        {
            negative = -1;
        }
        index += 1;
    }
    if(!(s[index] >= '0' && s[index] <=9))
    {
        return 0;
    }
    else
    {
        let res = 0;
        let temp = s[index];
        while ( !(index >= s.length) &&(temp == '0'))
        {
            index+=1;
            temp = s[index];
        }

        while ( !(index >= s.length) &&(temp >= '0' && temp <='9' )) {
            if (res*negative >=2147483648) {
                return 2147483647;
            }
            if (res*negative < -2147483648) {
                return -2147483648;
            }
            res = res *10 + +temp;
            index+=1;
            temp = s[index];
        }
        if (res*negative >=2147483648) {
                return 2147483647;
            }
        if (res*negative < -2147483648) {
            return -2147483648;
        }
        return res*negative;
    }
};