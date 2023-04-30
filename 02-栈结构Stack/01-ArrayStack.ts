/**
 * 栈结构
 * 先进后出 frist in last out
 * 后入先出 last in frist out
 *
 * 利用栈结构特性
 *  6，5，4，3，2，1，下面哪个不是正确的出栈顺序 C
 *    A. 5 4 3 6 1 2
 *    B. 4 5 3 2 1 6
 *    C. 3 4 6 5 2 1
 *    D. 2 3 4 1 5 6
 *    注意点：在进栈的时候可以出栈
 *
 */

// 利用数组来实现栈结构
class ArrayStack {
  private data: any[] = []

  // push 往 栈 里面添加数据
  push(ele: any): void {
    this.data.push(ele)
  }

  // pop 返回栈顶的元素
  pop(): any {
    return this.data.pop()
  }

  // peek 查看栈顶元素， 但是不改变原栈
  peek(): any {
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
const stack = new ArrayStack()

stack.push(123)
stack.push('abc')
stack.push(321)
stack.push('ccc')

console.log(stack.peek())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.size())

export {}
