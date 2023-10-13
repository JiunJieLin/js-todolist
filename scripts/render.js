import { getFilteredTodos, updateRemainingCount } from "./utils.js";

export const render = (todos, tasklist, remainingCount, filterStatus) => {
  tasklist.innerHTML = "";
  const filteredTodos = getFilteredTodos(todos, filterStatus);
  console.log(filteredTodos);

  filteredTodos.forEach((todo) => {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = `
      <div class="task" data-id="${todo.id}">
        <input  class="tasklist-checkbox" type="checkbox" ${
          todo.checked ? "checked" : ""
        }>
        <p class="tasklist-p">${todo.text}</p>
        <button class="btn-delete">+</button>
      </div>
    `;
    tasklist.appendChild(newTodo);
  });

  updateRemainingCount(todos, remainingCount);
};
