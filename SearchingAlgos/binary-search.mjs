export function binarySearchRecursive(
  arr,
  target,
  left = 0,
  right = arr.length - 1
) {
  const mid = Math.floor((left + right) / 2);

  if (right < left) return -1;

  if (target === arr[mid]) return mid;

  if (target > arr[mid]) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }

  return binarySearchRecursive(arr, target, left, mid - 1);
}

export function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) return mid;

    if (target > arr[mid]) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
