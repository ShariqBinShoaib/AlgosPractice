import Stack from "../Stack";

export class QueueWithStack<T> {
  private stack1 = new Stack<T>();
  private stack2 = new Stack<T>();
  private capacity: number = 0;
  private queueSize: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  enqueue(item: T) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }

    this.stack1.push(item);
    this.queueSize++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }

    this.queueSize--;
    return this.stack2.pop();
  }

  isEmpty() {
    return this.queueSize === 0;
  }

  isFull() {
    return this.queueSize === this.capacity;
  }

  toArray() {
    return this.stack1.isEmpty()
      ? this.stack2.toArray().reverse()
      : this.stack1.toArray();
  }
}

class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class Queue<T> {
  private first: QueueNode<T> | null = null;
  private last: QueueNode<T> | null = null;
  private queueSize: number = 0;

  constructor(value?: T) {
    if (value) {
      const newNode = new QueueNode(value);
      this.first = newNode;
      this.last = newNode;
      this.queueSize = 1;
    }
  }

  enqueue(value: T) {
    const newNode = new QueueNode(value);

    if (this.last) {
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    this.queueSize++;
  }

  dequeue() {
    if (!this.first) {
      throw new Error("Queue is empty");
    }

    const firstNode = this.first;
    this.first = this.first.next;
    this.queueSize--;
    return firstNode.value;
  }

  isEmpty() {
    return !this.first && !this.last;
  }

  size() {
    return this.queueSize;
  }

  toArray() {
    const array: T[] = [];

    let current = this.first;

    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }
}
