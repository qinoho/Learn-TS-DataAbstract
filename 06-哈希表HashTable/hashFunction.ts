/**
 * 哈希函数 - 将要存放的数据的字符串 key 转换为数组下标
 *  37:
 *   是一个质数 - 相比较可以更好的使得计算出来的下标值更不容易重复
 *  霍纳法则:
 *    优化计算hashCode的算法，可以将计算效率大大提升
 *  max:
 *    表示当前哈希表的长度
 * */

function hashFunction(str: string, max: number): number {
  let length = str.length
  let hashCode = 0

  for (let i = 0; i < length; i++) {
    hashCode = hashCode * 37 + str.charCodeAt(i)
  }

  return hashCode % max
}

export default hashFunction
