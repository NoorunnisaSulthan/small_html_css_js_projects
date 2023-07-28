const bodyE=document.querySelector("body");
//to detect mouse ovement in the browser

bodyE.addEventListener("mousemove",(event)=>{

//to get x and y position of mouse
const xPos=event.offsetX;
const yPos=event.offsetY;

//each time mouse moves create span with the snow flake inside the body
const spanE=document.createElement("span");
//since for span we created a css therefore for every span created 
spanE.style.left=xPos+"px";
spanE.style.top=yPos+"px";
bodyE.appendChild(spanE);

//after 3 seconds the span will be removed
//why?
//cause if u sont have it, after 6s of animation, all ur moves in the screen come back
setTimeout(()=>{
spanE.remove();
},3000)

//creating a random number for size
const size=Math.random()*100;

//to change the width and height of the snow flake from css style for span elemtn
spanE.style.width=size +"px";
spanE.style.height=size+"px";





});

