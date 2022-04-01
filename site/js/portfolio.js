const avatar = document.querySelector(".avatar");
avatar.addEventListener("click", function(){
        avatar.src = "image/avatar-bis.png";
    });

const button = document.querySelector(".button");
button.addEventListener("click", function(){
    let nameUser = prompt();
    let displayedName = document.querySelector("#name");
    displayedName.innerHTML = nameUser;
    displayedName.style = "color:white";
    let box = document.querySelectorAll(".pink-bg");
    for (const node of box){
    node.style = "background-color:#750ff7";
    }
})
