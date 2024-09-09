// para que se renderice cuando abrimos el browser
window.onload = function() {
  // lista de cartas vacias s
  let cartas = [];
  function generarCarta() {
    // propiedadses de nuestra carta
    let icono = ["♦", "♥", "♠", "♣"];
    let valor = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    // palos random
    let iconorandom = Math.floor(Math.random() * icono.length);
    // valor random
    let valorrandom = Math.floor(Math.random() * valor.length);
    // condicion para el color
    let color =
      icono[iconorandom] === "♦" || icono[iconorandom] === "♥"
        ? "red"
        : "black";
    // styles
    let card = document.createElement("div");
    card.className = "card";
    card.style.border = "1px solid black";
    card.style.borderRadius = "10px";
    card.style.width = "120px";
    card.style.height = "160px";
    card.style.margin = "10px";
    card.style.display = "inline-block";
    card.style.color = color;

    let valoriconohead = document.createElement("div");
    valoriconohead.textContent = icono[iconorandom];
    valoriconohead.style.fontSize = "24px";
    valoriconohead.style.position = "left";

    let valornumero = document.createElement("div");
    valornumero.innerHTML = valor[valorrandom];
    valornumero.style.fontSize = "36px";
    valornumero.style.margin = "20px 0";
    valornumero.style.textAlign = "center";

    let valoriconofoot = document.createElement("div");
    valoriconofoot.textContent = icono[iconorandom];
    valoriconofoot.style.fontSize = "24px";
    valoriconofoot.style.position = "right";
    valoriconofoot.style.transform = "rotate(180deg)";

    card.appendChild(valoriconohead);
    card.appendChild(valornumero);
    card.appendChild(valoriconofoot);

    card.dataset.valor = valorrandom;

    return card;
  }
  // seleccionando al contenedor
  function traerCartas() {
    const numeroDeCartas = document.getElementById("entrada").value;
    const contenedorCartas = document.getElementById("contenedorCartas");
    cartas = [];
    contenedorCartas.innerHTML = "";
    // recorriendo
    for (let i = 0; i < numeroDeCartas; i++) {
      let carta = generarCarta();
      cartas.push(carta);
      contenedorCartas.appendChild(carta);
    }
  }

  function bubbleSort() {
    let len = cartas.length;
    const contenedorMatriz = document.getElementById("bubble");
    contenedorMatriz.innerHTML = ""; //limpiar el contenedor antes de generar nuevas filas
    let indexCounter = 0; // Contador
    // iterando
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (
          parseInt(cartas[j].dataset.valor) >
          parseInt(cartas[j + 1].dataset.valor)
        ) {
          // Intercambiar las cartas
          let temp = cartas[j];
          cartas[j] = cartas[j + 1];
          cartas[j + 1] = temp;

          //Crear una nueva fila para mostrar el estado actual de las cartas
          const fila = document.createElement("div");
          fila.style.display = "flex";
          fila.style.alignItems = "center";

          //Agregar el índice al inicio de la fila
          const indice = document.createElement("div");
          indice.textContent = `${indexCounter}`;
          indice.style.fontSize = "20px";
          indice.style.marginRight = "10px";
          indice.style.fontSize = "30px";
          fila.appendChild(indice);

          for (let k = 0; k < len; k++) {
            let cartaClonada = cartas[k].cloneNode(true);
            fila.appendChild(cartaClonada);
          }

          contenedorMatriz.appendChild(fila);
          indexCounter++; //Incrementar el contador en cada intercambio
        }
      }
    }
  }
  // selecionando elemento por su id y asignandole una funcion
  document.getElementById("drawBtn").addEventListener("click", function() {
    traerCartas();
  });

  document.getElementById("sortBtn").addEventListener("click", function() {
    bubbleSort();
  });
};
