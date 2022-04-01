/* change user avatar by clickin gon it */
const avatarImg = document.getElementById('avatar-img');

avatarImg.addEventListener('click', function() {
    avatarImg.src = "./image/avatar-bis.png";
})

// Modify text and name button

document.querySelector('#mod-text-color').addEventListener('click', () => {
    const colorMod = prompt("Enter a color :")    
    const userName = prompt("Enter your name :")
    const name = document.getElementById("name")
    const pinkBg = document.querySelectorAll(".pink-bg")
    const pinkText = document.querySelectorAll(".pink-text")
    name.innerHTML = userName
    name.style = 'color: white'
    pinkBg.forEach( pinkBg => {
        pinkBg.style.background = colorMod
    })
    pinkText.forEach( pinkText => {
        pinkText.style.color = colorMod
    })
})

 // change link's color with a for loop
const links = document.getElementsByTagName("a")
for (let index = 0; index < links.length; index++) {
    links[index].style.color = '#750ff7';
} 

// loop to replace li elements