let circle = document.querySelectorAll(".Circle");
let circle2 = document.getElementById("circle2");
let number = true;
let number2 = true;
let number3 = true;
let number4 = true;
let number5 = true;
let imageVisible = true;
let numberItems = document.getElementById("numberItems");
let sections = document.getElementById("section");
document.addEventListener("click", function (event) {
  let closestCircle = event.target.closest(".Circle");
  let paragraphtodo = event.target.closest(".paragraphtodo");
  let todo = event.target.closest(".todo");
  let closestTodo = event.target.closest(".HR-isgamo");
  if (closestCircle) {
    if (number) {
      closestCircle.style.background =
        "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)";
      closestTodo.classList.add("active");
      let imageInsideCircle = closestCircle.querySelector("img");
      imageInsideCircle.style.display = "block";
      number = false;
    } else {
      number = true;
      closestCircle.style.background = "";
      let imageInsideCircle = closestCircle.querySelector("img");
      imageInsideCircle.style.display = "";
      closestTodo.classList.remove("active");
    }
  }

  if (paragraphtodo) {
    if (number3) {
      paragraphtodo.style.textDecoration = "line-through";
      paragraphtodo.style.color = "rgba(209, 210, 218, 1)";
      number3 = false;
    } else {
      paragraphtodo.style.textDecoration = "";
      paragraphtodo.style.color = "";
      number3 = true;
    }
  }
  let closestCross = event.target.closest(".cross");
  if (closestCross) {
    let closestTodo = event.target.closest(".HR-isgamo");

    if (closestTodo && number2) {
      closestTodo.classList.add("tengo");
      closestTodo.style.display = "none";
      closestTodo.remove();

      const updatedDivCount = sections.querySelectorAll(
        "div.HR-isgamo:not([style*='display: none'])"
      ).length;
      numberItems.textContent = updatedDivCount;
    }
  } else {
    number2 = true;
  }
});

let input = document.getElementById("input");
let container = document.querySelector("section");

input.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter" && input.value !== "") {
    let newItem = document.createElement("div");
    newItem.classList.add("todo");

    let imageTodo = document.createElement("div");
    imageTodo.classList.add("imageTodo");
    let imagecheck = document.createElement("img");
    imagecheck.classList.add("imageCheck");
    imagecheck.src = "assets/images/icon-check.svg";

    let circle = document.createElement("div");
    circle.classList.add("Circle");

    let text = document.createElement("p");
    text.classList.add("paragraphtodo");
    text.textContent = input.value;

    let cross = document.createElement("img");
    cross.classList.add("cross");
    cross.src = "assets/images/icon-cross.svg";
    let MainConteiner = document.createElement("div");
    MainConteiner.classList.add("HR-isgamo");
    imageTodo.appendChild(circle);
    imageTodo.appendChild(text);
    newItem.appendChild(imageTodo);
    newItem.appendChild(cross);
    container.appendChild(newItem);
    circle.appendChild(imagecheck);
    MainConteiner.appendChild(newItem);
    container.appendChild(MainConteiner);
    MainConteiner.appendChild(document.createElement("hr"));
    const updatedDivCount = sections.querySelectorAll("div.HR-isgamo").length;
    numberItems.textContent = updatedDivCount;
    input.value = "";
  }
});
let alltodo = document.getElementById("alltodo");
let activeButton = document.getElementById("active");
activeButton.addEventListener("click", function () {
  let allTodos = document.querySelectorAll(".HR-isgamo");
  allTodos.forEach((todo) => {
    if (!todo.classList.contains("active")) {
      todo.style.display = "none";
      activeButton.style.color = "rgba(58, 124, 253, 1)";
      alltodo.style.color = "rgba(148, 149, 165, 1)";
      completed.style.color = "";
      const updatedDivCount = sections.querySelectorAll("div.active").length;
      numberItems.textContent = updatedDivCount;
    } else {
      todo.style.display = "block";
    }

    if (todo.classList.contains("completed")) {
      todo.style.display = "none";
    }
  });
});

function allTodo() {
  let allTodos = document.querySelectorAll(".HR-isgamo");
  allTodos.forEach((todo) => {
    todo.classList.add("items");
    if (!todo.classList.contains("completed")) {
      todo.style.display = "block";
      activeButton.style.color = "";
      alltodo.style.color = "rgba(58, 124, 253, 1)";
      completed.style.color = "";
    }
    if (todo.classList.contains("completed")) {
      todo.style.display = "none";
    }
    if (todo.classList.contains("tengo")) {
      todo.style.display = "none";
    }
    if (todo.classList.contains("items")) {
      const updatedDivCount = sections.querySelectorAll("div.items").length;
      numberItems.textContent = updatedDivCount;
    }
  });
}

let Clear = document.getElementById("Clear");
Clear.addEventListener("click", function () {
  let allTodos = document.querySelectorAll(".HR-isgamo");
  allTodos.forEach((todo) => {
    todo.classList.add("clear");

    if (todo.classList.contains("active")) {
      todo.classList.add("completed");
      todo.style.display = "none";
    }
    if (todo.classList.contains("clear")) {
      const updatedDivCount = sections.querySelectorAll("div.clear").length;
      numberItems.textContent = updatedDivCount;
    }
  });
});

let completed = document.getElementById("completed");
completed.addEventListener("click", function () {
  let allTodos = document.querySelectorAll(".HR-isgamo");
  allTodos.forEach((todo) => {
    if (todo.style.display === "none") {
      todo.style.display = "block";
    } else {
      todo.style.display = "none";
    }

    if (!todo.classList.contains("completed")) {
      todo.style.display = "none";
      const updatedDivCount = sections.querySelectorAll("div.completed").length;
      numberItems.textContent = updatedDivCount;
    }
    completed.style.color = "rgba(58, 124, 253, 1)";
    alltodo.style.color = "rgba(148, 149, 165, 1)";
    activeButton.style.color = "";
  });
});

let backgroundtrue = true;
let paragraphs = document.getElementById("paragraphs");

let footer = document.getElementById("footer");
let background = document.getElementById("background");
let header = document.getElementById("header");
let sun = document.getElementById("sun");
background.addEventListener("click", function () {
  if (backgroundtrue) {
    document.body.style.backgroundColor = "rgba(23, 24, 35, 1)";
    input.style.backgroundColor = "rgba(37, 39, 61, 1)";
    sections.style.backgroundColor = "rgba(37, 39, 61, 1)";
    paragraphs.style.backgroundColor = "rgba(37, 39, 61, 1)";
    footer.style.backgroundColor = "rgba(37, 39, 61, 1)";
    header.style.backgroundImage = "url(assets/images/bg-mobile-dark.jpg)";
    sun.src = "assets/images/icon-sun.svg";
    backgroundtrue = false;
  } else {
    document.body.style.backgroundColor = "";
    input.style.backgroundColor = "";
    sections.style.backgroundColor = "";
    paragraphs.style.backgroundColor = "";
    footer.style.backgroundColor = "";
    header.style.backgroundImage = "";
    sun.src = "assets/images/icon-moon.svg";
    backgroundtrue = true;
  }
});
