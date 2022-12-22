import fs from "fs";

const { readFile } = fs.promises;

const fileData = (await readFile("./input.txt")).toString().split("\n");

function supplyStacks(input) {
  const stacks = {
    1: ["Q", "W", "P", "S", "Z", "R", "H", "D"],
    2: ["V", "B", "R", "W", "Q", "H", "F"],
    3: ["C", "V", "S", "H"],
    4: ["H", "F", "G"],
    5: ["P", "G", "J", "B", "Z"],
    6: ["Q", "T", "J", "H", "W", "F", "L"],
    7: ["Z", "T", "W", "D", "L", "V", "J", "N"],
    8: ["D", "T", "Z", "C", "J", "G", "H", "F"],
    9: ["W", "P", "V", "M", "B", "H"],
  };

  input.forEach((item) => {
    const splittedString = item.split(" ");
    const noOfMoves = splittedString[1];
    const from = splittedString[3];
    const to = splittedString[5];

    const sliceOfFrom = stacks[from].splice(-noOfMoves);
    stacks[to] = stacks[to].concat(sliceOfFrom);
  });

  let finalValue = "";

  for (let i = 1; i < 10; i++) {
    finalValue += stacks[i].pop();
  }

  console.log(finalValue);
}

supplyStacks(fileData);
