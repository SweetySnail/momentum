const h1 = document.querySelector("h1#clock");
const h2 = document.querySelector("h2#clock");

// get Current Time
function getClock() {
  const newDate = new Date();

  // Year, Month, Date, Day
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2,"0");
  const date = newDate.getDate();
  const day = newDate.getDay();
  const day_arr = ["일", "월", "화", "수", "목", "금", "토"];

  h2.innerText = `${year}/${month}/${date}(${day_arr[day]})`;

  // Hour, Minute
  const hour = String(newDate.getHours()).padStart(2,"0");
  const minute = String(newDate.getMinutes()).padStart(2,"0");

  h1.innerText = `${hour} : ${minute}`;
}

getClock();
console.log("Clock Success");
setInterval(getClock, 1000);