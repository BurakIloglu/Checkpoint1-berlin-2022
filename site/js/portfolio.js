const avatar = document.querySelector('#avatar')

avatar.addEventListener('click', function(){
    avatar.src="./image/avatar.svg"
})

const name = document.querySelector('#name')
const btnname = document.querySelector('#changeName')
const description = document.querySelector('.description')
const pink = document.querySelectorAll('.pink-text')


btnname.addEventListener('click', function(){
    let newcolor = prompt("votre couleur?")
    let newname = prompt("votre nom ?");
    name.innerHTML = newname;
    name.style.color = "white";
    description.style.backgroundColor = newcolor;
    for(i = 0; i < pink.length; i++){
        pink[i].style.color =newcolor
    }
    
})

const lien = document.querySelectorAll("a")
for(i = 0; i < lien.length; i++){
    lien[i].classList.toggle("purple-text")
}

const btnSkill= document.querySelector('#changeSkill')
const li = document.querySelectorAll("#front-dev-tools li")
const liSkill =["vscode", "github", "terminal"]


btnSkill.addEventListener('click', function(){
    for(i = 0; i < li.length; i++){
        li[i].innerHTML = liSkill[i]
    }
})

const list = document.querySelector("#back-dev-tools")
const btnAdd= document.querySelector('#addSkill')

btnAdd.addEventListener('click', function(){
    const newLi = document.createElement('li')
    const text = document.querySelector('#textSkill').value
    newLi.innerHTML = text
    list.appendChild(newLi)

})

