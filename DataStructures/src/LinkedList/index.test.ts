import LinkedList from "./index";

// describe the test suite for the addLast method
describe("LinkedList addLast method", () => {
  // test case 2
  it("adds a new node at the end of a non-empty list", () => {
    // arrange
    const list = new LinkedList(1);
    list.addLast(2);
    const newNode = 3;

    // act
    list.addLast(newNode);

    // assert
    expect(list.getHead?.getValue).toEqual(1);
    expect(list.getTail?.getValue).toEqual(newNode);
    expect(list.size()).toEqual(3);
  });
});

// describe the test suite for the addFirst method
describe("LinkedList addFirst method", () => {
  // test case 2
  it("adds a new node at the start of a non-empty list", () => {
    // arrange
    const list = new LinkedList(1);
    list.addFirst(2);
    const newNode = 3;

    // act
    list.addFirst(newNode);

    // assert
    expect(list.getHead?.getValue).toEqual(newNode);
    expect(list.getTail?.getValue).toEqual(1);
    expect(list.size()).toEqual(3);
  });
});

// describe the test suite for the deleteLast method
describe("LinkedList deleteLast method", () => {
  // test case 2
  it("deletes a node from the end of a non-empty list", () => {
    // arrange
    const list = new LinkedList(1);
    list.addLast(2);
    list.addLast(3);

    // act
    list.deleteLast();

    // assert
    expect(list.getHead?.getValue).toEqual(1);
    expect(list.getTail?.getValue).toEqual(2);
    expect(list.size()).toEqual(2);
  });
});

// describe the test suite for the deleteFirst method
describe("LinkedList deleteFirst method", () => {
  // test case 2
  it("deletes a node from the start of a non-empty list", () => {
    // arrange
    const list = new LinkedList(1);
    list.addLast(2);
    list.addLast(3);

    // act
    list.deleteFirst();

    // assert
    expect(list.getHead?.getValue).toEqual(2);
    expect(list.getTail?.getValue).toEqual(3);
    expect(list.size()).toEqual(2);
  });
});

// describe the test suite for the reverse method
describe("LinkedList reverse method", () => {
  // test case 2
  it("reverses the non-empty list", () => {
    // arrange
    const list = new LinkedList(1);
    list.addLast(2);
    list.addLast(3);

    // act
    list.reverse();

    // assert
    expect(list.getHead?.getValue).toBe(3);
    expect(list.getTail?.getValue).toBe(1);
    expect(list.toArray()).toEqual([3, 2, 1]);
  });
});

// describe the test suite for the getKthNodeFromEnd method
describe("LinkedList getKthNodeFromEnd method", () => {
  // test case 2
  it("finds the kth node from end of a non-empty list", () => {
    // arrange
    const list = new LinkedList(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(4);

    // act
    const node = list.getKthNodeFromEnd(3);

    // assert
    expect(node?.getValue).toBe(2);
  });
});
