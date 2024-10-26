const words = ["JAVASCRIPT", "HTML", "CSS", "GITHUB", "CODING"];
const gridSize = 10;
let grid = [];
let wordList = document.getElementById("wordList");

// Função para criar a grade e exibir as palavras
function createGrid() {
    const gridElement = document.getElementById("grid");

    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText = randomLetter();
            grid[i][j] = cell;
            gridElement.appendChild(cell);
        }
    }
    addWordsToGrid();
    displayWords();
}

function randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.charAt(Math.floor(Math.random() * letters.length));
}

function addWordsToGrid() {
    words.forEach(word => {
        let row = Math.floor(Math.random() * gridSize);
        let col = Math.floor(Math.random() * (gridSize - word.length));

        for (let i = 0; i < word.length; i++) {
            grid[row][col + i].innerText = word[i];
            grid[row][col + i].dataset.word = word;
        }
    });
}

function displayWords() {
    words.forEach(word => {
        let listItem = document.createElement("li");
        listItem.innerText = word;
        wordList.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", createGrid);