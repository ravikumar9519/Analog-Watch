const hr = document.querySelector("#hours");
const barsec = document.querySelector(".bar-second");
const hra = [];
const bara = [];
//create a number hours
for(let i=1;i<=12;i++){
    hra.push(
       `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

hr.insertAdjacentHTML("afterbegin", hra.join("")); 

for(let i=1;i<=60;i++){
  bara.push(
    `<span style="--index:${i};"><p></p></span>`
 );
}
barsec.insertAdjacentHTML("afterbegin", bara.join("")); 

const hrhand = document.querySelector(".hand.hour");
const mnhand = document.querySelector(".hand.minute");
const sechand = document.querySelector(".hand.second");

function getCurrentTime(){
  let date = new Date();
  let curr_hr = date.getHours();
  let curr_mn = date.getMinutes();
  let curr_sec = date.getSeconds();
  
  hrhand.style.transform = `rotate(${curr_hr * 30 + curr_mn/2}deg)`;
  mnhand.style.transform = `rotate(${curr_mn * 6}deg)`;
  sechand.style.transform = `rotate(${curr_sec * 6}deg)`;
}

getCurrentTime();

setInterval(getCurrentTime,1000)