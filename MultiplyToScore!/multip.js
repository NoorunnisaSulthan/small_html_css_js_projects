//to generate random number for multipliying
//(Math.random()*100) will generate a decimal number from 1-100
//math.ciel will generate an integer number 
const num1= Math.ceil(Math.random()*100);
const num2= Math.ceil(Math.random()*10);

//setting score to that in local storage in number foem
//to put in number form we are using JSON.parse
let score=JSON.parse(localStorage.getItem("score"));

//if score not there in local storage yet(i.e u just started)
if(!score){
    score=0;
};

//now fetching score element in display from htmll and adding the logic to it
const gameScore=document.getElementById("score");

gameScore.innerText=`score=${score}`;

//asking question
const questionE=document.getElementById("question");
questionE.innerText=`What is ${num1} x ${num2}?`;

//the corredt answer
const correctAnswer=num1*num2;

//to get user answer first bring in the form
const formE=document.getElementById("form");
//to get the user input in js
const userInput=document.getElementById("input");


//when user submit form then we have to get the user input

//here submit is an inbuilt parameter for the form and hasnt been declared in html
formE.addEventListener("submit",()=>{
    //userInput.value will bring whatever in input field to u but in string form so add a + in front
const userAnswer=+userInput.value;
if(userAnswer==correctAnswer){
score++
updateLocalStorage();
}
else{
score--;
updateLocalStorage();
}

})

//to store score in local storage so that everything the score is not reset to zero on clicking submit button
function updateLocalStorage(){
    //we use JSON.stringify to convert the score into string form as we can
    //only but in local storage string is accepted.
    localStorage.setItem("score",JSON.stringify(score));
}

//take aways
//1. creating random numbers in js
//2.how to parse from string to number and viceversa using [JSON.stringify(score)] &[JSON.parse(score)]
//3. how to use local storage to update score variable
//4. creating score function and calling it after every change made to score variable.