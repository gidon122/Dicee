var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".jpg";

var randomImgSource = "img/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSource2 = "img/dice" + randomNumber2 + ".jpg";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);