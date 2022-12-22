import fs from "fs";

const { readFile } = fs.promises;

const fileData = (await readFile("./short-input.txt")).toString().split("\n");

const data = fileData.map((item) => item.split("").map((item) => Number(item)));

console.log(data);

function findVisibleTrees(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (
        !(
          i === 0 ||
          j === 0 ||
          i === input.length - 1 ||
          j === input[i].length - 1
        )
      ) {
        console.log(input[i][j]);
      }
    }
  }
}

findVisibleTrees(data);
