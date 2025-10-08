// Evento 6 (inline) viene da HTML -> saluta()
function saluta() {
  const nome = document.getElementById("nome").value || "Visitatore";
  alert("Ciao, " + nome + "!");
}

// Eventi 7, 8, 9 (sul box)
function boxOver() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "lightgreen";
  box.innerText = "Mouse sopra!";
}

function boxOut() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "lightgray";
  box.innerText = "Passa sopra o cliccami";
}

function boxClick() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "salmon";
  box.innerText = "Hai cliccato!";
}

// Evento 10 (aggiunto da JS esterno)
function ripristinaTitolo() {
  const t = document.getElementById("titolo");
  t.innerText = "Progetto DOM ed Eventi";
  t.style.color = "white"; // o il colore originale che preferisci
}

});


