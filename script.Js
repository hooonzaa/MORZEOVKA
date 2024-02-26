const Morzeovkaaa = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    'Á': '.--.-', 'Č': '-.-..', 'Ď': '-..-.', 'É': '..-..', 'Ě': '..-..', 'Ň': '--.--', 'Ó': '---.', 'Ř': '.-.-.', 'Š': '...-', 'Ť': '-..-', 'Ú': '..--', 'Ů': '..-.', 'Ý': '-.--.', 'Ž': '--..-',
    ' ': '...'       };

const ReverseMorseCode = Object.fromEntries(
    Object.entries(Morzeovkaaa).map(([key, value]) => [value, key])
);

function toMorse() {
    const normaalText = document.getElementById("normalttt").value.toUpperCase();
    const morsee = normaalText.split('').map(char => Morzeovkaaa[char] || char).join(' ');
    document.getElementById("morseovkaaa").value = morsee;
}

function toNormal() {
    const morseeCode = document.getElementById("morseovkaaa").value.trim().split(/\s+/);
    const normall = morseeCode.map(code => ReverseMorseCode[code] || code).join('');
    document.getElementById("normalttt").value = normall;
}