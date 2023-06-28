const amount = document.querySelector('[name="amount"]')
const step = document.querySelector('[name="step"]')
const submitDelay = document.querySelector('[name="delay"]')
const form = document.querySelector(".form")


function createPromise(position, delay) {
  return new Promise((resolve,reject) =>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      
      if (shouldResolve) {
        // Fulfill 
       resolve({position, delay})
          } else {
        // Reject
        reject({position, delay})
          }
    }, delay);
  })
}
const submitHandler = event => {
  event.preventDefault()

  let valueDelay = Number(submitDelay.value)
  let stepValue = Number (step.value)
  let amountValue = Number(amount.value)

  for(let i = 0; i <= amountValue; i++){
    
    let promiseDelay = valueDelay + (stepValue * i);
    createPromise(i,promiseDelay)
    .then(({position, delay})=>{
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
    } )
    .catch(({position,delay})=>{
      console.log(`❌ Rejected promise ${position} in ${delay}ms`)
    })

  
  }
}
form.addEventListener("submit", submitHandler)
