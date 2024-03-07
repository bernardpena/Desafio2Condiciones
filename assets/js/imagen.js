let boderactivo = 1;

function resaltar() {
  border = document.querySelector("#imagen");

  if (boderactivo == 1) {
    border.style.borderStyle = "solid";
    border.style.borderColor = "#E74C3C";
    border.style.borderWidth = "2px";
    border.style.borderRadius = "50%";
    boderactivo = 0;
  } else {
    boderactivo = 1;
    border.style.borderStyle = "none";
    border.style.borderRadius = "0%";
  }
}

function verificar() {
  var ingreso1 = document.getElementById("ingreso1").value;
  var ingreso2 = document.getElementById("ingreso2").value;
  var ingreso3 = document.getElementById("ingreso3").value;

  maximo = Number(ingreso1) + Number(ingreso2) + Number(ingreso3);

  if (maximo < 10) {
    texto = document.querySelector("span");
    texto.innerHTML = "llevas " + maximo + " stickers";
  } else {
    texto = document.querySelector("span");
    texto.innerHTML = "Llevas demasiados stickers";
  }
}
