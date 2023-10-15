const verbs = {
    block1: [
        ["cost", "cost", "cost", "coûter"],
        ["cut", "cut", "cut", "couper"],
        ["hit", "hit", "hit", "frapper"],
        ["hurt", "hurt", "hurt", "blesser"],
        ["let", "let", "let", "laisser"],
        ["put", "put", "put", "mettre"],
        ["read", "read", "read", "lire"]
    ],
    block2: [
        ["find", "found", "found", "trouver"],
        ["have", "had", "had", "avoir"],
        ["hear", "heard", "heard", "entendre"],
        ["make", "made", "made", "fabriquer/faire"],
        ["pay", "paid", "paid", "payer"],
        ["say", "said", "said", "dire"],
        ["sell", "sold", "sold", "vendre"],
        ["tell", "told", "told", "dire/raconter"],
        ["understand", "understood", "understood", "comprendre"],
        ["win", "won", "won", "gagner"]
    ],
    // Ajoutez les autres blocs ici
};

let selectedBlocks = [];

function startTest() {
    selectedBlocks.length = 0;

    // Récupérer les blocs sélectionnés
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedBlocks.push(checkbox.value);
    });

    if (selectedBlocks.length > 0) {
        generateTest();
    }
}

function generateTest() {
    const verbListContainer = document.getElementById('verbList');
    verbListContainer.innerHTML = '';

    // Sélectionner 20 verbes aléatoires
    const selectedVerbs = [];
    selectedBlocks.forEach(block => {
        const verbsForBlock = verbs[block];
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * verbsForBlock.length);
            selectedVerbs.push(verbsForBlock[randomIndex]);
        }
    });

    // Générer la grille
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['Base Verbale', 'Prétérit', 'Participe Passé', 'Français'];

    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    selectedVerbs.forEach(verb => {
        const row = document.createElement('tr');
        const forms = [...verb.slice(0, 3), verb[3]]; // Mélanger les formes

        forms.forEach(form => {
            const cell = document.createElement('td');
            cell.textContent = '...'; // Case vide
            cell.dataset.answer = form; // Stocker la réponse correcte
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    verbListContainer.appendChild(table);
    verbListContainer.classList.remove('hidden');
}

function validateAnswer() {
    const answerInputs = document.querySelectorAll('.answer');
    const userAnswers = Array.from(answerInputs).map(input => input.value.trim());
    const correctAnswers = Array.from(answerInputs).map(input => input.dataset.answer.trim());

    for (let i = 0; i < userAnswers.length; i++) {
        const correctionElement = document.createElement('p');
        correctionElement.textContent = `Votre Réponse: ${userAnswers[i]}, Réponse Correcte: ${correctAnswers[i]}`;
        correctionsContainer.appendChild(correctionElement);
    }

    showResults();
}

body {
    margin: 2em;
    background: #f0f0f0;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .check-group {
    background: #fff;
    max-width: 13rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 10, 0.2);
    counter-reset: total;
    counter-reset: checked;
  }
  .check-group > * + * {
    margin-top: 0.75rem;
  }
  .check-group .checkbox {
    counter-increment: total;
  }
  .check-group input[type="checkbox"]:checked {
    counter-increment: checked;
  }
  .check-group__result {
    font-weight: bold;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  .check-group__result:after {
    content: counter(checked) " / " counter(total);
    padding-left: 1ch;
  }
  .checkbox {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .checkbox__input {
    position: absolute;
    width: 1.375em;
    height: 1.375em;
    opacity: 0;
    cursor: pointer;
  }
  .checkbox__input:checked + .checkbox__icon .tick {
    stroke-dashoffset: 0;
  }
  .checkbox__icon {
    width: 1.375em;
    height: 1.375em;
    flex-shrink: 0;
    overflow: visible;
  }
  .checkbox__icon .tick {
    stroke-dasharray: 20px;
    stroke-dashoffset: 20px;
    transition: stroke-dashoffset 0.2s ease-out;
  }
  .checkbox__label {
    margin-left: 0.5em;
  }
  