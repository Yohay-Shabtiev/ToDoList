import { Task } from "./Task.js";

let todoArray = [];
let doneArray = [];

document.getElementById("addTaskButton").addEventListener("click", () => {
  const taskString = document.getElementById("taskString");
  const infoString = document.getElementById("infoString");

  if (taskString.value.trim() === "") {
    // trimming the spaces
    alert("Please enter a task");
    return;
  }
  const task = new Task(taskString.value, infoString.value);
  todoArray.push(task);
  const toDoTable = document.getElementById("toDoTable");
  const newRow = createRow();
  const newLabelCell = createLabelCell(task.text, task.info);
  const newInfoCell = createInfoCell(task.info);
  const newCheckBoxCell = createCheckBoxCell(task);
  newRow.appendChild(newLabelCell);
  newRow.appendChild(newInfoCell);
  newRow.appendChild(newCheckBoxCell);
  toDoTable.appendChild(newRow);

  infoString.value = "";
  taskString.value = "";
});

function createRow() {
  const newRow = document.createElement("tr");
  return newRow;
}

function createLabelCell(text, id) {
  const newLabelCell = document.createElement("td");
  const newLabel = document.createElement("label");
  newLabel.textContent = text;
  newLabel.setAttribute("for", id);
  newLabelCell.appendChild(newLabel);

  return newLabelCell;
}

function createInfoCell(info) {
  newInfo = document.createElement("td");
  newInfo.value = info;

  return newInfo;
}
function createCheckBoxCell(task) {
  const newCheckBoxCell = document.createElement("td");
  const checkboxCell = document.createElement("input");
  checkboxCell.type = "checkbox";
  checkboxCell.setAttribute("id", task.id);

  checkboxCell.addEventListener("change", (event) => {
    checkboxCell.style.display = "none";
    if (event.target.checked) {
      task.markAsComplete();
      const index = todoArray.findIndex((t) => t.id === task.id);
      if (index != -1) {
        doneArray.push(todoArray.splice(index, 1)[0]); // splice returns an array with the removed elements
      }
      if (doneArray.length > 2) {
        const loadMoreButton = document.getElementById(
          "loadMoreCompletedTasks"
        );
        loadMoreButton.style.display = "block";
      }

      const toDoTable = document.getElementById("toDoTable");
      const doneTable = document.getElementById("doneTable");
      const checkedRow = event.target.closest("tr");
      toDoTable.removeChild(checkedRow);
      doneTable.appendChild(checkedRow);
    }
  });
  newCheckBoxCell.appendChild(checkboxCell);

  return newCheckBoxCell;
}
