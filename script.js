"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".btn-plus");
  const inputBar = document.querySelector(".inputBar");
  const tasklist = document.querySelector(".tasklist");
  const remainingCount = document.getElementById("remainingCount");

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

  addButton.addEventListener("click", addItem);
  tasklist.addEventListener("click", handleClick);
  updateRemainingCount();
});
