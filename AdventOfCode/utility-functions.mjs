export function findMax3(data) {
  const max3Values = [data[0], 0, 0];
  for (let i = 0; i < data.length; i++) {
    if (max3Values[0] < data[i]) {
      max3Values[2] = max3Values[1];
      max3Values[1] = max3Values[0];
      max3Values[0] = data[i];
    } else if (data[i] < max3Values[0] && data[i] > max3Values[1]) {
      max3Values[2] = max3Values[1];
      max3Values[1] = data[i];
    }
  }

  return max3Values;
}
