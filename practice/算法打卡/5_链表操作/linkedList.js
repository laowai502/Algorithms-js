// js 实现链表，完成链表操作

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // 链表的头节点
    }

    append(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    unshift(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAfter(data, targetData) {
        const newNode = new ListNode(data);
        let current = this.head;
        while(current) {
            if (current.val === targetData) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
    }

    delete(data) {
        if (!this.head) return;
        if (this.head.val === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current) {
            if (current.next.val === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    contains(data) {
        let current = this.head;
        while (current) {
            if (current.val = data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    print() {
        const result = [];
        let current = this.head;
        while(current) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}

const Linked = new LinkedList();

Linked.append(1);
Linked.append(2);
Linked.append(3);
Linked.append(4);
Linked.append(5);
Linked.unshift(0);
Linked.insertAfter(2.5, 3);
Linked.delete(5);
Linked.print();