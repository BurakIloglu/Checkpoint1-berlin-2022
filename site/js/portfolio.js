const image = document.getElementById("avatar")

function changePicture() {
    document.getElementById("avatar").src = "image/avatar-bis.png";
}


image.addEventListener("click",changePicture())