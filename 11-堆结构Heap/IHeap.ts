export default interface IHeap<T> {
  insert(el: T): any
  extract(): T | undefined
  // heapfy_up(): any
  get size(): number
  isEmpty(): boolean
  peek(): T | undefined
  buildHeap(arr: T[]): any
}
