function paginaCaricata() {
  console.log("Pagina caricata correttamente!");
}

function ingrandisci() {
  document.getElementById("immagine").style.width = "300px";
}

function riduci() {
  document.getElementById("immagine").style.width = "150px";
}

function coloraBox() {
  document.getElementById("box").style.backgroundColor = "lightgreen";
}

document.getElementById("btnEsterno").addEventListener("click", function() {
  alert("Evento gestito da file esterno!");
});
