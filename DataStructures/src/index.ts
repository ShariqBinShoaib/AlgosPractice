import LinkedList from "./LinkedList";

const linkedList = new LinkedList(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);
linkedList.addLast(6);
linkedList.addLast(7);
linkedList.deleteFirst();

linkedList.reverse();

console.log("SIZE: ", linkedList.size());
console.log(linkedList.printAllNodes());
console.log(linkedList.toArray());

console.log(linkedList.getKthNodeFromEnd(1));
