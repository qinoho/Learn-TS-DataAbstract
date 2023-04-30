/**
 * 哈希表 （ hashMap ）
 * 装填因子：实际内容数量 / 最大能盛放数量 > 0.75需要扩容 < 0.25需要缩容
 * 基于数组， 利用哈希函数将字符转成数字下表
 *    但是下标会出现相同的情况，解决办法是有以下两种
 *    1.链地址法
 *      1.1 将哈希完之后下标相同的放入一个数组
 *      1.2 放入一个链表
 *      1.3 树结构....
 *    2.开放地址法
 *      向后找，直到找到为空的位置
 *      2.1 线性查找  每次步长增长为固定值 1 2 3 4 5 6...
 *      2.2 二次探测  每次步长增长不再固定 1 2² 3³ 4⁴ ...
 *      这两种都会引起不同情况的聚集
 *      2.3 再哈希法 step = constant - （key % constant）
 *
 * */

import hashFunction from './hashFunction'

// 采用链地址法
class HashMap<T> {
  storage: [string, number][][] = []
  length = 7
  count = 0

  isPrime(num: number): boolean {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }
  // 获取质数
  getPrime(num: number) {
    while (!this.isPrime(num)) {
      num++
    }
    return num
  }
  // 追加操作
  put(key: string, value: number) {
    let index = hashFunction(key, this.length)
    if (!this.storage[index]) {
      //创建桶 bucket
      this.storage[index] = []
    }
    const bucket = this.storage[index]
    let isReWrite = false
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        isReWrite = true
      }
    }
    // 判断是否将是将已经有的元素重新赋值， 如果不是重新写入判定第一次出现则插入
    if (!isReWrite) {
      this.storage[index].push([key, value])
      this.count++
    }
    if (this.count / this.length > 0.75) {
      this.resize(this.length * 2)
    }
  }
  // 获取操作
  get(key: string) {
    let index = hashFunction(key, this.length)
    const bucket = this.storage[index]
    if (!bucket) return -1
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
  }
  // 删除操纵
  delete(key: string) {
    let index = hashFunction(key, this.length)

    const bucket = this.storage[index]
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
      }
    }
    if (this.count / this.length < 0.25 && this.count > 7) {
      this.resize(this.length / 2)
    }
  }
  // 重新排列哈希表
  resize(length: number) {
    const newLength = this.getPrime(length)
    const oldStorage = this.storage
    this.storage = []
    this.count = 0
    this.length = newLength
    for (let i = 0; i < oldStorage.length; i++) {
      let bucket = oldStorage[i]
      if (!bucket) return
      for (let j = 0; j < bucket.length; j++) {
        let tuple = bucket[j]
        this.put(tuple[0], tuple[1])
      }
    }
  }
}

const hm = new HashMap<string>()
hm.put('aaa', 222)
hm.put('aaa', 111)
hm.put('ccc', 333)
hm.put('bbb', 222)
hm.put('eee', 444)
hm.put('abc', 444)
// hm.put('ccc', 444)
hm.put('ddd', 555)
// hm.put('fff', 555)

// 测试插入
// console.log(hm)
// console.log(hm.storage)
// console.log(hm.get('aaa'))
// console.log(hm.get('cba'))
// console.log(hm.get('bca'))

console.log(hm.storage)
hm.delete('aaa')
hm.delete('eee')
hm.delete('abc')

// console.log(hm.storage)

// console.log(hm.getPrime(14))

export default HashMap
