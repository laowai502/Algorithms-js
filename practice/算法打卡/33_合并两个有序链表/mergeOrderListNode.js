/**
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 * 
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// js 创建链表辅助函数
function createLinkedList(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    const head = new ListNode(arr[0]); // 头节点
    let current = head; // 当前指针

    // 遍历数组中的元素，依次创建链表节点，并建立连接关系
    for (let i = 1; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = newNode;
    }

    return head;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    const dummyNode = new ListNode(0);
    let current = dummyNode;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    return dummyNode.next;
};

const l1 = createLinkedList([1,4,5]);
const l2 = createLinkedList([1,3,4]);

const mergedList = mergeTwoLists(l1, l2);
console.log(mergedList);

// O(n) O(1)