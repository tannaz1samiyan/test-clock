

let sec = document.querySelector('.sec');
let min = document.querySelector('.mine');
let hour = document.querySelector('.hour');
let deg = 6;

setInterval(clockHandler , 1000);

function clockHandler(){
    let d = new Date();
 
    let s = d.getSeconds() * deg;
    let m=d.getMinutes()*deg;
    let h=d.getHours()*30;
   
    hour.style.transform=`rotatez(${h+(m/12)}deg)`
     min.style.transform=`rotatez(${m}deg)`
	sec.style.transform = `rotateZ(${s}deg)`;


}






