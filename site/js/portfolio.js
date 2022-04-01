const avatar = document.querySelector(".avatar")
avatar.addEventListener('click', function () {
    avatar.src = "image/avatar.svg"
    avatar.alt = "new logo"
})


const btnModify = document.querySelector('#btnModify')

btnModify.addEventListener('click', function () {
    const newColor = prompt("Enter a color :")
    const userName = prompt("Enter your name :")
    const name = document.querySelector('#name')
    name.innerHTML = `${userName}`
    name.style.color = "white"

    const color = document.querySelectorAll(".pink-bg")
    for (let i = 0; i < color.length; i++) {
        color[i].style.backgroundColor = "#750ff7"
    }

    const para = document.querySelector(".description>p")
    para.style.color = "pink"


    btnModify.style.backgroundColor = "#750ff7"
    btnModify.style.color = "pink"


    const pinkText = document.querySelectorAll(".pink-text")
    for (let i = 0; i < pinkText.length; i++) {
        pinkText[i].style.color = "#750ff7"
    }

    const lien = document.querySelectorAll(".menu>a")
    for (let i = 0; i < lien.length; i++) {
        lien[i].style.color = "#750ff7"
    }
})


const btnModifList = document.querySelector("#btnModifList")

btnModifList.addEventListener('click', function () {
    const liList = document.querySelectorAll("#front-dev-tools>li")
    for (let i = 0; i < liList.length; i++) {
        liList[0].innerHTML = "VSCode"
        liList[1].innerHTML = "Github"
        liList[2].innerHTML = "Terminal"
    }
})


const btnSubmitTool = document.querySelector("#btnSubmit")

btnSubmitTool.addEventListener('click', function () {
    const newToolInput = document.querySelector("#newTool").value

    const newLi = document.createElement("li")
    newLi.innerHTML = newToolInput
    document.querySelector("ul").appendChild(newLi)
    document.querySelector("#newTool").value = ""
})
