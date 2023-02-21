/* Declare variables below to save the different sections (divs) of your story*/

let optOne = document.querySelector(".option-one-screen");
let optOneButton = document.querySelector(".option-one");
optOneButton.onclick = function() {

    optOne.style.display = "block";
};

let optTwo = document.querySelector(".option-two-screen");
let optTwoButton = document.querySelector(".option-two");
optTwoButton.onclick = function() {
    optTwo.style.display = "block";
};


let paragraph = document.querySelector(".option-one-end");
let optArrowButton = document.querySelector(".option-one");
optArrowButton.onclick = function() {
    optOne.style.display = "block";
};



// catImage.onclick= function (){
// //     optionOneScreen.style.display="block";
// };
// .onclick= function (){
// };

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/