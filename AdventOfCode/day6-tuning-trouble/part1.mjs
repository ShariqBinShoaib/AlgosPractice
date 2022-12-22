import fs from "fs";

const { readFile } = fs.promises;

const fileData = (await readFile("./input.txt")).toString();

function tuningTrouble(input) {
  for (let i = 0; i < input.length - 3; i++) {
    const uniqueCharacters = new Set(input.slice(i, i + 4).split(""));
    if (uniqueCharacters.size === 4) return i + 4;
  }
}

console.log(tuningTrouble(fileData));
