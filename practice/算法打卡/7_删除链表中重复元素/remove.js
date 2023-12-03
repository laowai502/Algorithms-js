function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head;
    let current = head;
    while(current.next) {
        if (current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current  = current.next;
        }
    }
    return head;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);


let res = deleteDuplicates(head);
while(res) {
    console.log(res.val);
    res = res.next;
}

// O(n), O(1)