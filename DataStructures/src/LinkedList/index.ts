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
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private listSize: number = 0;

  constructor(value: T) {
    const newNode = new ListNode(value);
    this.head = newNode;
    this.tail = this.head;
    this.listSize = 1;
  }

  get getHead() {
    return this.head;
  }

  get getTail() {
    return this.tail;
  }

  addLast(value: T) {
    const newNode = new ListNode(value);

    if (!this.listSize) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.setNext = newNode;
      this.tail = newNode;
      this.listSize++;
    }
  }

  addFirst(value: T) {
    const newNode = new ListNode(value);

    if (!this.listSize) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.setNext = this.head;
      this.head = newNode;
      this.listSize++;
    }
  }

  deleteFirst() {
    if (!this.listSize) {
      throw new Error("No items to delete");
    }

    if (this.listSize === 1) {
      this.head = null;
      this.tail = null;
      this.listSize = 0;
    } else if (this.head?.getNext) {
      const second = this.head.getNext;
      this.head.setNext = null;
      this.head = second;
      this.listSize--;
    }
  }

  deleteLast() {
    if (!this.listSize) {
      throw new Error("No items to delete");
    }

    if (this.listSize === 1) {
      this.head = null;
      this.tail = null;
      this.listSize = 0;
    } else {
      let previous = this.getPrevious(this.tail);

      if (previous !== null) {
        previous.setNext = null;
        this.tail = previous;
      }

      this.listSize--;
    }
  }

  reverse() {
    if (this.listSize === 0) return;

    let current = this.head;
    let next = this.head?.getNext;

    if (this.head) this.head.setNext = null;

    for (let i = 0; i < this.listSize; i++) {
      const nextRef = next?.getNext;
      if (next) {
        next.setNext = current;
        current = next;
        next = nextRef;
      }
    }

    const tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;
  }

  getKthNodeFromEnd(k: number) {
    if (k < 1) {
      throw new Error("Value of K must be greater than 0");
    }

    if (k > this.listSize) {
      throw new Error("Provided value is greater than list size");
    }

    let pointer1 = this.head;
    let pointer2 = this.head;

    for (let i = 0; i < k - 1; i++) {
      pointer2 = pointer2 ? pointer2.getNext : null;
    }

    while (pointer2 !== this.tail) {
      pointer1 = pointer1 ? pointer1.getNext : null;
      pointer2 = pointer2 ? pointer2.getNext : null;
    }

    return pointer1;
  }

  printMiddle() {
    let middleNode = this.head;
    let pointer = this.head;

    if (middleNode === null) throw new Error("List is empty");

    while (pointer !== this.tail && pointer?.getNext !== this.tail) {
      console.log("IN LOOP");
      middleNode = middleNode ? middleNode.getNext : null;
      pointer = pointer?.getNext?.getNext ? pointer.getNext.getNext : null;
      console.log(pointer);
    }

    if (pointer === this.tail) {
      console.log(`${middleNode?.getValue}`);
    } else {
      console.log(`${middleNode?.getValue}, ${middleNode?.getNext?.getValue}`);
    }
  }

  indexOf(value: T) {
    let index = 0;
    let current = this.head;

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

    let current = this.head;

    while (current !== null) {
      array.push(current.getValue);
      current = current.getNext;
    }

    return array;
  }

  private getPrevious<T>(node: ListNode<T> | null) {
    let current = this.head;

    while (current !== null) {
      if (current.getNext === node) return current;
      current = current.getNext;
    }

    return null;
  }

  printAllNodes(node = this.head, i = 0) {
    console.log(i, ":", node);
    if (node?.getNext) {
      this.printAllNodes(node.getNext, ++i);
    }
  }
}
