const modifButton = document.querySelector("#modifButton");
const newBg = document.getElementById("description");
const newBgFooter = document.getElementById("footer");
const newColor = document.querySelectorAll(".pink-text");
const aNewColor = document.querySelectorAll("a");
const imgAvatar = document.querySelector("#imgAvatar");
const li = document.querySelectorAll("li");
const modifLiButton = document.querySelector("#modifLi")

imgAvatar.addEventListener("click", function () {
  imgAvatar.src = "image/avatar.svg";
});

modifButton.addEventListener("click", function () {
  let newName = prompt("Type your name");
  devName.innerHTML = newName;
  devName.style.color = "white";
  newBg.classList.remove("pink-bg");
  newBg.classList.add("new-bg");
  newBgFooter.classList.remove("pink-bg");
  newBgFooter.classList.add("new-bg");
  newColor.forEach((element) => {
    element.classList.remove("pink-text");
    element.classList.add("purple");
  });
  aNewColor.forEach((element) => {
    element.classList.add("purple");
});
});

modifLiButton.addEventListener("click",function () {
    li.forEach(element => {
    element.innerHTML = "VSCode";
});
});

const newInput = document.querySelector("#newInput");
const submitButton = document.querySelector("#submitButton")
const ul = document.querySelector("#skillsList");

submitButton.addEventListener("click", function () {
    let newLi = document.createElement("li");
    newLi.innerHTML = newInput.value;
    ul.appendChild(newLi);
}
)