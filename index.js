var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+ randomNumber1 + ".png";
var randomImage="images/" + randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+ randomNumber2 + ".png";
var randomImage1="images/" + randomDiceImage1;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage1);


if (randomImage>randomImage1){
    document.querySelector("h1").innerHTML="Player1 Won";
}
else if (randomImage1>randomImage){
    document.querySelector("h1").innerHTML="Player2 Won"; 
}
else{
    document.querySelector("h1").innerHTML="Match Draw";
}