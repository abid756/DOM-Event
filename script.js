// Evento 5 (gestione select onchange)
function cambiaColore() {
  const colore = document.getElementById("colore").value;
  document.body.style.backgroundColor = colore || "white";
}

// Eventi 9 e 10 gestiti via addEventListener
const box = document.getElementById("box");
const btn = document.getElementById("btnEsterno");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "lightgreen";
  box.innerText = "Mouse sopra!";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "lightgray";
  box.innerText = "Passa sopra o clicca su di me!";
});

box.addEventListener("click", () => {
  box.style.backgroundColor = "orange";
  box.innerText = "Hai cliccato!";
});

btn.addEventListener("click", () => {
  alert("Questo messaggio arriva da script.js!");
});
