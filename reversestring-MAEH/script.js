function invertirTexto() {
  const texto = document.getElementById("entrada").value;
  const textoInvertido = texto.split("").reverse().join("");
  document.getElementById("resultado").textContent = "Resultado: " + textoInvertido;
}

document.getElementById("btnInvertir").addEventListener("click", invertirTexto);
