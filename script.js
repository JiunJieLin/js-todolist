/*"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".btn-plus");
  const inputBar = document.querySelector(".inputBar");
  const tasklist = document.querySelector(".tasklist");
  const remainingCount = document.getElementById("remainingCount");
  const clearTask = document.getElementById("clearButton");
  const uncheckedList = document.querySelector(".unchecked-list");

  const updateRemainingCount = () => {
    const uncheckedItems = tasklist.querySelectorAll(
      'input[type="checkbox"]:not(:checked)'
    ).length;
    remainingCount.textContent = uncheckedItems;
  };

  const addItem = () => {
    if (inputBar.value.trim().length === 0) return;
    const newTodo = document.createElement("li");
    newTodo.innerHTML = `
    <div class="task" >
      <input  class="tasklist-checkbox" type="checkbox">
      <p class="tasklist-p">${inputBar.value}</p>
      <button class="btn-delete">+</button>
      </div>
    `;
    tasklist.appendChild(newTodo);
    inputBar.value = "";
    updateRemainingCount();
  };

  //刪除todo 透過父元素來監聽click事件
  //標記 todo 為已完成/未完成
  const handleClick = (e) => {
    const target = e.target;
    if (target.classList.contains("btn-delete")) {
      if (confirm("確定刪除？")) {
        target.parentNode.remove();
      }
    } else if (target.classList.contains("tasklist-checkbox")) {
      target.parentNode.classList.toggle("checked");
    }
    updateRemainingCount();
  };

  const clearItem = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkbox.parentElement.remove();
      }
    });
  };
  //篩選出沒有打勾的todo並陳列在待完成
  const uncheckedTodo = () => {
    const uncheckedItemsList = document.createElement("ul");
    const taskItems = tasklist.querySelectorAll(".task");
    taskItems.forEach((taskItem) => {
      const checkbox = taskItem.querySelector(".tasklist-checkbox");
      if (!checkbox.checked) {
        const listItem = document.createElement("li");
        listItem.textContent =
          taskItem.querySelector(".tasklist-p").textContent;
        uncheckedItemsList.appendChild(listItem);
      }
    });
    uncheckedList.innerHTML = "";
    uncheckedList.appendChild(uncheckedItemsList);
  };

  addButton.addEventListener("click", addItem);
  tasklist.addEventListener("click", handleClick);
  clearTask.addEventListener("click", clearItem);
  uncheckedList.addEventListener("click", uncheckedTodo);
  updateRemainingCount();
});
*/
