function sumSalary(salaries) {
  let total = 0;
  for (let key in salaries) {
    let value = salaries[key];
    if (typeof value === "number" && Number.isFinite(value)) {
      total += value;
    }
  }
  return total;
}
