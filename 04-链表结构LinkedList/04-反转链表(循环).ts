// 循环
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null
  let currentNode: ListNode | null
  let newHead: ListNode | null = null

  while (head) {
    currentNode = head
    head = head.next
    currentNode.next = newHead
    newHead = currentNode
  }

  return newHead
}
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
console.log(reverseList(head))

export {}
