var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var buttonInnerHTML=this.innerHTML;
 switch (buttonInnerHTML) {
   case "w":

   var audio1=new Audio("sounds/tom-1.mp3");
   audio1.play();
     break;

     case "a":
     var tom2=new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;

     case "s":
     var tom3=new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;

     case "d":
     var audiod=new Audio("sounds/tom-4.mp3");
     audiod.play();
     break;

     case "j":
     var audioj=new Audio("sounds/snare.mp3");
     audioj.play();
     break;
     case "k":
     var audiok=new Audio("sounds/crash.mp3");
     audiok.play();
     break;

     case "l":
     var audiok=new Audio('sounds/kick-bass.mp3');
     audiok.play();
     break;


   default:
   console.console.log(buttonInnerHTML);


 }
 buttonAnimation(buttonInnerHTML);
});
}



addEventListener("keypress",function(event){

  alert("keypress");

})

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);

}
