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
