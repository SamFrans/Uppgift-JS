"use strict";

var imageCounter = 1;
showDiv(imageCounter);
function changeImage(m) {
showDiv(imageCounter = imageCOunter + m);
}
function showDiv(n) {
        var i;
        var imageArray = document.getElementsByClassName("mySlides");
        if (n > imageArray.length) {
        imageCounter = 1;
        }
        if (n < 1) {
        imageCounter = imagArray.length;
        }
        for (i = 0; i < imageArray.length; i++) {
        imageArray[i].style.display = "none";
        }
        imageArray [imageCounter - 1].style.display = "block";             
}