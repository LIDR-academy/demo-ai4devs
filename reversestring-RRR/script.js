const input = document.getElementById('input-text');
const output = document.getElementById('output-text');

input.addEventListener('input', () => {
    const reversed = input.value.split('').reverse().join('');
    output.textContent = reversed;
});
