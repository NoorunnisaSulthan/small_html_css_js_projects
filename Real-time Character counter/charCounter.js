const textAreaE1=document.getElementById("textArea");
const totalCharacters=document.getElementById("total-counter");
const remainingCounter=document.getElementById("remaining-counter")
//when u press a key in the keyboard within the textarea.
textAreaE1.addEventListener("keyup",()=>{
updateCounter();
});



function updateCounter(){
    //for text area dont use ariaValueMax and just use value
    //textAreaE1.value.length ==FINDS THE NUMBER OF LETTERS WRITTEN IN THE TEXTAREA
    totalCharacters.innerText=textAreaE1.value.length;
    remainingCounter.innerText=(textAreaE1.getAttribute("maxlength")-textAreaE1.value.length);
    //To find the remaining characters
    

}