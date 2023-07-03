const startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")
const body = document.querySelector("body");
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  stopBtn.setAttribute("disabled", "")
  const makingColors = () => {
    startBtn.setAttribute("disabled", "")
    stopBtn.removeAttribute("disabled")
    timerId = setInterval(() => {
        
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
   
  } 
  const stopingColors = () => {
    stopBtn.setAttribute("disabled", "")
    clearInterval(timerId)
    startBtn.removeAttribute('disabled')
  }
stopBtn.addEventListener("click", stopingColors)
  startBtn.addEventListener("click", makingColors);
  
