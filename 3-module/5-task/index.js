function getMinMax(str) {
  const numbers = str
    .split(" ")
    .map((item) => Number(item))
    .filter((num) => !Number.isNaN(num));
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}
