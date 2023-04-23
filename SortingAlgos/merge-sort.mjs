export default function mergeSort(arr) {
  if (arr.length === 1) return;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);

  merge(left, right, arr);
}

function merge(left, right, result) {
  // prettier-ignore
  let i = 0, j = 0, k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result[k++] = left[i++];
    else result[k++] = right[j++];
  }

  while (i < left.length) {
    result[k++] = left[i++];
  }

  while (j < right.length) {
    result[k++] = right[j++];
  }
}
