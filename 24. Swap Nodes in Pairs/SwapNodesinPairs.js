// prints list values in order
function printList(head)
{
    let temp = head;
    while (temp != null) {
        console.log(temp.val);
        temp = temp.next;
    }
}

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


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head == null || head.next == null) {
        return head;
    }

    let tempHead = head;
    const dummyHead = new ListNode(0, tempHead);


    let firstOne ;
    let secondOne;
    let priorOne  = dummyHead;

    while (tempHead) {
        if (tempHead.next == null) {
            tempHead = tempHead.next;
        }
        else
        {
            firstOne = tempHead;
            secondOne = tempHead.next;

            priorOne.next = secondOne;
            firstOne.next = secondOne.next;
            secondOne.next = firstOne;

            priorOne = tempHead;
            tempHead = tempHead.next;
        }
    }
    return dummyHead.next;
};



// to check
let head = new ListNode(2);
let fir = new ListNode(3);
let sec = new ListNode(6);
let thi = new ListNode(8);
let fort = new ListNode(12, null);

thi.next = fort;
sec.next = thi;
fir.next = sec;
head.next = fir;


printList(head);
let a = swapPairs(head);
console.log('\n===\n');
printList(a);