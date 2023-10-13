import { SELECTORS } from "./selector.js";
import { addItem, clearItem, handleClick } from "./eventHandlers.js";
import { render } from "./render.js";

window.addEventListener("DOMContentLoaded", function () {
  const todos = [];
  let filterStatus = "all";

  const {
    addButton,
    inputBar,
    tasklist,
    remainingCount,
    clearTask,
    allTodoList,
    uncheckedList,
    checkedList,
  } = SELECTORS;

  allTodoList.classList.add("active-tab"); // default tab

  const changeFilter = (status) => {
    filterStatus = status;

    const tabMapping = {
      all: allTodoList,
      unchecked: uncheckedList,
      checked: checkedList,
    };

    // 移除所有 tab 上的 'active-tab' 類
    [allTodoList, uncheckedList, checkedList].forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    // 根據當前的過濾狀態添加 'active-tab' 類
    const activeTab = tabMapping[filterStatus];
    if (activeTab) {
      activeTab.classList.add("active-tab");
    }

    render(todos, tasklist, remainingCount, filterStatus);
  };

  addButton.addEventListener("click", () =>
    addItem(todos, inputBar, () =>
      render(todos, tasklist, remainingCount, filterStatus)
    )
  );
  tasklist.addEventListener(
    "click",
    handleClick(todos, () =>
      render(todos, tasklist, remainingCount, filterStatus)
    )
  );

  clearTask.addEventListener("click", () =>
    clearItem(todos, () =>
      render(todos, tasklist, remainingCount, filterStatus)
    )
  );

  allTodoList.addEventListener("click", () => changeFilter("all"));
  uncheckedList.addEventListener("click", () => changeFilter("unchecked"));
  checkedList.addEventListener("click", () => changeFilter("checked"));

  render(todos, tasklist, remainingCount, filterStatus);
});
