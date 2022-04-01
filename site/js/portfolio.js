const profilPic = document.getElementById("profilPic")
profilPic.addEventListener("click", ()=>{
    profilPic.src = "image/avatar.svg";

})

const nameButton = document.getElementById("nameButton")
const userName = document.getElementById("name")
const userBG = document.querySelectorAll(".pink-bg")
const userText = document.querySelectorAll(".pink-text")
const userLink = document.querySelectorAll("a")


nameButton.addEventListener("click", ()=>{
    userName.innerHTML= prompt("What's your name ?");
    userName.style.color = "white";
    const userColor = prompt("Choose a color");
    userBG.forEach(element => {
        element.style.backgroundColor = userColor;        
    });
    userText.forEach(element => {
        element.style.color = userColor;        
    });
    userLink.forEach(element => {
        element.style.color = userColor;        
    });
})
const liButton = document.getElementById("clickme")
const firstLi = document.getElementById("firstLi")
const secondLi = document.getElementById("secondLi")
const thirdLi = document.getElementById("thirdLi")

liButton.addEventListener("click", () => {
    firstLi.innerHTML = "VS Code";
    secondLi.innerHTML = "Git";
    thirdLi.innerHTML = "Terminal";
})

const backendText = document.getElementById("backendText")
const backendButton = document.getElementById("backendButton")
const backendParent = document.getElementById("backendParent")

backendButton.addEventListener("click", ()=>{
    const newLi = document.createElement("li")
    newLi.textContent = backendText.value
    backendParent.appendChild(newLi)
    backendText.value = ""
})