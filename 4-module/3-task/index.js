function highlight(table) {
  const rows = table.querySelectorAll("tbody tr");
  for (const row of rows) {
    const cells = row.cells;
    const ageCell = cells[1];
    const genderCell = cells[2];
    const statusCell = cells[3];

    if (!statusCell.hasAttribute("data-available")) {
      row.hidden = true;
    } else {
      const statusValue = statusCell.getAttribute("data-available");
      if (statusValue === "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }
    }

    if (genderCell.textContent === "m") {
      row.classList.add("male");
    } else if (genderCell.textContent === "f") {
      row.classList.add("female");
    }

    const age = Number(ageCell.textContent);
    if (age < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
