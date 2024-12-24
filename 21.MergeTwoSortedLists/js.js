/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// in place merging
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1==null)
        return list2;
    if(list2 == null)
        return list1;

    let res;
    let other;
    // finding the list with the minumum first element
    if (list1.val <= list2.val) {
        res = list1;
        other = list2;
    }
    else
    {
        res = list2;
        other = list1;
    }
    let head = res;
    let otherNext;
    while (other && res?.next) {
        if (res.next.val <= other.val) {
            res = res.next;
        }
        else
        {
            otherNext = other.next;
            other.next = res.next;
            res.next = other;
            other= otherNext;
            res = res.next;
        }
    }
    
    res.next = other || res.next;
    return head;
};