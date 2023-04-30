// 二分查找
// 将要查找的数组分为平均的两份
//    每次可以分出一半

const arr = [1, 2, 3, 4, 22, 55, 88, 132, 123, 456, 852, 951, 1234, 1568]

// 查找456
function binarySearch(arr: number[], num: number) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let center = Math.floor((left + right) / 2)
    if (arr[center] === num) {
      return center
    } else if (num < arr[center]) {
      right = center - 1
    } else {
      left = center + 1
    }
  }
  return -1
}

console.log(binarySearch(arr, 456))
export {}
