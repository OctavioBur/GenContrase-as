document.getElementById("generateBtn").addEventListener("click", function() {
    const phrase = document.getElementById("phrase").value.trim();

    if (phrase === "") {
        alert("Por favor, ingresa una frase o palabra.");
        return;
    }

    const password = generateSecurePassword(phrase);
    document.getElementById("password").textContent = password;
});

function generateSecurePassword(input) {
    const normalizedInput = input.replace(/ /g, "").toLowerCase();
    const hash = generateHash(normalizedInput);
    return convertHashToPassword(hash);
}

function generateHash(input) {
    let hash = 0, i, chr;
    if (input.length === 0) return hash;
    for (i = 0; i < input.length; i++) {
        chr = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
}

function convertHashToPassword(hash) {
    const symbols = "!@#$%^&*()";
    let password = "";

    for (let i = 0; i < 12; i++) {
        const char = hash.charAt(i % hash.length);
        if (i % 4 === 0) {
            password += char.toUpperCase();
        } else if (i % 4 === 1) {
            password += parseInt(char, 16) % 10;
        } else if (i % 4 === 2) {
            password += char;
        } else {
            password += symbols[parseInt(char, 16) % symbols.length];
        }
    }

    return password;
}
