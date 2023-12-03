function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

function reversedHead(head) {
    if (!head || !head.next) {
        return head;
    }
    let pre = null;
    let cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

let reverseHead = reversedHead(head);

while(reverseHead != null) {
    console.log(reverseHead.val)
    reverseHead = reverseHead.next;
}