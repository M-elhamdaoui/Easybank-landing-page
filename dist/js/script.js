console.log("hello wordl");
let humburger =document.querySelector("#humb");
let header = document.querySelector(".header");
let overlay =document.querySelector(".overlay");
let fadeElements = document.querySelectorAll(".has-fade");
let body =document.querySelector("body");
let menu = document.querySelector(".header__menu");


let showMenu =false;
humburger.addEventListener("click",toggleMenu);
function toggleMenu(){
    if(!showMenu){
        header.classList.add("open");
        fadeElements.forEach(function(elem){
            elem.classList.remove("fade-out");
            elem.classList.add("fade-in");
        })
       
        body.classList.add("noscroll");
       
        showMenu=true;
    }else{
        header.classList.remove("open");
        fadeElements.forEach(function(elem){
            elem.classList.remove("fade-in");
            elem.classList.add("fade-out");
        })
   
       body.classList.remove("noscroll");
        showMenu=false;
    }
}
window.addEventListener('resize', reportWindowSize);

function reportWindowSize(){
    var w = window.innerWidth;
    if(w>1023){
        header.classList.remove("open");
        fadeElements.forEach(function(elem){
            elem.classList.remove("fade-in");
           
        })
   
       body.classList.remove("noscroll");
        showMenu=false;
    }
}

