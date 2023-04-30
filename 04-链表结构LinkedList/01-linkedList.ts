import IList from './IList'

class Node<T> {
  value: T | null
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
class LinkedList<T> implements IList<T> {
  private head: Node<T> | null
  private rear: Node<T> | null
  private length: number

  constructor() {
    this.rear = this.head = null
    this.length = 0
  }
  // 封装公共方法 根据位置获取元素
  getPosition(position: number): Node<T> | null {
    let index = 0
    let currentNode = this.head

    while (currentNode && index++ < position) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  // 向尾部追加
  // 1.当链表为空的时候
  //    头尾指针在同时指向第一个元素
  // 2.当链表有值的时候
  //    头指针不动， 尾指针向后移动
  // 最后length++

  append(ele: T) {
    const newNode = new Node<T>(ele)
    if (this.length === 0) {
      this.head = this.rear = newNode
    } else {
      if (this.rear) this.rear.next = newNode
      this.rear = newNode
    }
    this.length++
  }
  // 在元素任意位置追加
  // 1.当插入位置不在链表长度范围之内
  //      直接return
  // 2.当插入位置为第一个，此时链表为空
  //      尾指针 = 头指针 = 新插入的
  //      length++
  // 3.其他位置，符合链表范围
  //      循环 链表
  //      上一个和当前位置
  //       length++
  // 3.1最后一个位置
  //     操作尾指针
  //      length++

  insert(position: number, ele: T) {
    if (position < 0 || position > this.length) return -1

    const newNode = new Node<T>(ele)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
      // 当rear 为 null 相当于队列为空的时候 使得头尾指针相等
      this.rear || (this.rear = this.head)
    } else {
      let prevNode = this.getPosition(position - 1)
      let currentNode = this.getPosition(position)
      prevNode!.next = newNode
      newNode.next = currentNode
      if (!currentNode) {
        this.rear = newNode
      }
    }
    this.length++
  }

  // 根据索引获取位置
  //  1.判断是否符合范围
  //  2.根据位置遍历
  //  2.1 当链表为空
  //      直接返回
  //

  get(position: number): T | null {
    if (position < 0 || position > this.length) return null
    if (this.length === 0) return null
    if (position === 0) {
      return this.head!.value
    } else {
      let currentNode = this.getPosition(position)
      return currentNode!.value
    }
  }
  // 根据元素获取位置
  // 遍历链表 -> 首先currentNode= head
  // currentNode = currentNode.next
  //
  indexOf(ele: T): number {
    let currentNode = this.head
    let index = 0
    while (currentNode) {
      if (currentNode.value === ele) {
        return index
      }
      index++
      currentNode = currentNode.next
    }
    return -1
  }

  // 更新链表
  // 1. 判断是否符合范围
  // 2. 当更新的位置为第一个
  // 2.1 头节点的元素更新
  // 2.2 如果此时链表正好为空，创建节点并插入
  // 3. 根据位置获取元素 修改
  updata(position: number, ele: T) {
    if (position < 0 || position > this.length - 1) return -1
    if (position === 0) {
      this.head!.value = ele
      // 当rear 为 null 相当于队列为空的时候 使得头尾指针相等
      if (!this.head) {
        const newNode = new Node<T>(ele)
        this.head = this.rear = newNode
      }
    } else {
      const currentNode = this.getPosition(position)
      currentNode!.value = ele
    }
  }

  // 根据位置删除元素
  // 1.判断是否符合范围
  // 2.删除位置为第一个
  //  2.1确定链表不为空才删除
  // 3.获取前一个元素和要删除的元素
  // 3.1 如果删除的是最后一个rear前移
  removeAt(position: number): T | null {
    if (position < 0 || position > this.length - 1) return null
    if (position === 0) {
      if (!this.head) return null
      let currentNode = this.head
      this.head = this.head!.next
      this.length--
      return currentNode!.value
    } else {
      let preNode = this.getPosition(position - 1)
      let currentNode = this.getPosition(position)
      if (!currentNode?.next) {
        this.rear = preNode
      }
      preNode!.next = currentNode!.next

      this.length--
      return currentNode!.value
    }
  }
  // 根据元素删除
  // 首先判断链表是否为空
  // 判断头节点是否就是 待删除节点
  //
  remove(ele: T): T | null {
    if (!this.head) return null
    if (this.head.value === ele) {
      let currentNode = this.head
      this.head = this.head.next
      this.length--
      return currentNode!.value
    }
    let prevNode = this.head
    let currentNode = this.head
    while (currentNode?.next) {
      if (currentNode.value === ele) {
        break
      }
      prevNode = currentNode
      currentNode = currentNode!.next
    }

    prevNode!.next = currentNode!.next
    if (!currentNode?.next) this.rear = prevNode!
    this.length--
    return null
  }
  isEmpty(): boolean {
    return this.length === 0
  }
  size(): number {
    return this.length
  }
}

const link = new LinkedList()
console.log(link.get(0))
link.insert(0, 'eee')
link.append('aaa')
link.append('bbb')
link.append('ccc')
link.append('ddd')
link.insert(5, 'hhh')
console.log(link)

console.log(link.get(0))
console.log(link.get(2))
console.log(link.get(5))

console.log(link.indexOf('eee'))
console.log(link.indexOf('aaa'))
console.log(link.indexOf('ddd'))

link.removeAt(0)
// link.removeAt(0)
console.log(link)
console.log(link.removeAt(1))
console.log(link)
// console.log(link.romove('eee'))

// link.updata(0, 'www')

// console.log(link)
// console.log(link.isEmpty())
// console.log(link.size())
// // link.romov
// link.remove('hhh')
// console.log(link)
export {}
