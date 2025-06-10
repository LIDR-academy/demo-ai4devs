# Prompts usados para el ejercicio

Chatbot utilizado: ChatGPT

# Prompt inicial: 
Necesito crear una página web con lógica en JavaScript que invierta el orden de una cadena de texto.  
Ejemplo: entrada: AI4Devs devuelve: sveD4IA

# Prompt intermedios:
Pero debo tener el .js separado en un archivo, solo llamar en el .html

le doy click al boton invertir y no funciona

# Prompt Final:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
    <div class="container">
    <h2>Invertir Texto</h2>
    <input type="text" id="entrada" placeholder="Escribe algo...">
    <button id="btnInvertir">Invertir</button>
    <p id="resultado"></p>
  </div>

<script src="script.js"></script>
</body>
</html>

    function invertirTexto() {
      const texto = document.getElementById("entrada").value;
      const textoInvertido = texto.split("").reverse().join("");
      document.getElementById("resultado").textContent = "Resultado: " + textoInvertido;
    }
  
