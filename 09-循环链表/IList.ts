import { Node } from './01-linkedList'

interface IList<T> {
  append(ele: T): Node<T>
  insert(position: number, ele: T): any
  get(position: number): T | null
  indexOf(ele: T): number
  updata(position: number, ele: T): any
  removeAt(position: number): T | null
  remove(ele: T): T | null
  isEmpty(): boolean
  size(): number
}

export default IList
