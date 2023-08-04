function encriptarTexto() {
    var plaintext = document.getElementById("plaintext").value;
    var shift = parseInt(document.getElementById("shift").value);
    var encryptedText = "";

    for (var i = 0; i < plaintext.length; i++) {
        var char = plaintext[i];
        if (char.match(/[a-z]/i)) {
            var code = plaintext.charCodeAt(i);
            if (char === char.toLowerCase()) {
                encryptedText += String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                encryptedText += String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
        } else {
            encryptedText += char;
        }
    }

    document.getElementById("encryptedText").value = encryptedText;
}
function desencriptarTexto() {
    var encryptedText = document.getElementById("plaintext").value;
    var shift = parseInt(document.getElementById("shift").value);
    var decryptedText = "";

    for (var i = 0; i < encryptedText.length; i++) {
        var char = encryptedText[i];
        if (char.match(/[a-z]/i)) {
            var code = encryptedText.charCodeAt(i);
            if (char === char.toLowerCase()) {
                decryptedText += String.fromCharCode(((code - 97 + 26 - shift) % 26) + 97);
            } else {
                decryptedText += String.fromCharCode(((code - 65 + 26 - shift) % 26) + 65);
            }
        } else {
            decryptedText += char;
        }
    }

    document.getElementById("decryptedText").value = decryptedText;
}
