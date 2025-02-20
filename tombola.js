// Genera il tabellone con i numeri da 1 a 76
const boardContainer = document.getElementById("board");
let drawnNumbers = [];

// Crea 76 celle per il tabellone
for (let i = 1; i <= 76; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = i;
  boardContainer.appendChild(cell);
}

// Funzione per estrarre un numero casuale
function drawNumber() {
  // Trova un numero che non è stato ancora estratto
  let number;
  do {
    number = Math.floor(Math.random() * 76) + 1;
  } while (drawnNumbers.includes(number));

  drawnNumbers.push(number);

  // Evidenzia la cella corrispondente al numero estratto
  const cellToHighlight = Array.from(boardContainer.children).find(
    (cell) => cell.textContent == number
  );
  cellToHighlight.classList.add("highlight");

  console.log(`Numero estratto: ${number}`);
}

// Aggiungi l'evento per il bottone di estrazione
document.getElementById("drawButton").addEventListener("click", drawNumber);
