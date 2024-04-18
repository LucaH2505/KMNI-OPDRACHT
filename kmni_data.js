const fs = require('fs');

function loadKNMIData(filePath) {
    try {
        // het bestand lezen
        const data = fs.readFileSync(filePath, 'utf8');

        // gegevens splitten per regel
        const lines = data.split('\n');

        // regels filteren
        const filteredLines = lines.filter(line => line.trim() !== '' && !line.startsWith('#'));

        return filteredLines;
    } catch (error) {
        console.error('er was een fout bij het laden van het kmni bestand:', error);
        return null;
    }
}

function displayKNMIData(data) {
    data.forEach(line => {
        console.log(line);
    });
}

const filePath = 'bron.txt';
const knmiData = loadKNMIData(filePath);

if (knmiData) {
    displayKNMIData(knmiData);
}
