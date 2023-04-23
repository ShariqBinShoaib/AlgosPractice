class TreeNode {
  value: number;
  leftChild: TreeNode | null;
  rightChild: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

export default class Tree {
  root: TreeNode | null = null;

  constructor(value?: number) {
    if (value) {
      const newNode = new TreeNode(value);
      this.root = newNode;
    }
  }

  insert(value: number) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      const parent = this.findParent(value);

      if (value === parent.value) {
        throw new Error(
          `No duplicates allowed. Value ${value} already exist in the tree`
        );
      }

      if (value > parent.value) {
        parent.rightChild = newNode;
      } else {
        parent.leftChild = newNode;
      }
    }
  }

  find(value: number) {
    let current: TreeNode | null = this.root;

    while (current !== null) {
      if (value > current.value) {
        current = current.rightChild;
      } else if (value < current.value) {
        current = current.leftChild;
      } else {
        return true;
      }
    }

    return false;
  }

  traversePreOrder(node: TreeNode | null = this.root) {
    if (node === null) return;

    console.log(node.value);
    this.traversePreOrder(node.leftChild);
    this.traversePreOrder(node.rightChild);
  }

  traverseInOrder(node: TreeNode | null = this.root) {
    if (node === null) return;

    this.traverseInOrder(node.leftChild);
    console.log(node.value);
    this.traverseInOrder(node.rightChild);
  }

  traversePostOrder(node: TreeNode | null = this.root) {
    if (node === null) return;

    this.traversePostOrder(node.leftChild);
    this.traversePostOrder(node.rightChild);
    console.log(node.value);
  }

  height(root: TreeNode | null = this.root): number {
    if (root === null) return -1;

    if (this.isLeaf(root)) return 0;

    const leftTreeHeight = this.height(root.leftChild);
    const rightTreeHeight = this.height(root.rightChild);

    const val = 1 + Math.max(leftTreeHeight, rightTreeHeight);

    return val;
  }

  min(root: TreeNode | null = this.root): number {
    if (root === null) return Infinity;

    if (this.isLeaf(root)) return root.value;

    const leftMin = this.min(root.leftChild);
    const rightMin = this.min(root.rightChild);

    return Math.min(leftMin, rightMin, root.value);
  }

  equals(tree: Tree) {
    return this.isEqual(this.root, tree.root);
  }

  isBinarySearchTree(
    node: TreeNode | null = this.root,
    minRange: number = -Infinity,
    maxRange: number = Infinity
  ): boolean {
    if (node === null) return true;

    return (
      node.value > minRange &&
      node.value < maxRange &&
      this.isBinarySearchTree(node.leftChild, minRange, node.value) &&
      this.isBinarySearchTree(node.rightChild, node.value, maxRange)
    );
  }

  swapRoot() {
    if (!this.root) return;

    const temp = this.root.leftChild;
    this.root.leftChild = this.root.rightChild;
    this.root.rightChild = temp;
  }

  getNodesAtKthDistance(k: number) {
    const kthNodes: number[] = [];
    this.getKthNodes(this.root, k, kthNodes);
    return kthNodes;
  }

  levelOrderTraversel() {
    for (let i = 0; i <= this.height(); i++) {
      for (let val of this.getNodesAtKthDistance(i)) {
        console.log(val);
      }
    }
  }

  invert(root: TreeNode | null = this.root) {
    if (root === null) return;

    const temp = root.leftChild;
    root.leftChild = root.rightChild;
    root.rightChild = temp;

    this.invert(root.leftChild);
    this.invert(root.rightChild);
  }

  private getKthNodes(root: TreeNode | null, k: number, kthNodes: number[]) {
    if (root === null) return;

    if (k === 0) {
      kthNodes.push(root.value);
      return;
    }

    this.getKthNodes(root.leftChild, k - 1, kthNodes);
    this.getKthNodes(root.rightChild, k - 1, kthNodes);
  }

  private isEqual(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (root1 === null && root2 === null) return true;

    if (root1 !== null && root2 !== null) {
      return (
        root1.value === root2.value &&
        this.isEqual(root1.leftChild, root2.leftChild) &&
        this.isEqual(root1.rightChild, root2.rightChild)
      );
    }

    return false;
  }

  private isLeaf(node: TreeNode) {
    return node.leftChild === null && node.rightChild === null;
  }

  private findParent(value: number) {
    let current: TreeNode = this.root as TreeNode;

    while (!!current.leftChild || !!current.rightChild) {
      if (value === current.value) {
        throw new Error(
          `No duplicates allowed. Value ${value} already exist in the tree`
        );
      }

      if (value > current.value && current.rightChild) {
        current = current.rightChild;
      } else if (value < current.value && current.leftChild) {
        current = current.leftChild;
      } else {
        break;
      }
    }

    return current;
  }
}
