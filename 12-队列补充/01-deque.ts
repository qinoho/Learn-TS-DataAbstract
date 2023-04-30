import ArrayQueue from '../03-队列结构Queue/01-ArrayQueue'
class Deque<T> extends ArrayQueue<T> {
  addFront(el: T) {
    this.data.unshift(el)
  }
  removeBack(): T | undefined {
    return this.data.pop()
  }
}
