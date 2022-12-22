import fs from "fs";

const { readFile } = fs.promises;

const fileData = (await readFile("./input.txt")).toString().split("\n");

function findMaxSizeDirectory(input) {
  const directoryNames = [];
  const directoriesFileSizes = {};
  const directoriesChildren = {};
  let currentDirectory = "";

  input.forEach((item) => {
    const data = item.split(" ");
    if (data[0] === "dir") {
      directoryNames.push(data[1]);
      directoriesFileSizes[data[1]] = 0;
      directoriesChildren[data[1]] = [];
    }
    if (data[0] === "$" && data[1] === "cd" && data[2] !== "/") {
      currentDirectory = data[2];
    }
    if (currentDirectory && data[0] === "dir") {
      directoriesChildren[currentDirectory].push(data[1]);
    }
    const fileSize = Number(data[0]);
    if (!Number.isNaN(fileSize) && currentDirectory) {
      directoriesFileSizes[currentDirectory] += fileSize;
    }
  });

  let totalFileSize = 0;

  for (let i = directoryNames.length - 1; i >= 0; i--) {
    const name = directoryNames[i];
    directoriesChildren[name].forEach((item) => {
      directoriesFileSizes[name] += directoriesFileSizes[item];
    });

    totalFileSize +=
      directoriesFileSizes[name] <= 100000 ? directoriesFileSizes[name] : 0;
  }

  console.log(totalFileSize, directoriesFileSizes, directoriesChildren);
}

findMaxSizeDirectory(fileData);
