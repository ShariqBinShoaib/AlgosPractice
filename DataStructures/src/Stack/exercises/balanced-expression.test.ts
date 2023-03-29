import { isExpressionBalanced } from "./balanced-expression";

describe("Balanced Expression", () => {
  test("Test Case 1: { (a) } - Balanced", () => {
    expect(isExpressionBalanced("{ (a) }")).toBe(true);
  });

  test("Test Case 2: { [(<1>)] } - Balanced", () => {
    expect(isExpressionBalanced("{ [(<1>)] }")).toBe(true);
  });

  test("Test Case 3: ({[<>]})[] - Balanced", () => {
    expect(isExpressionBalanced("({[<>]})[]")).toBe(true);
  });

  test("Test Case 4: []() - Balanced", () => {
    expect(isExpressionBalanced("[]()")).toBe(true);
  });

  test("Test Case 5: {<abc>+<def>} - Balanced", () => {
    expect(isExpressionBalanced("{<abc>+<def>}")).toBe(true);
  });

  test("Test Case 6: {[(<((a+b)*(c-d))>)]} - Balanced", () => {
    expect(isExpressionBalanced("{[(<((a+b)*(c-d))>)]}")).toBe(true);
  });

  test("Test Case 7: [(1+2)*{3-4]*5} - Unbalanced", () => {
    expect(isExpressionBalanced("[(1+2)*{3-4]*5}")).toBe(false);
  });

  test("Test Case 8: {[(<a>)]+[b]+<c>+<d>>} - Unbalanced", () => {
    expect(isExpressionBalanced("{[(<a>)]+[b]+<c>+<d>>}")).toBe(false);
  });

  test("Test Case 9: {[[()]]} - Balanced", () => {
    expect(isExpressionBalanced("{[[()]]}")).toBe(true);
  });

  test("Test Case 10: {<a><b><c><d><e><f><g><h><i><j>} - Balanced", () => {
    expect(isExpressionBalanced("{<a><b><c><d><e><f><g><h><i><j>}")).toBe(true);
  });

  test("Test Case 11: {(a)+[b]+(c)+{d}} - Balanced", () => {
    expect(isExpressionBalanced("{(a)+[b]+(c)+{d}}")).toBe(true);
  });

  test("Test Case 12: {(a+b)-[<c+d>*[e-f)]} - Unbalanced", () => {
    expect(isExpressionBalanced("{(a+b)-[<c+d>*[e-f)]}")).toBe(false);
  });

  test("Test Case 13: {[(a)]+[b]} - Balanced", () => {
    expect(isExpressionBalanced("{[(a)]+[b]}")).toBe(true);
  });

  test("Test Case 14: {[<a>+<b>+<c>]+(d+e)} - Balanced", () => {
    expect(isExpressionBalanced("{[<a>+<b>+<c>]+(d+e)}")).toBe(true);
  });

  test("Test Case 15: {([<abc>+<def>]**[<ghi>+<jkl>]}) - Unbalanced", () => {
    expect(isExpressionBalanced("{([<abc>+<def>]**[<ghi>+<jkl>]})")).toBe(
      false
    );
  });
});
