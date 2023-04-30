/*队列*
 * 队列：queue 受限数组
 *    先进先出
 *    first in first out  FIFO
 *    last in last out   LILO
 *    只能操作队列的头
 * */
import IQueue from './IQueue'
export default class ArrayQueue<T> implements IQueue<T> {
  protected data: T[] = []

  enqueue(ele: T): void {
    this.data.push(ele)
  }
  dequeue(): T | undefined {
    return this.data.shift()
  }
  peek(): T | undefined {
    return this.data[0]
  }
  isEmpty(): boolean {
    return this.data.length === 0
  }
  size(): number {
    return this.data.length
  }
}

// const q = new ArrayQueue<string>()

// q.enqueue('123')
// q.enqueue('456')
// q.enqueue('678')
// q.enqueue('789')

// console.log(q.dequeue())

// console.log(q.peek())
// console.log(q.size())
