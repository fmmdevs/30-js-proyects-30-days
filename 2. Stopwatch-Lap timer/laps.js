// window.addEventListener("DOMContentLoaded")

// En cuanto la ventana se cargue:
window.onload = function () {
  // Obtenemos los elementos span del timer por su id
  const minutes = document.getElementById("timer-minutes");
  const seconds = document.getElementById("timer-seconds");
  const tens = document.getElementById("timer-tens");

  // Obtenemos el elemento ul con id laps
  const laps = document.getElementById("laps-container");

  // Obtenemos cada uno de los botones
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const resetBtn = document.getElementById("reset-btn");

  // Inicializamos las variables que vamos a introducir en los span
  let minutesSet = 0;
  let secondsSet = 0;
  let tensSet = 0;

  //
  let interval;

  //
  const startTimer = () => {
    tensSet++;

    if (tensSet <= 9) {
      tens.innerHTML = "0" + tensSet;
    } else if (tensSet <= 99) {
      tens.innerHTML = tensSet;
    } else {
      tensSet = 0;
      secondsSet++;
    }
    if (secondsSet <= 9) {
      seconds.innerHTML = "0" + secondsSet;
    } else if (secondsSet <= 59 && secondsSet >= 10) {
      seconds.innerHTML = secondsSet;
    } else {
      secondsSet = 0;
      minutesSet++;
      if (minutesSet <= 9) {
        minutes.innerHTML = "0" + minutesSet;
      } else {
        minutes.innerHTML = minutesSet;
      }
    }
  };
  //
  startBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    if (
      minutes.innerHTML + seconds.innerHTML + tens.innerHTML != "000000" &&
      laps.childElementCount <= 8
    ) {
      const lap = document.createElement("li");
      lap.innerHTML = timer.innerHTML;
      laps.appendChild(lap);
    }
  };

  stopBtn.onclick = () => {
    clearInterval(interval);
  };

  resetBtn.onclick = () => {
    // eliminar todos los hijos de un elemento
    while (laps.childElementCount > 0) {
      laps.removeChild(laps.firstChild);
    }
    clearInterval(interval);
    minutesSet = 0;
    secondsSet = 0;
    tensSet = 0;

    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    tens.innerHTML = "00";
  };
};
