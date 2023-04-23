import bubbleSort from "./bubble-sort.mjs";
import insertionSort from "./insertion-sort.mjs";
import selectionSort from "./selection-sort.mjs";
import mergeSort from "./merge-sort.mjs";

bubbleSort([2, 4, 1, 9, 30, 78, 19, 3, 8]);

insertionSort([2, 4, 1, 9, 30, 78, 2, 19, 3, 8]);
insertionSort([1, 2, 3, 4, 5, 6, 7, 8]);

selectionSort([2, 4, 1, 9, 30, 78, 19, 3, 8]);
selectionSort([1, 2, 3, 4, 5, 6, 7, 8]);

const arr = [5, 3, 2, 4, 1, 6, 9, 8, 7];
mergeSort(arr);
console.log(arr);
