import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const timePicker = document.querySelector("#datetime-picker")
const btnPicker = document.querySelector("button[data-start]")
const timerDays = document.querySelector("span[data-days]")
const timerHours = document.querySelector("span[data-hours]")
const timerMinutes = document.querySelector("span[data-minutes]")
const timerSeconds = document.querySelector("span[data-seconds]")
btnPicker.setAttribute("disabled", "")
let timerId = null;
let tim;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
            if(selectedDates[0] <= new Date()){
                window.alert("Please choose a date in the future")
                btnPicker.setAttribute("disabled", "")
            } else { setInterval(() => {
                tim = convertMs(selectedDates[0].getTime() - new Date())
            }, 1000);
                 
                btnPicker.removeAttribute("disabled")
            }
               
            }
         
      
       
    };
    const addLeadingZero = (value) => {
        return value.toString().padStart(2, "0")
    }
  const timer = () => {
    clearInterval(timerId)
    timerId = setInterval(() => {
        
        timerDays.textContent = addLeadingZero(tim.days)
        timerHours.textContent = addLeadingZero(tim.hours)
        timerMinutes.textContent = addLeadingZero(tim.minutes);
        timerSeconds.textContent = addLeadingZero(tim.seconds)


    }, 1000)
  
         }  
    
 btnPicker.addEventListener("click",timer)

  function convertMs(ms) {
    // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
    
    // Remaining days
      const days = Math.floor(ms / day);
    // Remaining hours
      const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
      return { days, hours, minutes, seconds };
    }

    
  flatpickr(timePicker, options)

//   if(tim.seconds< 10 && tim.seconds > 0){
//     timerSeconds.textContent = `0${tim.seconds}`} else if(tim.seconds <= 0 ){
//         timerSeconds.textContent = "00";} else {
//             timerSeconds.textContent = tim.seconds}
//             /*minutes*/
//             if(tim.minutes< 10 && tim.minutes > 0){
//                 timerMinutes.textContent = `0${tim.minutes}`} else if(tim.minutes <= 0 ){
//                     timerMinutes.textContent = "00";} else {
//                         timerMinutes.textContent = tim.minutes}
//                         /*hours */
//                         if(tim.hours< 10 && tim.hours > 0){
//                             timerHours.textContent = `0${tim.hours}`} else if(tim.hours <= 0 ){
//                                 timerHours.textContent = "00";} else {
//                                     timerHours.textContent = tim.hours}
//                                     /*days */
//                                     if(tim.days< 10 && tim.days > 0){
//                                         timerDays.textContent = `0${tim.days}`} else if(tim.days <= 0 ){
//                                             timerDays.textContent = "00";} else {
//                                                 timerDays.textContent = tim.days}