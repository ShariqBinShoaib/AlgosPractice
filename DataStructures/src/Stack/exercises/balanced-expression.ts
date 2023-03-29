type OpenBrackets = "(" | "{" | "[" | "<";
type CloseBrackets = ")" | "}" | "]" | ">";

function isOpenBracket(char: string): char is OpenBrackets {
  return ["(", "{", "[", "<"].includes(char);
}

function isCloseBracket(char: string): char is CloseBrackets {
  return [")", "}", "]", ">"].includes(char);
}

export function isExpressionBalanced(expression: string) {
  const openToCloseBracketMapper = {
    "(": ")",
    "{": "}",
    "[": "]",
    "<": ">",
  };

  const stack: OpenBrackets[] = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (isOpenBracket(char)) {
      stack.push(char);
      continue;
    }

    if (isCloseBracket(char)) {
      const openBracket = stack.pop();

      if (!openBracket || openToCloseBracketMapper[openBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
