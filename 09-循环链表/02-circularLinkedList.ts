import LinkedList from './01-linkedList'
import { Node } from './01-linkedList'

class CircularLinkedList<T> extends LinkedList<T> {
  append(ele: T): Node<T> {
    this.rear = super.append(ele)
    this.rear.next = this.head
    return this.rear
  }
  insert(position: number, ele: T): -1 | undefined {
    super.insert(position, ele)
    if (position === this.length) {
      this.rear!.next = this.head
    }
    if (position === 0) {
      this.rear!.next = this.head
    }
    return
  }

  remove(ele: T): T | null {
    console.log(ele)
    console.log(this.head?.value)
    if (ele === this.head?.value || ele === this.rear?.value) {
      super.remove(ele)
      this.rear!.next = this.head
    } else {
      super.remove(ele)
    }

    return null
  }

  removeAt(position: number): T | null {
    const res = super.removeAt(position)
    if (position === this.length) {
      this.rear!.next = this.head
    }
    if (position === 0) {
      this.rear!.next = this.head
    }
    return res
  }

  tranverse() {
    const str: T[] = []
    let currentNode = this.head

    while (currentNode) {
      str.push(currentNode.value!)
      currentNode = currentNode.next
      if (currentNode?.next === this.head) {
        str.push(this.head!.value!)
        break
      }
    }
    console.log(str.join('->'))
  }
}

const cll = new CircularLinkedList<number>()
cll.append(0)
cll.append(1)
cll.append(2)
cll.append(3)
cll.append(4)
cll.append(5)

cll.insert(0, 10)
cll.insert(5, 20)
cll.insert(7, 30)

cll.tranverse()
cll.remove(10)
cll.tranverse()
