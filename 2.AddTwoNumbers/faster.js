/*
Runtime : 2 ms
Beats   : 96.78%

Memory  : 57.45 MB
Beats   : 14.87%

Faster solution but uses more memory
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode();
    let head = res;
    let temp;
    let carry = 0;
    while(l1 && l2)
    {
        temp = l1.val + l2.val + carry;
        if(temp >= 10)
        {
            
            res.next =  new ListNode(temp-10);
            res = res.next;
            carry = 1;
        }
        else
        {
            res.next = new ListNode(temp);
            res = res.next;
            carry = 0;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    if (carry) {
        res.next = addTwoNumbers(new ListNode(1), l1 || l2);
    }
    else
    {
        res.next = l1 || l2;
    }
    return head.next;
};