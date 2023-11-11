const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const userName = "Francisco";

const showTime = () => {
  const clock = document.getElementById("time");
  if (minutes < 10 || hours < 10) {
    if (minutes < 10) {
      clock.innerHTML = hours + ":0" + minutes;
    }
    if (hours < 10) {
      clock.innerHTML = "0" + hours + ":" + minutes;
    }
  } else if (hours < 10 && minutes < 10) {
    clock.innerHTML = "0" + hours + ":" + "0" + minutes;
  } else {
    clock.innerHTML = hours + ":" + minutes;
  }
};

const showMsg = (userName) => {
  const msg = document.getElementById("user-msg");
  let background;
  const container = document.getElementById("clock-container");

  if (hours >= 5 && hours < 12) {
    msg.innerHTML = "Good morning, " + userName;
    background = "url(assets/img/austin-p-iWJuV9Hzw5A-unsplash.jpg)";
    container.style.color = "white";
  } else if (hours >= 12 && hours <= 19) {
    msg.innerHTML = "Good afternoon, " + userName;
    container.style.color = "white";

    background = "url(assets/img/claude-piche-lEEAhz5A50s-unsplash.jpg)";
  } else {
    msg.innerHTML = "Good night, " + userName;
    background = "url(assets/img/mufid-majnun-bGwdIuHg3y0-unsplash.jpg)";
    container.style.color = "white";
  }

  container.style.background = background + "center/cover";
};

const showFocus = () => {
  const focusInput = document.getElementById("focus-input");
  const focus = document.createElement("h4");

  focusInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const focusInput = document.getElementById("focus-input");
      document.querySelector("form").innerHTML = `<h4>${focusInput.value}</h4>`;
    }
  });
};

showTime();

showMsg(userName);

showFocus();
