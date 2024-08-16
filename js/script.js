document.getElementById('generate').addEventListener('click', function() {
    const phrase = document.getElementById('phrase').value;
    if (phrase) {
        const securePassword = generateSecurePassword(phrase);
        document.getElementById('password').textContent = securePassword;
    } else {
        alert('Por favor, ingresa una frase.');
    }
});

function generateSecurePassword(input) {
    const replacements = {
        'a': '@',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '$',
        'g': '9'
    };

    let transformed = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i].toLowerCase();
        if (char !== ' ') {
            transformed += replacements[char] || char;
        }
    }

    // Agregar caracteres aleatorios para alcanzar al menos 12 caracteres
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    while (transformed.length < 12) {
        transformed += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return transformed;
}
