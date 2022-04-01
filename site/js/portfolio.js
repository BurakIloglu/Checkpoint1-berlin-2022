const changementImage = document.querySelector("click-event");
const image1 = document.querySelector('.avatar1');
const image2 = document.querySelector ('.avatar2');

image1.addEventListener ('click', () => {
    image2.classList.remove('avatar2')
    image1.classList.add("avatar2");
})
image2.addEventListener('click', () => {
    image1.classList.remove('avatar2')
    image2.classList.add("avatar2");
})

const nouveauNom = document.querySelector("click-event");
let oldName = document.querySelector('#name');

document.querySelector('.changeName').addEventListener('click', () => {
oldName.innerHTML = prompt("Enter your name")
oldName.style.color ="white";
const promptColor = prompt('enter your color')
document.querySelector('.pink-bg').style.backgroundColor = `${promptColor}`
for (let i=0; i< document.querySelectorAll('.pink-text').length; i++) {
    document.querySelectorAll('.pink-text')[i].style.color = `${promptColor}`
}
for (let i=0; i< document.querySelectorAll('.pink-bg').length; i++) {
    document.querySelectorAll('.pink-bg')[i].style.backgroundColor = `${promptColor}`
}
for (let i=0; i< document.querySelectorAll('.newNavbar').length; i++) {
    document.querySelectorAll('.newNavbar')[i].style.color = `${promptColor}`
}
})
