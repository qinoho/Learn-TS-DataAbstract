import LinkedList, { Node } from './01-linkedList'

class DoublyNode<T> extends Node<T> {
  public prev: DoublyNode<T> | null = null
  public next: DoublyNode<T> | null = null
  // public value: T | null = null

  constructor(ele: T) {
    super(ele)
  }
}

class DoublyLinked<T> extends LinkedList<T> {
  public head: DoublyNode<T> | null = null
  public rear: DoublyNode<T> | null = null
  insert(position: number, ele: T): -1 | undefined {
    if (position < 0 || position > this.length) return -1
    const newNode = new DoublyNode<T>(ele)
    if (this.length === 0) {
      this.head = this.rear = newNode
    } else {
      if (this.length === position) {
        this.rear!.next = newNode
        newNode.prev = this.rear
        this.rear = newNode
      } else if (position === 0) {
        newNode.next = this.head
        this.head!.prev = newNode
        this.head = newNode
      } else {
        const current = this.getPosition(position) as DoublyNode<T>
        current.prev!.next = newNode
        newNode.prev = current.prev
        newNode.next = current
        current.prev = newNode
        this.rear = newNode
      }
    }

    this.length++
  }
  append(ele: T): Node<T> {
    const newNode = new DoublyNode<T>(ele)

    if (this.length === 0) {
      this.head = this.rear = newNode
    } else {
      newNode.prev = this.rear
      this.rear!.next = newNode
      this.rear = newNode
    }
    this.length++
    return newNode
  }
  preppend(ele: T): DoublyNode<T> {
    const newNode = new DoublyNode<T>(ele)

    if (this.length === 0) {
      this.head = this.rear = newNode
    } else {
      newNode.next = this.head
      this.head!.prev = newNode
      this.head = newNode
    }
    this.length++
    return newNode
  }

  remove(ele: T): T | null {
    if (this.length === 0) return null
    if (ele === this.head?.value) {
      this.head!.next!.prev = null
      this.head = this.head!.next
    } else if (ele === this.rear?.value) {
      this.rear!.prev!.next = null
      this.rear = this.rear!.prev!
    } else {
      let count = 0
      let delNode = this.getPosition(count) as DoublyNode<T>
      while (delNode) {
        if (delNode.value == ele) {
          break
        }
        count++
      }
      if (delNode) {
        delNode.prev!.next = delNode.next
        delNode.next!.prev = delNode.prev
      }
    }
    return ele
  }
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.length || this.length === 0)
      return null
    const delNode = this.getPosition(position) as DoublyNode<T>

    if (this.length === 1) {
      this.head = this.rear = null
      return delNode!.value
    }
    if (position === 0) {
      this.head!.next!.prev = null
      this.head = this.head!.next
    } else if (position === this.length - 1) {
      this.rear!.prev!.next = null
      this.rear = this.rear!.prev!
    } else {
      delNode.prev!.next = delNode.next
      delNode.next!.prev = delNode.prev
    }
    this.length--

    return delNode.value
  }

  tranversel(flag: boolean) {
    let current = flag ? this.head : this.rear
    while (current) {
      console.log(current.value)
      current = flag ? current.next : current.prev
    }
  }
}

const dl = new DoublyLinked<string>()

dl.insert(0, '1')
dl.insert(0, '2')
dl.insert(0, '3')

dl.preppend('4')
dl.preppend('5')

dl.append('001')
dl.append('002')
dl.tranversel(true)
// dl.removeAt(0)
// dl.removeAt(3)
// dl.removeAt(5)
dl.remove('5')
dl.remove('002')
dl.remove('003')
dl.tranversel(true)
// dl.tranversel(false)
