import { Task } from "./Task.js";

let tasksCounter = 0;
let todoArray = [];
let doneArray = [];

document.getElementById("addTaskButton").addEventListener("click", () => {
  const taskString = document.getElementById("taskString").value;
  if (taskString.trim() === "") {
    // trimming the spaces
    alert("Please enter a task");
    return;
  }
  const task = new Task(tasksCounter++, taskString);
  addTask(todoArray, task);

  document.getElementById("taskString").value = "";
});

// add a button once the donetable is greater the 8

function addTask(todoArray, task) {
  todoArray.push(task);

  const toDoTable = document.getElementById("toDoTable");
  const newRow = document.createElement("tr");
  const newLabelCell = document.createElement("td");
  const newCheckBoxCell = document.createElement("td");

  const newLabel = document.createElement("label");
  const uniqueID = `checkbox${Date.now()}`;
  newLabel.textContent = task.text;
  newLabel.setAttribute("for", uniqueID);

  const checkboxCell = document.createElement("input");
  checkboxCell.type = "checkbox";
  checkboxCell.setAttribute("id", uniqueID);
  checkboxCell.addEventListener("change", (evnet) => {
    if (evnet.target.checked) {
      task.markAsComplete();
      doneArray.push(todoArray.pop(task));
      const checkedRow = evnet.target.closest("tr");
      checkedRow.removeChild(newCheckBoxCell);
      toDoTable.removeChild(checkedRow);
      doneTable.appendChild(checkedRow);
      console.log(doneArray.length);
      if (doneArray.length > 2) {
        const loadMoreButton = document.getElementById(
          "loadMoreCompletedTasks"
        );
        loadMoreButton.style.display = "block";
      }
    }
  });
  // newStringCell.textContent = taskString;
  newLabelCell.appendChild(checkboxCell);
  newCheckBoxCell.appendChild(checkboxCell);

  //modifing toDoTable section
  newRow.appendChild(newLabel);
  newRow.appendChild(newCheckBoxCell);
  toDoTable.appendChild(newRow);
}
