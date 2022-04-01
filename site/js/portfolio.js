const avatar = document.querySelector('.avatar');
const changeName = document.querySelector('#name');
const buttonChange = document.querySelector('.changeName');
const backgroundChange = document.querySelector('.pink-bg');
const colorChange = document.querySelector('.pink-text');
const modifySkills = document.querySelector('.modify');
const addButton = document.querySelector('.add');
const addSkils = document.querySelector('#addSkills');

avatar.addEventListener('click', function (){
    avatar.src = './image/avatar.svg'
})

buttonChange.addEventListener('click', function() {
    let changeColor = prompt("Wath's your favorit color?")
    let newName = prompt("Waht's your name? ")

    changeName.innerHTML= newName
    changeName.style.color ='white';

    for(let i=0; i<document.querySelectorAll('.pink-bg').length; i++){
        document.querySelectorAll('.pink-bg')[i].style.backgroundColor = `${changeColor}`
    }
    backgroundChange.style.backgroundColor = `${changeColor}`
    for(let i=0; i<document.querySelectorAll('.pink-text').length; i++){
        document.querySelectorAll('.pink-text')[i].style.color = `${changeColor}`
    }
    for(let i=0; i<document.querySelectorAll('a').length; i++){
        document.querySelectorAll('a')[i].style.color = `${changeColor}`
    }

})

modifySkills.addEventListener('click', function (){
    document.querySelector('.m1').innerHTML = "VScode"
    document.querySelector('.m2').innerHTML = "Github"
    document.querySelector('.m3').innerHTML = "Terminal"
})

addButton.addEventListener('click', function() {
    const newList = document.createElement("li")
    document.querySelector('.addList').appendChild(newList)
    const addInList = addSkils.value
    newList.innerHTML = `${addInList}`
});