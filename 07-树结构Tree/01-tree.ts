import { btPrint } from 'hy-algokit'

class TreeNode<T> {
  value: T
  left: null | TreeNode<T>
  right: null | TreeNode<T>
  parentNode: null | TreeNode<T>
  isleft: boolean | null
  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
    this.parentNode = null
    this.isleft = null
  }
}

class BinaryTree<T> {
  private root: null | TreeNode<T>
  length: number

  constructor() {
    this.root = null
    this.length = 0
  }

  print() {
    btPrint(this.root)
  }

  // 二叉树插入 1.循环插入
  insertLoop(value: T) {
    const newNode = new TreeNode<T>(value)
    if (this.root === null) {
      this.root = newNode
      this.length++
    } else {
      let currentNode: TreeNode<T> | null = this.root
      while (currentNode) {
        if (value === currentNode.value) return
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode
          }
          currentNode = currentNode.left
          this.length++
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode
          }
          currentNode = currentNode.right
          this.length++
        }
      }
    }
  }
  // 二叉树插入 2.递归插入
  // 1.定义递归函数
  insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
        this.length++
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
        this.length++
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  insert(value: T) {
    const newNode = new TreeNode<T>(value)
    if (!this.root) {
      this.root = newNode
      this.length++
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  /**
   * 二叉树遍历
   * 1.顺序遍历
   *
   * 2.先(前)序遍历
   * 3.中序遍历
   * 4.后序遍历
   * 2.3.4前中后的顺序就是父节点打印的先后顺序 left in right 的顺序 先打印哪个
   */
  // 顺序遍历
  // 运用队列思想来解决
  // 按照顺序将节点一次进入队列，然后循环出队列
  sequenTraversal() {
    const queue: TreeNode<any>[] = []
    queue.push(this.root!)
    while (queue.length) {
      const temp = queue.shift()
      if (temp?.left) queue.push(temp.left)
      if (temp?.right) queue.push(temp.right)
      console.log(temp?.value)
    }
  }
  // --------------------递归实现---------------------------------
  // 前序遍历
  // 定义前序递归函数
  private prevOrder(node: TreeNode<T> | null) {
    if (!node) return
    console.log(node.value)
    this.prevOrder(node.left)
    this.prevOrder(node.right)
  }
  prevOrderTraversal() {
    this.prevOrder(this.root!)
  }
  // 中序遍历
  // 定义中序递归函数
  private inOrder(node: TreeNode<T> | null) {
    if (!node) return
    this.inOrder(node.left)
    console.log(node.value)
    this.inOrder(node.right)
  }
  inOrderTraversal() {
    this.inOrder(this.root!)
  }
  // 前序遍历
  // 定义后序递归函数
  private postOrder(node: TreeNode<T> | null) {
    if (!node) return
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.value)
  }
  postOrderTraversal() {
    this.postOrder(this.root!)
  }
  // --------------------循环实现---------------------------------
  // 前序遍历---循环实现
  prevOrderLoopTraversal() {
    const stack: any[] = []
    let root: TreeNode<T> | null = this.root

    while (root || stack.length > 0) {
      while (root) {
        console.log(root.value)
        stack.push(root)
        root = root.left
      }
      if (stack.length > 0) {
        root = stack.pop()
        root = root!.right
      }
    }
  }
  // 中序遍历---循环实现
  inOrderLoopTraversal() {
    const stack: any[] = []
    let root: TreeNode<T> | null = this.root
    while (root || stack.length > 0) {
      while (root) {
        stack.push(root)
        root = root.left
      }
      if (stack.length > 0) {
        root = stack.pop()
        console.log(root!.value)
        root = root!.right
      }
    }
  }
  // 后序遍历---循环实现 --- 标记法 ---my
  // postOrderLoopTraversal() {
  //   interface obj {
  //     node: TreeNode<T> | null
  //     isLeft: boolean
  //   }
  //   const stack: obj[] = []
  //   let root: obj = { node: this.root, isLeft: true }
  //   while (root.node || stack.length > 0) {
  //     while (root.node) {
  //       stack.push({ node: root.node, isLeft: true })
  //       root.node = root.node.left
  //     }
  //     if (!stack[stack.length - 1].isLeft && stack.length > 0) {
  //       console.log(stack!.pop()?.node?.value)
  //     }
  //     if (stack.length > 0 && stack[stack.length - 1].isLeft) {
  //       stack[stack.length - 1].isLeft = false
  //       root.node = stack[stack.length - 1].node!.right
  //     }
  //   }
  // }
  // --------------------- 标记法 ---csdn cpoy
  // postOrderLoopTraversal() {
  //   //用于表示是从左子树返回到父结点
  //   const left = 1
  //   //用于表示是从右子树返回到父结点
  //   const right = 2
  //   //用于存放树结点
  //   const treeStack: any[] = []
  //   //用于存放是从左子结点还是右子结点返回父结点的标记
  //   const markStack: number[] = []
  //   let root = this.root
  //   while (root != null || treeStack.length > 0) {
  //     while (root != null) {
  //       //将结点压栈并标记为左节点
  //       treeStack.push(root)
  //       markStack.push(left)
  //       root = root.left
  //     }
  //     if (treeStack.length > 0 && markStack[markStack.length - 1] == right) {
  //       //如果是从右子结点返回到父结点，直接输出
  //       markStack.pop()
  //       // System.out.print(treeStack.pop().data + ' ')
  //       console.log(treeStack.pop().value)
  //     }
  //     if (treeStack.length > 0 && markStack[markStack.length - 1] == left) {
  //       //如果是从左子结点返回到父结点，标记为右结点，并对右结点进行操作
  //       markStack.pop()
  //       markStack.push(right)
  //       root = treeStack[markStack.length - 1].right
  //     }
  //   }
  // }

  // 后序遍历---循环实现 --- 逆后序遍历 --- 根 右 左
  postOrderLoopTraversal() {
    const stack: any[] = []
    let root: TreeNode<T> | null = this.root
    let reverseOrder: T[] = []
    while (root || stack.length > 0) {
      while (root) {
        reverseOrder.unshift(root.value)
        stack.push(root)
        root = root.right
      }
      if (stack.length > 0) {
        root = stack.pop()
        root = root?.left!
      }
    }
    console.log(reverseOrder.join('\n'))
  }

  // ---------------------- 获取功能 -------------------------------
  // 获取某个元素是否存在树结构中
  // 同时将查找的这个元素的父节点赋值,便于以后操作
  get(value: T) {
    if (value === this.root?.value) return this.root
    else {
      let currentNode = this.root
      while (currentNode) {
        let parentNode = currentNode
        if (value < currentNode.value) {
          currentNode = currentNode.left

          if (currentNode) {
            currentNode.isleft = true
            currentNode.parentNode = parentNode
          }
        } else if (value > currentNode.value) {
          currentNode = currentNode.right
          if (currentNode) {
            currentNode.isleft = false
            currentNode.parentNode = parentNode
          }
        } else {
          return currentNode
        }
      }
    }
    return null
  }
  // -------------------删除功能-----------------------------------------
  //  删除树结构中的某个值
  remove(value: T) {
    const node: TreeNode<T> | null = this.get(value)
    if (!node) return
    // 删除左右子节点都为空的叶子节点
    if (!node.left && !node.right) {
      if (node.isleft) {
        node.parentNode!.left = null
      } else {
        node.parentNode!.right = null
      }
    }
    // 删除只有1个子节点的元素 1.右字节点为空
    else if (!node.right) {
      if (node.isleft) {
        node.parentNode!.left = node.left
      } else {
        node.parentNode!.right = node.left
      }
    }
    // 删除只有1个子节点的元素 2. 左子节点为空
    else if (!node.left) {
      if (node.isleft) {
        node.parentNode!.left = node.right
      } else {
        node.parentNode!.right = node.right
      }
    }
    //左右子节点都不为空
    /**
     * 右两种解决方案 1.找前驱节点 2. 找后继节点
     *  前驱： 刚刚比当前选中节点小一点
     *    左子节点最大元素
     *  后继： 刚刚比当前选中节点大一点
     *    右子节点最小元素
     *
     **/
    else {
      const successorNode = this.successorNode(node.value)
      // if (node.isleft) {
      //   node.parentNode!.left = successorNode!
      // } else {
      //   node.parentNode!.right = successorNode!
      // }
      if (node === this.root) {
        this.root = successorNode!
      }
      // if (node.right === successorNode) {
      //   if (node.isleft) {
      //     node.parentNode!.left = successorNode.right
      //   } else {
      //     node.parentNode!.right = successorNode.right
      //   }
      // } else {
      else if (node.isleft) {
        // successorNode!.left = node.left
        // successorNode!.parentNode!.left = successorNode!.right
        node.parentNode!.left = successorNode!
        // successorNode!.right = node.right
      } else {
        node.parentNode!.right = successorNode!
      }
      successorNode!.left = node.left
      if (node.right !== successorNode) {
        successorNode!.parentNode!.left = successorNode!.right
        successorNode!.right = node.right
      }
      // }
    }
  }
  // 找后继节点
  successorNode(value: T) {
    let currentNode = this.get(value)
    if (!currentNode) return
    return this.min(currentNode.right)
  }
  // 找最大值
  min(node: TreeNode<T> | null) {
    let currentNode = node
    while (currentNode?.left) {
      let parentNode = currentNode
      currentNode = currentNode.left
      currentNode.parentNode = parentNode
    }
    return currentNode
  }
  // 找最小值
  max(node: TreeNode<T> | null) {
    let currentNode = node || this.root
    while (currentNode?.right) {
      let parentNode = currentNode
      currentNode = currentNode.right
      currentNode.parentNode = parentNode
    }
    return currentNode
  }
}

const bst = new BinaryTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
// bst.insert(3)
bst.insert(9)
// bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(19)
bst.insert(25)
bst.insert(6)
bst.print()
// console.log(bst)

// -----------------------------递归遍历实现
// 测试层序遍历（顺序遍历）
// bst.sequenTraversal()
// 测试前序遍历---先输出父节点
// bst.prevOrderTraversal()
// 测试中序遍历---中间输出父节点
// 测试后序遍历---最后输出父节点
// bst.postOrderTraversal()
// -----------------------------循环遍历实现
// bst.prevOrderLoopTraversal()
// bst.inOrderLoopTraversal()
bst.postOrderLoopTraversal()

// ----------------------------- 查找功能
// console.log(bst.get(25)?.value)
// console.log(bst.get(25)?.parentNode?.value)
// console.log(bst.get(7))
// console.log(bst.get(13))
// console.log(bst.get(8))

// ----------------------------- 删除功能
// ===删除没有子节点的元素
// bst.remove(25)
// bst.remove(3)
// bst.remove(6)
// bst.remove(14)
// ===删除有一个子节点的元素
// bst.remove(9)
// bst.remove(5)
// bst.remove(15)

// ------------------测试最大值和最小值
// console.log(bst.max(this.root)?.value)
// console.log(bst.max(this.root)?.parentNode?.value)

// console.log(bst.min(this.root)?.value)
// console.log(bst.min(this.root)?.parentNode?.value)

// ---------------------------- 测试后继节点
// console.log(bst.successorNode(12)?.value)
// console.log(bst.successorNode(12)?.parentNode?.value)

//-------------------------------测试删除
// bst.remove(7)
// bst.print()
