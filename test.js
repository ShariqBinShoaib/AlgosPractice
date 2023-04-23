function getPermutations(str) {
  let result = [];

  if (str.length === 1) {
    return [str];
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);

    for (let permutation of getPermutations(remaining)) {
      result.push(char + permutation);
    }
  }

  return result;
}

function uniquePaths(m, n) {
  const uniquePaths = [];

  // Initialize first row and column to 1
  for (let i = 0; i < m; i++) {
    uniquePaths.push([1]);
  }
  for (let j = 1; j < n; j++) {
    uniquePaths[0][j] = 1;
  }

  // Calculate unique paths for remaining cells
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      uniquePaths[i][j] = uniquePaths[i - 1][j] + uniquePaths[i][j - 1];
      console.log(uniquePaths);
    }
  }

  // Return number of unique paths to bottom-right corner
  return uniquePaths[m - 1][n - 1];
}

// console.log(uniquePaths(3, 4));

function maxLength(a, k) {
  // find the maximum ribbon length
  let maxLen = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > maxLen) {
      maxLen = a[i];
    }
  }

  // binary search for the maximum length L
  let left = 1;
  let right = maxLen;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // count the number of ribbons of length mid
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      count += Math.floor(a[i] / mid);
    }

    // if we have enough ribbons, move left pointer to mid + 1
    if (count >= k) {
      left = mid + 1;
    }
    // otherwise, move right pointer to mid - 1
    else {
      right = mid - 1;
    }
  }

  // return the maximum length L found
  return right;
}

// console.log(maxLength([5, 2, 7, 4, 9], 5));

const arr = Array(3).fill(Array(3).fill(0));
console.log(arr);
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]

arr[0][0]++;

console.log(arr);
// Although, we incremented only 0,0 but it incremented 1,0 and 2,0 as well because each row is referencing the same array
// [
//   [1, 0, 0],
//   [1, 0, 0],
//   [1, 0, 0],
// ]

// Something like this Array.fill is doing under the hood.
const x = [0, 0, 0];

const arr1 = [x, x, x];
console.log(arr1);
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]

arr1[0][0]++;

console.log(arr1);
// [
//   [1, 0, 0],
//   [1, 0, 0],
//   [1, 0, 0],
// ]
