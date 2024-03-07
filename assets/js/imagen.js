// Primer Desafió!!
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
  let ingreso1 = document.getElementById("ingreso1").value;
  let ingreso2 = document.getElementById("ingreso2").value;
  let ingreso3 = document.getElementById("ingreso3").value;

  maximo = Number(ingreso1) + Number(ingreso2) + Number(ingreso3);

  if (maximo < 10) {
    texto = document.querySelector("span");
    texto.innerHTML = "llevas " + maximo + " stickers";
  } else {
    texto = document.querySelector("span");
    texto.innerHTML = "Llevas demasiados stickers";
  }
}

// segundo Desafió!!
let listaOpciones = new Array(
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
);
window.onload = listNumero1();
window.onload = listNumero2();
window.onload = listNumero3();

function listNumero1() {
  let lista = document.getElementById("opciones1");
  for (i = 0; i < listaOpciones.length; i++) {
    lista.options[i] = new Option(listaOpciones[i]);
  }
}

function listNumero2() {
  let lista = document.getElementById("opciones2");
  for (i = 0; i < listaOpciones.length; i++) {
    lista.options[i] = new Option(listaOpciones[i]);
  }
}

function listNumero3() {
  let lista = document.getElementById("opciones3");
  for (i = 0; i < listaOpciones.length; i++) {
    lista.options[i] = new Option(listaOpciones[i]);
  }
}

//Tercer Desafió!!
function password() {
  let acceso1 = document.getElementById("opciones1");
  let pass1 = acceso1.value;

  let acceso2 = document.getElementById("opciones2");
  let pass2 = acceso2.value;

  let acceso3 = document.getElementById("opciones3");
  let pass3 = acceso3.value;

  let llave = pass1 + pass2 + pass3;

  if (llave == 911) {
    texto = document.getElementById("correcto");
    texto.innerHTML = "Password 1 correcto";
  } else if (llave == 714) {
    texto = document.getElementById("correcto");
    texto.innerHTML = "Password 2 correcto";
  } else {
    texto = document.getElementById("correcto");
    texto.innerHTML = "Password incorrecto";
  }
}
