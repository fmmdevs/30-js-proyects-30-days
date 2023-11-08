// hexadecimal es del 0-9 A,B,C,D,E,F

// función que devuelve un numero hexadecimal de 6 dígitos.
const randomHex = () => {
  const randomHex = [];
  let randomNum;
  for (let i = 0; i < 6; i++) {
    // Número aleatorio entre 0 y 15 inclusives
    randomNum = Math.floor(Math.random() * 16);

    // Convierto a hexadecimal
    if (randomNum == 10) {
      randomHex.push("A");
    } else if (randomNum == 11) {
      randomHex.push("B");
    } else if (randomNum == 12) {
      randomHex.push("C");
    } else if (randomNum == 13) {
      randomHex.push("D");
    } else if (randomNum == 14) {
      randomHex.push("E");
    } else if (randomNum == 15) {
      randomHex.push("F");
    } else {
      randomHex.push(randomNum);
    }
  }
  // Devuelvo un string con el número en hexadecimal.
  return "#" + randomHex.join("");
};

// selecting each element which class is .element

const colors = document.querySelectorAll(".element");
console.log(colors);

for (let color of colors) {
  const span = color.querySelector("span");
  const hex = randomHex();
  span.textContent = hex;
  color.style.backgroundColor = hex;
}

// hex a elegir para verificación
// genero numero aleatorio entre 0 y 8 inclusives
let posicion = Math.floor(Math.random() * 9);

// obtengo el span del h1 con id select_color
const selected_color = document.getElementById("select_color");

// obtengo el texto del .element de la posicion "posicion"
selected_color.textContent = colors[posicion].textContent;

// añado el event listener para que al hacer click compruebe si hemos seleccionado el color y cambie el formulario a enabled
// necesitos los elementos para pasarlos a enabled:
const checkbox = document.getElementById("are-you");
const button = document.querySelector("button");

colors.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.textContent == selected_color.textContent) {
      alert("ok");
      checkbox.disabled = false;
    } else {
      alert("not ok");
      checkbox.disabled = true;
    }
  });
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    button.disabled = false;
  }
});
