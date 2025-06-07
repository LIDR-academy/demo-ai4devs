document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputText');
    const resultContainer = document.getElementById('resultContainer');
    const reversedTextSpan = document.getElementById('reversedText');
    const copyBtn = document.getElementById('copyBtn');

    input.addEventListener('input', () => {
        const value = input.value;

        if (value.length > 1) {
            const reversed = value.split('').reverse().join('');
            reversedTextSpan.textContent = reversed;
            resultContainer.style.display = 'block';
        } else {
            resultContainer.style.display = 'none';
        }
    });

    copyBtn.addEventListener('click', () => {
        const text = reversedTextSpan.textContent;

        navigator.clipboard.writeText(text).then(() => {
            copyBtn.textContent = 'Copied!';
            setTimeout(() => copyBtn.textContent = 'Copy to Clipboard', 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});
