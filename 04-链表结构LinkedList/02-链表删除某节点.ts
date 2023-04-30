class Node<T> {
  value: T | null
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
/**
 * 受限操作
 * 只给当前要删除的元素
 * 与传统的方法不同之处
 *     只给出当前要删除的元素
 *    传统中会获取上一个以及当前要删除的元素
 *    此时删除没有上一个元素
 *    current.value = current.next.value
 *    current.next = current.next.next
 *
 */
// head -> (+)node -> node -> node <- rear
// head -> (+)node - -> node <- rear

function removeNode<T>(currentNode: Node<T>) {
  currentNode.value = currentNode!.next!.value
  currentNode.next = currentNode!.next!.next
}

export {}
