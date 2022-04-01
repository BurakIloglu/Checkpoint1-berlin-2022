// our goal is to select the image of avatar and select DOM element and change the src of the image for
// something else or the image we have in the folder image "image/avatar.svg".

const newAvatar = document.querySelector(".img-avatar");
const changeName = document.querySelector("#name");
const myButton = document.querySelector(".button");
const background = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");
const ancres = document.getElementsByTagName("a");

newAvatar.addEventListener("click", function () {
  newAvatar.src = "image/avatar.svg";
});

//changer le nom et la couleur :
myButton.addEventListener("click", function () {
  const askYourName = prompt("What's your name");
  const changeColor = prompt("choose a color");
  changeName.innerHTML = askYourName;
  changeName.style.color = changeColor;
  for (let i = 0; i < background.length; i++) {
    background[i].style.backgroundColor = changeColor;
  }
});

//changer couleur rose :
for (let i = 0; i < pinkText.length; i++) {
  pinkText[i].style.color = "#750ff7";
}

//changer les links :
for (let i = 0; i < ancres.length; i++) {
  ancres[i].style.color = "#750ff7";
}

//changer les balises li :
const li = document.getElementById("front-dev-tools");
const frontDevButton = document.getElementById("front-dev-button");
const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");

frontDevButton.addEventListener("click", function() {
  firstLi.innerHTML = "VSCode";
  secondLi.innerHTML = "GitHub";
  thirdLi.innerHTML = "Terminal";
});