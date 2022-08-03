var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var show = document.getElementById("show");
console.log(show)
function changebg(){
    body.style.background = " linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    show.textContent = body.style.background
    // show.appendChild(document.createTextNode(body.style.background)) 
}
color1.addEventListener("input", changebg);
color2.addEventListener("input", changebg);
