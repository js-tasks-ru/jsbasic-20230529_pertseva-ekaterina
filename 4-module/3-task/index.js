function highlight(table) {
  for (let tr of table.children[1].rows) {
    let el = tr.cells[3];
    if (el.hasAttribute("data-available")) {
      switch (el.dataset.available) {
        case "true":
          tr.classList.add("available");
          break;
        case "false":
          tr.classList.add("unavailable");
      }
    }
    else tr.hidden = true;


    let gender = tr.cells[2].textContent;

    if (gender == "f") {
      tr.classList.add("female");
    }
    else if (gender == "m") {
      tr.classList.add("male");
    }
    let age = tr.cells[1];
    if (age.textContent < 18) {

      tr.style.textDecoration = "line-through";
    }
  }
}

