function factorial(n) {
  if (n < 0) {
    return null;
  }
  let result = 1;

  for (; n > 1; n--) {
    result *= n;
  }
  return result;
}
