class ListNode<T> {
  private value: T;
  private next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  set setValue(value: T) {
    this.value = value;
  }

  set setNext(node: ListNode<T> | null) {
    this.next = node;
  }

  get getValue() {
    return this.value;
  }

  get getNext() {
    return this.next;
  }
}

export default class LinkedList<T> {
  private first: ListNode<T> | null = null;
  private last: ListNode<T> | null = null;
  private listSize: number = 0;

  constructor(value: T) {
    const newNode = new ListNode(value);
    this.first = newNode;
    this.last = this.first;
    this.listSize = 1;
  }

  addLast(value: T) {
    const newNode = new ListNode(value);

    if (!this.listSize) {
      this.first = newNode;
      this.last = newNode;
    } else {
      if (this.last) this.last.setNext = newNode;
      this.last = newNode;
      this.listSize++;
    }
  }

  addFirst(value: T) {
    const newNode = new ListNode(value);

    if (!this.listSize) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.setNext = this.first;
      this.first = newNode;
      this.listSize++;
    }
  }

  deleteFirst() {
    if (!this.listSize) {
      throw new Error("No items to delete");
    }

    if (this.listSize === 1) {
      this.first = null;
      this.last = null;
      this.listSize = 0;
    } else if (this.first?.getNext) {
      const second = this.first.getNext;
      this.first.setNext = null;
      this.first = second;
      this.listSize--;
    }
  }

  deleteLast() {
    if (!this.listSize) {
      throw new Error("No items to delete");
    }

    if (this.listSize === 1) {
      this.first = null;
      this.last = null;
      this.listSize = 0;
    } else {
      let previous = this.getPrevious(this.last);

      if (previous !== null) {
        previous.setNext = null;
        this.last = previous;
      }

      this.listSize--;
    }
  }

  reverse() {
    if (this.listSize === 0) return;

    let current = this.first;
    let next = this.first?.getNext;

    if (this.first) this.first.setNext = null;

    for (let i = 0; i < this.listSize; i++) {
      const nextRef = next?.getNext;
      if (next) {
        next.setNext = current;
        current = next;
        next = nextRef;
      }
    }

    const tempNode = this.first;
    this.first = this.last;
    this.last = tempNode;
  }

  getKthNodeFromEnd(k: number) {
    if (k < 1) {
      throw new Error("Value of K must be greater than 0");
    }

    if (k > this.listSize) {
      throw new Error("Provided value is greater than list size");
    }

    let pointer1 = this.first;
    let pointer2 = this.first;

    for (let i = 0; i < k - 1; i++) {
      pointer2 = pointer2 ? pointer2.getNext : null;
    }

    while (pointer2 !== this.last) {
      pointer1 = pointer1 ? pointer1.getNext : null;
      pointer2 = pointer2 ? pointer2.getNext : null;
    }

    return pointer1;
  }

  indexOf(value: T) {
    let index = 0;
    let current = this.first;

    while (current !== null) {
      if (current.getValue === value) return index;
      current = current.getNext;
      index++;
    }

    return -1;
  }

  contains(value: T) {
    return this.indexOf(value) !== -1;
  }

  size() {
    return this.listSize;
  }

  toArray() {
    const array: T[] = [];

    let current = this.first;

    while (current !== null) {
      array.push(current.getValue);
      current = current.getNext;
    }

    return array;
  }

  private getPrevious<T>(node: ListNode<T> | null) {
    let current = this.first;

    while (current !== null) {
      if (current.getNext === node) return current;
      current = current.getNext;
    }

    return null;
  }

  printAllNodes(node = this.first, i = 0) {
    console.log(i, ":", node);
    if (node?.getNext) {
      this.printAllNodes(node.getNext, ++i);
    }
  }
}
