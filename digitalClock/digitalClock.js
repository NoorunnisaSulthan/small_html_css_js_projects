const hourElement=document.getElementById("hour");
const minuteElement=document.getElementById("minutes");
const secondElement=document.getElementById("seconds");
const ampmElement=document.getElementById("ampm");
const greetingElement=document.getElementById("greeting");

function updateClock(){
    //variables to get the date and all
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let greeting="Good Morning:)"
    let ampm="AM"

    if(h>=12 && h<16){
        greeting="Good Afternoon:)"
    }else if (h>=16 && h<24) {
        greeting="Good Evening:)"
    }

    if(h>=12){
       ampm="PM";
    }

    if(h==24){
        h=00;
    }

    //adding a zero in the front if numbers less than 10
    h=h<10 ? "0"+h:h;
    m=m<10 ? "0"+m:m;
    s=s<10 ? "0"+s:s;


    // changing inner text 
    hourElement.innerText=h;
    minuteElement.innerText=m;
    secondElement.innerText=s;
    ampmElement.innerText=ampm;
    greetingElement.innerText=greeting;


    //set time out will repeat the function within in 1000 milli second=1second
    setTimeout(()=>{
        updateClock();
    },1000);

    

}

updateClock();


