interface IStack<T> {
  // 往栈添加元素
  push(ele: T): void
  // pop 返回栈顶的元素
  pop(): T | undefined
  // peek 查看栈顶元素， 但是不改变原栈
  peek(): T | undefined
  // isEmpty 判断栈是否为空
  isEmpty(): boolean
  // size 返回栈的元素个数
  size(): number
}

export default IStack
