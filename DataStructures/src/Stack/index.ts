class StackNode<T> {
  value: T;
  next: StackNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class Stack<T> {
  private top: StackNode<T> | null = null;
  private stackSize: number = 0;

  constructor(value?: T) {
    if (value) {
      this.top = new StackNode(value);
      this.stackSize = 1;
    }
  }

  push(value: T) {
    const newNode = new StackNode(value);

    if (!this.top) {
      this.top = newNode;
      this.stackSize = 1;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.stackSize++;
    }
  }

  pop() {
    if (!this.top) {
      throw new Error("No items to pop");
    }

    const topItem = this.top;
    this.top = this.top.next;
    this.stackSize--;
    return topItem.value;
  }

  size() {
    return this.stackSize;
  }

  isEmpty() {
    return this.stackSize === 0;
  }

  toArray() {
    const array: T[] = [];

    let current = this.top;

    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }

    return array.reverse();
  }
}
