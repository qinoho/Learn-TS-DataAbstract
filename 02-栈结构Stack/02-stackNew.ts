import IStack from './04-Istack'
class ArrayStack<T = any> implements IStack<T> {
  // 泛型  默认  any
  private data: T[] = []

  // push 往 栈 里面添加数据
  push(ele: T): void {
    this.data.push(ele)
  }

  // pop 返回栈顶的元素
  pop(): T | undefined {
    return this.data.pop()
  }

  // peek 查看栈顶元素， 但是不改变原栈
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  // isEmpty 判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // size 返回栈的元素个数
  size(): number {
    return this.data.length
  }
}
const stack = new ArrayStack<string>()

// stack.push(123)
stack.push('abc')
// stack.push(321)
stack.push('ccc')
stack.push('eee')

// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.pop())
let res = stack.pop()
// res现在有两种值
// string 和 undefined
// 所以直接使用split有可能会报错
// 解决 使用  ?.  或者类型缩小 if(res) 在对其使用字符串的操作

console.log(stack.isEmpty())
console.log(stack.size())

export default ArrayStack
