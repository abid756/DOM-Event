// Evento 7 (inline) viene da HTML -> saluta()
function saluta() {
  const nome = document.getElementById("nome").value || "Visitatore";
  alert("Ciao, " + nome + "!");
}

// Eventi 8, 9, 10 (sul box)
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

});
});





