const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  greenSquare(); //ajout de la fonction a l'event
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// ciblage des cube et des endroit ou apporté les information

const squareGreen = document.getElementsByClassName("green");
const squareViolet = document.getElementsByClassName("violet");
const squareOrange = document.getElementsByClassName("orange");
const displayedSquare = document.getElementsByClassName(
  "displayedsquare-wrapper"
);
const actionLog = document.querySelector("ul");

let greenSquare = () => {
  let div = displayedSquare.createElement("div");
  let Text = displayedSquare.createTextNode(e.target.classList[1]);
  div.classList.add("displayedSquareGreen");

  actionLog.createElement("li");
  actionLog.createTextNode(Number + " , created a new square green");
};
