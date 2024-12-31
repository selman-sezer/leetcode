/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let currentIndex = 0;
    let currentNode  = head;
    let nodesArray = [];

    while (currentNode != null) {
        nodesArray.push(currentNode);
        currentIndex++;
        currentNode = currentNode.next;   
    }

    // deleting first node
    if (currentIndex == n ) {
        head = head.next;
    }

    // deleting last node
    else if (n == 1) {
        nodesArray[currentIndex - 2].next = null;
    }
    else
    {
        nodesArray[currentIndex - (n+1)].next = nodesArray[currentIndex - (n-1)];
    }
    return head;
};