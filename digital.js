const time = document.querySelector('#time');
const dateElement = document.querySelector('#date');
const dayElement = document.querySelector('#day');

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;


  time.innerHTML = `${hours}:${minutes}:${seconds}`;


  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  

  dateElement.innerHTML = `${month}/${day}/${year}`;


  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currentDay = daysOfWeek[now.getDay()];
  dayElement.innerHTML = currentDay;
}


setInterval(updateClock, 1000);


updateClock();
