import fs from "fs";

const { readFile } = fs.promises;

const fileData = (await readFile("./input.txt")).toString();

function tuningTrouble(input) {
  for (let i = 0; i < input.length - 13; i++) {
    const uniqueCharacters = new Set(input.slice(i, i + 14).split(""));
    if (uniqueCharacters.size === 14) return i + 14;
  }
}

console.log(tuningTrouble(fileData));
