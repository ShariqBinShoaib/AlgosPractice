import LinkedList from "./LinkedList";
import Stack from "./Stack";
import Queue, { QueueWithStack } from "./Queue";
import Tree from "./Tree";
import { isExpressionBalanced } from "./Stack/exercises/balanced-expression";
import {
  findFirstNonRepeatedCharacter,
  findFirstRepeatedCharacter,
} from "./HashTable/exercises";

// const linkedList = new LinkedList(1);
// linkedList.addLast(2);
// linkedList.addLast(3);
// linkedList.deleteFirst();

// linkedList.reverse();

// console.log("SIZE: ", linkedList.size());
// console.log(linkedList.printAllNodes());
// console.log(linkedList.toArray());

// console.log(linkedList.getKthNodeFromEnd(1));

// linkedList.printMiddle();

// const stack = new Stack(1);
// stack.push(2);

// console.log(stack.size());
// console.log(stack.toArray());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.size());

// console.log(isExpressionBalanced("(((a+b)-c)/(d+e))"));

// const queue = new Queue<number>();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.dequeue();

// console.log(queue.dequeue());
// console.log(queue.toArray());
// console.log(queue.size());

// console.log(findFirstNonRepeatedCharacter("agrnl green apple"));
// console.log(findFirstRepeatedCharacter("a green apple"));

const tree = new Tree(20);
tree.insert(10);
tree.insert(30);
tree.insert(6);
tree.insert(14);
tree.insert(3);
tree.insert(8);
tree.insert(24);
tree.insert(26);
// tree.swapRoot();
// console.log(tree.traverseInOrder());
// console.log(tree.traversePreOrder());
// console.log(tree.traversePostOrder());
// console.log(tree.isBinarySearchTree());

// console.log(tree.getNodesAtKthDistance(2));
tree.invert();
tree.levelOrderTraversel();
