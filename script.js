"use strict";

const btn = document.querySelector(".btn-plus");

const inputbar = document.querySelector(".inputbar");

const tasklist = document.querySelector(".tasklist");

const addItem = () => {
  if (inputbar.value.trim().length === 0) return;
  const newTodos = document.createElement("li");
  newTodos.innerHTML = `
    <div class="task" >
      <input  class="tasklist-checkbox" type="checkbox">
      <p class="tasklist-p">${inputbar.value}</p>
      <button class="btn-delete">+</button>
      </div>
    `;
  tasklist.appendChild(newTodos);
  inputbar.value = "";
};
//刪除todo 透過復元素來監聽click事件
tasklist.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("btn-delete")) {
    if (confirm("確定刪除？")) {
      target.parentNode.remove();
    }
  }
});
//標記 todo 為已完成/未完成
tasklist.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("tasklist-checkbox")) {
    target.parentNode.classList.toggle("checked");
  }
});
