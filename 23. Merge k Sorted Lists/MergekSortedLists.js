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


// prints list values in order
function printList(head)
{
    while (head != null) {
        console.log(head.val);
        head = head.next;
    }
}


/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let allNull = true;
    let dumbHeader = new ListNode();  
    let tail = dumbHeader;

    while (allNull) {
        let currentMin = 9999999; ;
        let minINdex ;
        allNull = false;

        for(let index = 0; index < lists.length ; index++)
        {
            
            let currentList = lists[index];
            if (currentList != null) {
                allNull = true;
                if (currentList.val <= currentMin) {
                    currentMin = currentList.val;
                    minINdex = index;
                }
            }
        }

        if (allNull) {
            lists[minINdex] = lists[minINdex].next;
            tail.next = new ListNode (currentMin);
            tail = tail.next;
        }
        else
        {
            return dumbHeader.next;
        }
        
    }  
    return dumbHeader.next;
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



let head2 = new ListNode(1);
let fir2 = new ListNode(3);
let sec2 = new ListNode(5);
let thi2 = new ListNode(7);
let fort2 = new ListNode(11, null);

thi2.next = fort2;
sec2.next = thi2;
fir2.next = sec2;
head2.next = fir2;

// printList(head);
// printList(head2);

let a = mergeKLists([head, head2]);
// a = mergeKLists([new ListNode()]);
printList(a);




