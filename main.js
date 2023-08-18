//Valor inicial del contador
let valor = 0;

//Llamamos a los botones y al contador
let contador = document.querySelector("#contador");
let botones = document.querySelectorAll(".boton");

botones.forEach(function (boton) {
  boton.addEventListener("click", function (e) {
    const estilo = e.currentTarget.classList;
    if (estilo.contains("restar")) {
      valor--;
    } else if (estilo.contains("sumar")) {
      valor++;
    } else {
      valor = 0;
    }

    if (valor > 0) {
      contador.style.color = "green";
    } else if (valor < 0) {
      contador.style.color = "red";
    } else {
      contador.style.color = "black";
    }

    contador.textContent = valor;
  });
});
