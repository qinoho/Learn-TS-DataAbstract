// 第一种 ： 利用栈结构
/**
 * Definition for singly-linked list.
 */
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

  let currentNode: ListNode | null = head
  let stack: ListNode[] = []
  while (currentNode) {
    stack.push(currentNode)
    currentNode = currentNode.next
  }
  let newHead: ListNode | null = null
  if (!newHead) newHead = stack.pop()!
  let newCurrentNode = newHead
  while (stack.length > 0) {
    newCurrentNode.next = stack.pop()!
    newCurrentNode = newCurrentNode!.next
  }
  newCurrentNode.next = null
  return newHead
}
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
console.log(reverseList(head))
export {}
