import fs from "fs";
import { findMax3 } from "../utility-functions.mjs";

const { readFile } = fs.promises;

const fileData = (await readFile("./input.txt")).toString().split("\n");

function calorieCounting(input) {
  let i = 0;
  const totalCaloriesList = [];

  input.forEach((item) => {
    if (item) {
      if (!totalCaloriesList[i]) totalCaloriesList[i] = +item;
      else totalCaloriesList[i] += +item;
    } else i++;
  });

  const max3Values = findMax3(totalCaloriesList);

  const max3ValuesTotal = max3Values.reduce((acc, val) => acc + val);

  console.log(max3ValuesTotal);
}

calorieCounting(fileData);
