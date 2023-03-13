const box = document.querySelector(".box");
const item = document.getElementById("item");
const todo = document.getElementById("to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addTodo(this.value);
    this.value = "";
  }
});

const addTodo = (item) => {
  const listitem = document.createElement("li");
  listitem.innerHTML = `
    ${item} <i class="fas fa-times"></i>`;
  listitem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listitem.querySelector("i").addEventListener("click", function () {
    listitem.remove();
    console.log(listitem.querySelector);
  });
  todo.appendChild(listitem);
};

console.log(box, item, todo);
