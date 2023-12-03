function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// 这个算法的时间复杂度是 O(max(N, M))，其中 N 和 M 分别是两个链表的长度。这个算法有效地处理了两个逆序存储的链表相加的问题。

var addTwoNumbers = function(l1, l2) {
    let carry = 0; // 进位
    let res = new ListNode();
    let cur = res;
    while(l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        cur.next = new ListNode(sum % 10)
        cur = cur.next;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    return res.next;
};

const head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(3);

const head2 = new ListNode(5);
head2.next = new ListNode(6);
head2.next.next = new ListNode(4);
head2.next.next.next = new ListNode(9);

let head3 = addTwoNumbers(head, head2);
while(head3) {
    console.log(head3.val);
    head3 = head3.next;
}