// Función para invertir una cadena
function reverseString(text) {
  return text.split('').reverse().join('');
}

// Elementos del DOM
const textInput = document.getElementById('textInput');
const reverseButton = document.getElementById('reverseButton');
const resultClick = document.getElementById('result-click');
const resultChange = document.getElementById('result-change');

// Evento al cambiar el contenido del input
textInput.addEventListener('input', () => {
  const value = textInput.value;

  // Activar o desactivar botón
  if (value.length > 3) {
    reverseButton.disabled = false;
    reverseButton.removeAttribute('title');
  } else {
    reverseButton.disabled = true;
    reverseButton.title = 'Debe ingresar más de 3 caracteres';
  }

  // Mostrar resultado al cambiar el input
  const reversed = reverseString(value);
  resultChange.textContent = `Texto invertido al cambiar el input: ${reversed}`;
});

// Evento al hacer click en el botón
reverseButton.addEventListener('click', () => {
  const value = textInput.value;
  const reversed = reverseString(value);
  resultClick.textContent = `Texto invertido al presionar botón: ${reversed}`;
});
