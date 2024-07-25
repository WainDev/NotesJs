const listElement = document.getElementById("list");

const input = document.getElementById("input");
const error = document.getElementById("error");
const addButton = document.getElementById("button");

const doneBtn = document.querySelector(".todo-button__done");
const removeBtn = document.querySelector("todo-button__remove");

let timer;

addButton.addEventListener("click", () => {
  const noteText = input.value;

  if (!noteText) {
    error.classList.add("active");

    return (timer = setInterval(() => {
      error.classList.remove("active");
      clearInterval(timer);
    }, 1800));
  }

  const noteComponent = `<li class="section-todo__item">
                          
        <p class="todo-item__title">${noteText}</p>
                            
        <div class="todo-item__buttons">
                              
        <button class="todo-button__done" onclick="doneTask(this)">Готово</button>
                              
        <button 
                              
        id="remove" class="todo-button__remove" onclick="removeTask(this)">Удалить</button>
                            
        </div>
                          
        </li>`;

  listElement.insertAdjacentHTML("beforeend", noteComponent);
  input.value = "";
  input.focus();
});

function doneTask(target) {
  const task = target.closest(".section-todo__item");
  task.querySelector(".todo-item__title").classList.toggle("done-task");
}

function removeTask(target) {
  const task = target.closest(".section-todo__item");
  task.remove();
}

if (doneBtn) {
  doneBtn.forEach((element) => {
    element.addEventListener("click", doneTask);
  });
}

if (removeBtn) {
  removeBtn.forEach((element) => {
    element.addEventListener("click", removeTask);
  });
}
