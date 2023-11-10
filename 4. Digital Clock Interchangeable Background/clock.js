const time = new Date();

const clock = document.getElementById("time");

console.log(time.getMinutes());
console.log(time.getHours());

const hours = time.getHours();
const minutes = time.getMinutes();

clock.innerHTML = hours + ":" + minutes;
