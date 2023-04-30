import IHeap from './IHeap'

export default class Heap<T> implements IHeap<T> {
  heap: T[] = []
  length: number = 0
  flag: boolean = true

  constructor(arr: T[] = [], flag: boolean = true) {
    if (arr.length <= 0) return
    this.flag = flag
    this.buildHeap(arr)
  }

  private compare(x: number, y: number): boolean {
    if (this.flag) {
      return this.heap[x] > this.heap[y]
    } else {
      return this.heap[x] < this.heap[y]
    }
  }
  private swap(x: number, y: number) {
    let temp = this.heap[x]
    this.heap[x] = this.heap[y]
    this.heap[y] = temp
  }

  insert(el: T) {
    this.heap.push(el)
    this.heapfy_up()
    this.length++
  }
  extract(): T | undefined {
    if (this.size === 0) return
    if (this.size === 1) return this.heap.pop()
    const topValue = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.length--
    this.heapfy_down()
    return topValue
  }
  buildHeap(arr: T[]): any {
    this.heap = arr
    this.length = arr.length
    let index = Math.floor((this.length - 2) / 2)
    for (let i = index; i >= 0; i--) {
      this.heapfy_down(i)
    }
  }
  heapfy_up(index: number = this.size - 1) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (!this.compare(index, parentIndex)) {
        break
      }
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }
  heapfy_down(index: number = 0) {
    while (index * 2 + 1 < this.size) {
      let leftIndex = index * 2 + 1
      let rightIndex = index * 2 + 2
      let maxIndex: number = leftIndex
      // if (leftIndex >= this.size) break
      if (rightIndex < this.size - 1 && !this.compare(leftIndex, rightIndex)) {
        maxIndex = rightIndex
      }
      if (this.compare(index, maxIndex)) {
        break
      }
      this.swap(index, maxIndex)
      index = maxIndex
    }
  }
  get size(): number {
    return this.heap.length
  }
  isEmpty(): boolean {
    return this.heap.length === 0
  }
  peek(): T | undefined {
    if (this.heap.length) {
      return this.heap[0]
    }
  }
}

const h = new Heap<number>([1, 10, 20, 5, 50, 150, 100, 2, 3, 99], false)
// h.insert(1)
// h.insert(10)
// h.insert(20)
// h.insert(5)
// h.insert(50)
// h.insert(150)
// h.insert(100)
// h.insert(2)
// h.insert(3)
// h.insert(99)

console.log(h)
h.extract()
console.log(h)
