var bigPic = document.querySelector("#main_img");
var smallPics = document.querySelectorAll("#photos");

for(var i = 0 ; i < smallPics,length ; i++) {
    smallPics[i].addEventListener("click", changepic);
}

function changepic() {
    var smallPicsAttribute = this. getAttribute("src");
    bigPic.setAttribute("src", smallPicsAttribute);
}