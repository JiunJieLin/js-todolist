export const getFilteredTodos = (todos, filter) => {
  if (filter === "unchecked") {
    return todos.filter((todo) => !todo.checked);
  } else if (filter === "checked") {
    return todos.filter((todo) => todo.checked);
  }
  return todos;
};

export const updateRemainingCount = (todos, remainingCount) => {
  const uncheckedItems = todos.filter((todo) => !todo.checked).length;
  remainingCount.textContent = uncheckedItems;
};
