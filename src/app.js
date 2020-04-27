import "../css/main.css";


document.addEventListener("DOMContentLoaded", function() {
const board = document.querySelector(".board");
const zombie = board.querySelector(".zombie");

const startButton= document.querySelector(".start-game p");
const start = document.querySelector(".start-game");
const box = document.querySelector(".box");
let score = 0

    startButton.addEventListener("click", function() {

       
        setInterval(function() {
            const div = document.createElement("div");
            div.classList.add("zombie");
            
        div.addEventListener("click", function() {
            const scoreBox = document.querySelector(".score span");
            scoreBox.innerText = score+=1
            div.classList.add("hide");
        
            })
        
            const min = 3;
            const max = 450;
            const position = Math.floor(Math.random()*(max-min+1)+min);
            div.style.bottom = `${position}px`; 
        
        {
            const min = 20;
            const max = 40;
            const time = Math.floor(Math.random()*(max-min+1)+min);
            div.style.animationDuration = `0,1s, ${time}s`; 
        }
        board.appendChild(div); 
            
        }, 800);
        start.classList.add("hidden");
        box.classList.remove("hidden");
        
    })

})

let mouseCursor = document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);
function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}
