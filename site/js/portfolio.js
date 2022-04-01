const imgHum = document.querySelector(".img-hum");

// We add a listener on the dog image, when the user click it changes the src

imgHum.addEventListener("click", function () {
    imgHum.src = "image/avatar.svg";

});


const button = document.querySelector(".button");

button.addEventListener("click", function () {
    const colorTxt = document.querySelector("#name");
    const colorBck = document.querySelectorAll(".pink-bg");
    const allColor = prompt("Votre couleur");
    const colorPink = document.querySelectorAll(".pink-text");
    colorTxt.innerHTML = prompt("Changer le nom");
    for(i = 0; i < colorBck.length; i++) {
    colorBck[i].style.backgroundColor = allColor;
    }

    for(i = 0; i < colorPink.length; i++) {
        colorPink[i].style.color = allColor;
        }
    
});

const allEncre = document.querySelectorAll("a");

for (let i = 0; i < allEncre.length; i++) {
allEncre[i].style.color= "#750ff7";
}

const allLi = document.querySelectorAll("#front-dev-tools li");
const li = ["VsCode", "Git", "React"];
const liChange = document.querySelector(".liChange");

liChange.addEventListener("click", function () {
    for (i = 0; i < li.length; i++) {
    allLi[i].innerHTML = li[i];
}
});

const liAdd = document.querySelector(".liAdd");

const inputTodo = document.querySelector(".todoInput");

