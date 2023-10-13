export const addItem = (todos, inputBar, render) => {
  if (inputBar.value.trim().length === 0) return;
  const timestamp = Date.now();
  todos.push({ id: timestamp, text: inputBar.value, checked: false }); //?
  inputBar.value = "";
  render();
};
//按下清除，把未勾選的push到todos
export const clearItem = (todos, render) => {
  const filteredTodos = todos.filter((todo) => !todo.checked);
  todos.length = 0;
  todos.push(...filteredTodos);
  render();
};

export const handleClick = (todos, render) => (e) => {
  const target = e.target;
  const todoElement = target.closest(".task");
  const todoId = todoElement
    ? parseInt(todoElement.getAttribute("data-id"))
    : null;

  console.log(todoId);

  if (target.classList.contains("btn-delete")) {
    const index = todos.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
      todos.splice(index, 1); //(移除項目/移除數量)
    }
  } else if (target.classList.contains("tasklist-checkbox")) {
    const todo = todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.checked = !todo.checked; //?
    }
  }
  render();
};
