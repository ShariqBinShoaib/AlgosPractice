import Stack from "./index";

// describe the test suite for the push method
describe("Stack push method", () => {
  // test case 1
  it("adds a new node in stack", () => {
    // arrange
    const stack = new Stack(1);
    stack.push(2);
    const newNode = 3;

    // act
    stack.push(newNode);

    // assert
    expect(stack.size()).toBe(3);
    expect(stack.pop()).toBe(newNode);
    expect(stack.size()).toBe(2);
  });
});

// describe the test suite for the push method
describe("Stack pop method", () => {
  // test case 2
  it("removes a node from stack", () => {
    // arrange
    const stack = new Stack(1);
    stack.push(2);
    const newNode = 3;
    stack.push(newNode);

    // act
    const poppedItem = stack.pop();

    // assert
    expect(poppedItem).toBe(newNode);
    expect(stack.size()).toBe(2);
  });
});
