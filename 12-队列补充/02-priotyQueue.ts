import ArrayQueue from '../03-队列结构Queue/01-ArrayQueue'
import Heap from '../11-堆结构Heap/01-heap'

class PriortyQueue<T> {
  data: Heap<T> = new Heap<T>()
  enqueue(ele: T): void {
    this.data.insert(ele)
  }
  dequeue(): T | undefined {
    return this.data.extract()
  }
  size(): number {
    return this.data.size
  }
  isEmpty(): boolean {
    return this.data.isEmpty()
  }
  toString() {
    return this.data
  }
}

const pq = new PriortyQueue<number>()
pq.enqueue(10)
pq.enqueue(1)
pq.enqueue(20)
pq.enqueue(30)
pq.enqueue(11)
console.log(pq)
