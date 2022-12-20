let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points ;
document.querySelector("span.time_taken").innerHTML = user_time;
// document.getElementById("total").innerHTML= ` <h4 id="total">Total Questions:${questions.length+1}</h4>`;

let correct =user_points/10 ;
document.querySelector("span.correctans").innerHTML=correct;


document.querySelector("span.wrongans").innerHTML=10-correct ;



document.querySelector(".btnend").addEventListener(
    "click",
    
function() {
    location.href = "category.html";

 } );

document.querySelector(".btnend2").addEventListener(
    "click",
    
function() {
    location.href = "start.html";

 } );