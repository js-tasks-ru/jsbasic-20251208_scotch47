/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement("table");
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    const headers = ["Имя", "Возраст", "Зарплата", "Город", ""];

    for (const text of headers) {
      const th = document.createElement("th");
      th.textContent = text;
      headRow.append(th);
    }

    thead.append(headRow);
    this.elem.append(thead);

    const tbody = document.createElement("tbody");
    for (const row of rows) {
      const tr = document.createElement("tr");
      const values = [row.name, row.age, row.salary, row.city];
      for (const value of values) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.append(td);
      }

      const tdBtn = document.createElement("td");
      const button = document.createElement("button");
      button.textContent = "X";
      tdBtn.append(button);
      tr.append(tdBtn);
      tbody.append(tr);
    }
    this.elem.append(tbody);

    this.elem.addEventListener("click", (event) => {
      if (event.target.tagName !== "BUTTON") {
        return;
      }
      const tr = event.target.closest("tr");
      tr.remove();
    });
  }
}
