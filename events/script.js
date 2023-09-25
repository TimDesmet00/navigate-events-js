const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  if (e.target.classList[1] === "green") {
    greenSquare();
  } else if (e.target.classList[1] === "violet") {
    violetSquare();
  } else if (e.target.classList[1] === "orange") {
    orangeSquare();
  }
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// ciblage des cube et des endroit ou apporté les information

const squareGreen = document.getElementsByClassName("green");
const squareViolet = document.getElementsByClassName("violet");
const squareOrange = document.getElementsByClassName("orange");
const displayedSquare = document.querySelector(".displayedsquare-wrapper");
const actionLog = document.querySelector("ul");

const greenSquare = () => {
  let divGreen = document.createElement("div");
  divGreen.classList.add("actionsquare", "green", "displayedsquare");

  let timeLog = document.createElement("li");
  timeLog.textContent = `${getElapsedTime()}, created a new green square`;

  displayedSquare.appendChild(divGreen).addEventListener("click", () => {
    alert("Green");
  });
  actionLog.appendChild(timeLog);
};

const violetSquare = () => {
  let divViolet = document.createElement("div");
  divViolet.classList.add("actionsquare", "violet", "displayedsquare");

  let timeLog = document.createElement("li");
  timeLog.textContent = `${getElapsedTime()}, created a new violet square`;

  displayedSquare.appendChild(divViolet).addEventListener("click", () => {
    alert("Violet");
  });
  actionLog.appendChild(timeLog);
};

const orangeSquare = () => {
  let divOrange = document.createElement("div");
  divOrange.classList.add("actionsquare", "orange", "displayedsquare");

  let timeLog = document.createElement("li");
  timeLog.textContent = `${getElapsedTime()}, created a new orange square`;

  displayedSquare.appendChild(divOrange).addEventListener("click", () => {
    alert("Orange");
  });
  actionLog.appendChild(timeLog);
};

const keypress = document.querySelector("body");

let randomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue}`;
};

document.addEventListener("keypress", (e) => {
  console.log(e.keyCode);
  if (e.keyCode == "32") {
    keypress.style.backgroundColor = randomColor();

    let timeLog = document.createElement("li");
    timeLog.textContent = `${getElapsedTime()}, you press space bar`;
    actionLog.appendChild(timeLog);
  } else if (e.keyCode == 108) {
    actionLog.removeChild(actionLog.firstChild);
  } else if (e.keyCode == 115) {
    displayedSquare.removeChild(displayedSquare.firstChild);
  }
});

let alertSquare = document.querySelector(".displayedsquare");

alertSquare.addEventListener("click", () => {
  console.log("lala");
  alert("test");
});
