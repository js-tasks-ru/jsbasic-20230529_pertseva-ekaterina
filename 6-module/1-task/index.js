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

  #elem;
  constructor(rows) {
    this.rows = rows;
    this.render();

  }
  get elem() {
    return this.#elem;
  }

  render() {
    this.table = document.createElement('table');
    this.tbody = document.createElement('tbody');
    this.tbody.innerHTML = this.rows.map(({ name, age, salary, city }) => `
    <tr>
    <td>${name}<\td>
    <td${age}<\td>
    <td>${salary}<\td>
    <td>${city}<\td>
    <button>[X]<\button>
    <\tr>`).join("");
    this.table.appendChild(this.tbody);

    this.table.addEventListener('click', this.deleteElement);
    this.#elem = this.table;

  }

  deleteElement = (event) => {
    event.target.closest('tr').remove();
  }


}
