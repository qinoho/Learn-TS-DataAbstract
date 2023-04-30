// 顺序查找
// 从头开始顺序的向后查找
const arr = [1, 2, 3, 4, 22, 55, 88, 132, 123, 456, 852, 951, 1234, 1568]

// 查找456
function orderSearch(arr: number[], num: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
  return -1
}

console.log(orderSearch(arr, 456))

export {}
