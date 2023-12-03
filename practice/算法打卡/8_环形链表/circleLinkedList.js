// https://leetcode.cn/problems/linked-list-cycle/description/

/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。
   如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
   为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
   如果链表中存在环 ，则返回 true 。 否则，返回 false } val 
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function createLinkedListWithCycle(arr, cycleIndex) {
    if (arr.length === 0 || cycleIndex >= arr.length) {
        return null;
    }

    const head = new ListNode(arr[0]);
    let current = head;
    let cycleNode;

    for (let i = 1; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = newNode;

        if (i === cycleIndex) {
            cycleNode = newNode;
        }
    }

    // 创建环
    current.next = cycleNode;
    return head;
}

// 创建一个带有环的链表
const values = [1, 2, 3, 4, 5];
const cycleIndex = 4; // 设置环的起始位置

const linkedListWithCycle = createLinkedListWithCycle(values, cycleIndex);

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleDoublePoint = function(head) {
    if (!head) return false;
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
};

var hasMap = function(head) { // O(n) O(n)
    let map = new Map();
    while(head) {
        if (map.get(head)) return true;
        map.set(head, true);
        head = head.next;
        console.log(map);
    }
    return false;
}

console.log(hasMap(linkedListWithCycle));
console.log(hasCycleDoublePoint(linkedListWithCycle));