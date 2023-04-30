/**
 * 使用邻接表的方式
 * @param vertex 顶点
 * @param aside 一个顶点的边
 *
 */
class Graph<T> {
  vertexes: T[] = []
  edge: Map<T, T[]> = new Map()

  addVetex(vertex: T) {
    this.vertexes.push(vertex)
    this.edge.set(vertex, [])
  }
  addEdge(v1: T, v2: T) {
    this.edge.get(v1)?.push(v2)
    this.edge.get(v2)?.push(v1)
  }
  toString() {
    let res = ''
    this.vertexes.forEach((item) => {
      res += `${item}->${this.edge.get(item)?.join('-')}\n`
    })
    return res
  }

  bfs(vertex: T) {
    const queue: T[] = []
    queue.push(vertex)

    const isVisted: Set<T> = new Set<T>()
    isVisted.add(vertex)
    while (queue.length > 0) {
      let tempV = queue.shift()!

      console.log(tempV)
      this.edge.get(tempV)?.forEach((item) => {
        if (!isVisted.has(item)) {
          queue.push(item)
          isVisted.add(item)
        }
      })
    }
  }
  dfs(vertex: T) {
    const stack: T[] = []
    stack.push(vertex)
    const isVisted: Set<T> = new Set<T>()
    isVisted.add(vertex)
    while (stack.length > 0) {
      let tempV = stack.pop()!
      console.log(tempV)
      const tempE = this.edge.get(tempV)!
      for (let i = tempE?.length - 1; i >= 0; i--) {
        if (!isVisted.has(tempE[i])) {
          stack.push(tempE[i])
          isVisted.add(tempE[i])
        }
      }
    }
  }
}

const gp = new Graph()
gp.addVetex('A')
gp.addVetex('B')
gp.addVetex('C')
gp.addVetex('D')
gp.addVetex('E')
gp.addVetex('F')
gp.addVetex('G')
gp.addVetex('H')
gp.addVetex('I')

gp.addEdge('A', 'B')
gp.addEdge('A', 'C')
gp.addEdge('A', 'D')
gp.addEdge('C', 'D')
gp.addEdge('C', 'G')
gp.addEdge('D', 'G')
gp.addEdge('D', 'H')
gp.addEdge('B', 'E')
gp.addEdge('B', 'F')
gp.addEdge('E', 'I')

// console.log(gp.toString())
// console.log(gp.bfs('A'))
gp.dfs('A')
