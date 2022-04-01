const turnObjToArray = function(obj) {
    return [].map.call(obj, function(element) {
      return element;
    })
  };


const avatar = document.getElementById("avatar");
let name = document.getElementById("name");
const presentation = document.getElementById("description");
const button = document.getElementById("button");
const pinkText = document.querySelectorAll("#pink");
const pinkTexts = turnObjToArray(pinkText);
const footer = document.getElementById("footer")
const htmlLink = document.querySelectorAll("a")
const htmlLinks = turnObjToArray(htmlLink)



avatar.addEventListener("click", function (){avatar.src ="image/avatar.svg"})

button.addEventListener("click", function(){
   name.style.color = "white";
    let changedName = prompt("Choose a name");
    name.innerHTML = changedName;
    presentation.classList.remove('pink-bg')
    presentation.classList.add('new-background')

    for (let i = 0; i < pinkTexts.length; i++){
        pinkTexts[i].classList.remove('pink-text')
        pinkTexts[i].classList.add('purple-text')
    }

for (let j = 0; j < htmlLinks.length; j++){
    htmlLinks[j].classList.add('purple-text')
}

    footer.classList.remove('pink-bg')
    footer.classList.add('new-background')

})
