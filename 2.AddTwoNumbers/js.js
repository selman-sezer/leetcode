/*
mid level
Runtime : 5 ms
Beats   : 46.30% 

Memory  : 55.86 MB
Beats   : 92.83%

slower but uses less memory
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


function print(a)
{
    if(a) {
        console.log(a.val);
        print(a.next);
    }
}
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

    while(l1 || l2)
    {
        temp = (l1?.val || 0) + (l2?.val || 0) + carry;
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
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry) {
        res.next = new ListNode(1,null);
    }
    return head.next;
};
