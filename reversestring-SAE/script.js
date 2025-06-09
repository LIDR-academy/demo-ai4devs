function reverseInput() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('outputString').textContent = reversed;
}

