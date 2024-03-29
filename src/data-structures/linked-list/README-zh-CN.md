# 链表
在计算机科学中，一个 **链表** 是数据元素的线性集合，元素的线性顺序不是由它们在内存中的物理位置给出的。相反，每个元素指向下一个元素。它是由一组节点组成的数据结构。

在最简单的形势下，每个节点由数据和到序列中下一个节点的引用（指向下一个节点的指针，链接）组成。这个结构允许在迭代期间有效地从序列中的任何位置插入或删除元素。

更快的访问，如随机访问是不行的。与链表相比，数据具有更好的缓存位置。

实际应用：
* **数据库中的索引结构：** 在数据库中，链表用于构建索引结构，比如链式哈希表和链表树等索引结构
* **实现其他数据结构：** 链表可以用于实现其他数据结构，比如队列和栈。在队列和栈中，链表的特性使得元素的插入和删除操作更加高效。