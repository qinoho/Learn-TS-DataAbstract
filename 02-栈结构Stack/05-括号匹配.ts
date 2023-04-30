import Stack from './02-stackNew'

function isValid1(s: string): boolean {
  console.log('---------')
  const stack = new Stack()

  for (let i = 0; i < s.length; i++) {
    if (stack.isEmpty()) {
      stack.push(s.charAt(i))
    } else {
      console.log(stack)
      switch (s.charAt(i)) {
        case '}':
          if (stack.peek() === '{') {
            stack.pop()
          } else {
            stack.push(s.charAt(i))
          }
          break
        case ')':
          if (stack.peek() === '(') {
            stack.pop()
          } else {
            stack.push(s.charAt(i))
          }
          break
        case ']':
          if (stack.peek() === '[') {
            stack.pop()
          } else {
            stack.push(s.charAt(i))
          }
          break
        default:
          stack.push(s.charAt(i))
      }
      console.log(stack)
    }
  }
  return stack.isEmpty()
}

// 巧妙的利用replace

function isValid2(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false
  }
  let length = s.length / 2
  for (let i = 0; i < length; i++) {
    s = s.replace('{}', '').replace('()', '').replace('[]', '')
  }

  return s.length === 0
}
console.log(isValid1('[(({}))]'))
console.log(isValid1('(})'))

export {}
