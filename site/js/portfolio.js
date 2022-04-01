const changeAvatar = document.querySelector("#avatar-picture");
const changeName = document.querySelector("#name");
const modifyText = document.querySelector("#modify-text");
const modifyBg = document.querySelectorAll(".pink-bg");
const modifyLinkColor = document.querySelectorAll("a");
const modifyLinkText = document.querySelectorAll("li")
const newButtonModify = document.createElement('button');
const frontDevTools = document.querySelector("#front-dev-tools");

//click : modify avatar
changeAvatar.addEventListener('click', function(){
    changeAvatar.src = "image/avatar.svg";
})

// Click :ask color & name + modify name, color & bg
modifyText.addEventListener('click', function(){
    const askColor = prompt("Choose a color");
    const userName = prompt("What's you name");
    changeName.innerHTML = `${userName}`;
    changeName.style.color = "white";
    modifyBg.forEach(e => e.style.backgroundColor = `${askColor}`);
    modifyLinkColor.forEach(f => f.style.color = `${askColor}`)
    
    
})
//Create button & add class
frontDevTools.appendChild(newButtonModify);
newButtonModify.innerHTML = "Modify";
newButtonModify.classList.add("class-button")

// 
/*newButtonModify.addEventListener('click', function(){
    modifyLinkText.forEach(g => g.innerHTML = <li>New Text</li>);
    
    
})*/

