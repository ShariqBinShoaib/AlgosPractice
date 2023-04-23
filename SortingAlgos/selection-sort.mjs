export default function selectionSort(arr) {
  let minIndex = 0;
  let isMinFound;

  for (let i = 0; i < arr.length; i++) {
    isMinFound = false;
    minIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        isMinFound = true;
      }
    }

    if (isMinFound) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  console.log(arr);
}
