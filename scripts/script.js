function todoBtn() {
  let usrInp = document.getElementById("usrInp").value.trim();

  if (usrInp === "") {
    alert("Input must be a valid string");
  } else {
    let todoData = localStorage.getItem("todoList");

    if (todoData === null) {
      let data = [];
      data.push(usrInp);

      localStorage.setItem("todoList", JSON.stringify(data));
    } else {
      todoData = JSON.parse(todoData);
      todoData.push(usrInp);

      localStorage.setItem("todoList", JSON.stringify(todoData));
    }

    loadTodo();
  }
}

function loadTodo() {
  let todoData = localStorage.getItem("todoList");

  if (todoData !== null) {
    todoData = JSON.parse(todoData);

    let existingList = document.querySelector("ul");
    if (existingList) {
      existingList.remove();
    }

    let res = document.createElement("ul");

    todoData.forEach((data, index) => {
      let li = document.createElement("li");
      li.textContent = data;

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = function () {
        deleteTodo(index);
      };

      li.appendChild(deleteBtn);
      res.appendChild(li);
    });

    document.body.appendChild(res);
  }
}

function deleteTodo(index) {
  let todoData = localStorage.getItem("todoList");

  if (todoData !== null) {
    todoData = JSON.parse(todoData);

    todoData.splice(index, 1);

    localStorage.setItem("todoList", JSON.stringify(todoData));

    loadTodo();
  }
}

loadTodo();
