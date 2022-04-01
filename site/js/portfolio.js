const avatar = document.querySelector('#avatar');

const newAvatar =()=> {
    avatar.src = "image/avatar-bis.png";
}

avatar.onclick = function(e) {
    newAvatar();
}

const nameText = document.querySelector('#name');
const ban = document.querySelectorAll('.pink-bg');
const pinkText = document.querySelectorAll('.pink-text');
const aPink = document.querySelectorAll('a');
const button1 = document.querySelector('#button1');

console.log(ban);


button1.onclick = function(e) {
    modify();
}

const modify =()=> {
    let newColor = window.prompt("Type in a color");
    let newName = window.prompt("Type in your name");
    
    nameText.innerHTML=newName;
    nameText.style.color = "white";

    ban.forEach(element => {
        element.style.backgroundColor = newColor;
    });
    
    pinkText.forEach(e => {
        e.style.color = newColor;
    })
    
    aPink.forEach(e => {
        e.style.color = newColor;
    })
    
}