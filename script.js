// JS esterno

let contatore = 0;

// Funzioni inline
function incrementa() {
  contatore++;
  document.getElementById("contatore").innerText = contatore;
}

function azzera() {
  contatore = 0;
  document.getElementById("contatore").innerText = contatore;
}

// Cambia colore di sfondo
document.getElementById("rosso").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightcoral";
});

document.getElementById("verde").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgreen";
});

document.getElementById("blu").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// Mouseover su testo
const testoHover = document.getElementById("hoverTesto");
const testoOriginale = testoHover.innerText;

testoHover.addEventListener("mouseover", function () {
  this.innerText = "Grazie per aver passato il mouse!";
});

testoHover.addEventListener("mouseout", function () {
  this.innerText = testoOriginale;
});

// Input dinamico
document.getElementById("inputNome").addEventListener("input", function () {
  let nome = this.value;
  document.getElementById("saluto").innerText = "Ciao, " + nome + "!";
});

// Tema scuro
document.getElementById("toggleTema").addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

// Submit form
document.getElementById("formFeedback").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Grazie per il feedback!");
});
