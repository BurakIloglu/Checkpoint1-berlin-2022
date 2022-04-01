 let avatarChange = document.querySelector("avatar");

 avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
});



document
  .getElementById("changeButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
   
    const newBackground = prompt("Choose your background color");
    const newName = prompt("Enter your name to change it in the paragaraph and change its color");
    let newNameElement = document.getElementById("name");
    newNameElement.innerText = newName;
    document.getElementById("name").style.color = "white"; 
    document.querySelector(".pink-bg").style.background = "#750ff7";
    document.querySelectorAll(".pink-bg").
  });


  
  
  // Pour changer tout les éléments roses en violet: 
  // querySelectorAll pour selectionner tous les éléments roses sur la page 
  // + boucle (forEach?) qui les modifie tous en violet
