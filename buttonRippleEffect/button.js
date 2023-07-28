const btnElement=document.querySelector(".btn");

btnElement.addEventListener("mouseover",(event)=>{
    // console.log(event.pageX);//will give the pixel of the moseover point from the left corner pf screen

    //this will make the button boundry to have value from 0 onwards
   const y= event.pageY-btnElement.offsetTop;
   const x= event.pageX-btnElement.offsetLeft;
console.log(y);
   //now setting the left and top for psudoelement beginning
   btnElement.style.setProperty("--xpos",x+"px");
   btnElement.style.setProperty("--ypos",y+"px");
});

//take away
//using element.offsetTop we can get the pixel from the element 