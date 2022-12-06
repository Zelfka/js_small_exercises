const secondsHand = document.querySelector('#secs');
const minsHand = document.querySelector('#mins');
const hoursHand = document.querySelector('#hours')

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;

  const mins = now.getMinutes();
  const minsDegrees = ((mins/60) * 360) + 90;

  const hours = now.getHours();
  const hoursDegrees = ((hours/12 * 360)) + 90;

  secondsHand.style.transform =  `rotate(${secondsDegrees}deg)`;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);