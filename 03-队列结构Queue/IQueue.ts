interface Queue<T> {
  // 入队操作，向队列尾部台南佳元素
  enqueue(ele: T): void
  // 移除元素， 移除队列头部的元素
  dequeue(): T | undefined
  // 查看队列第一个元素，不改变队列
  peek(): T | undefined
  // 判断队列是否为空
  isEmpty(): boolean
  // 查看队列元素个数
  size(): number
}

export default Queue
