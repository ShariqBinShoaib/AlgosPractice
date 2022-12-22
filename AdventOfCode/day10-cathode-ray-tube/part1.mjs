import fs from "fs";

const { readFile } = fs.promises;

const fileData = (await readFile("./input.txt")).toString().split("\n");

function findSignalStrength(input) {
  let i = 0;
  let sum = 1;
  const intervals = {};

  input.forEach((line) => {
    const data = line.split(" ");
    if (data[0] === "addx") {
      i += 2;
      sum += Number(data[1]);
    } else {
      i++;
    }

    if (i === 19 || i === 59 || i === 99 || i === 139 || i === 179 || i === 219)
      intervals[i + 1] = sum;

    if (i === 18 || i === 58 || i === 98 || i === 138 || i === 178 || i === 218)
      if (!intervals[i + 2]) intervals[i + 2] = sum;
  });

  const total = Object.entries(intervals).reduce(
    (acc, [key, val]) => acc + Number(key) * val,
    0
  );

  return total;
}

const tot = findSignalStrength(fileData);

console.log(tot);
