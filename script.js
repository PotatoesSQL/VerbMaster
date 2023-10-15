const verbs = {
    block1: [
        ["cost", "cost", "cost", "coûter"],
        ["cut", "cut", "cut", "couper"],
        // Ajoutez les autres verbes pour le bloc 1 ici
    ],
    block2: [
        ["find", "found", "found", "trouver"],
        ["have", "had", "had", "avoir"],
        // Ajoutez les autres verbes pour le bloc 2 ici
    ],
    // Ajoutez les autres blocs ici
};

let currentQuestionIndex = 0;
let score = 0;

function getRandomVerb(bloc) {
    const verbsForBlock = verbs[bloc];
    const randomIndex = Math.floor(Math.random() * verbsForBlock.length);
    return verbsForBlock[randomIndex];
}

function generateQuestion(bloc) {
    const verb = getRandomVerb(bloc);
    const questionForm = Math.floor(Math.random() * 3); // 0: BV, 1: Préterit, 2: Participe Passé

    let question;
    switch (questionForm) {
        case 0:
            question = `Base Verbale de "${verb[3]}" ?`;
            break;
        case 1:
            question = `Prétérit de "${verb[3]}" ?`;
            break;
        case 2:
            question = `Participe Passé de "${verb[3]}" ?`;
            break;
    }

    return {
        question,
        answer: verb[questionForm],
        frenchTranslation: verb[3]
    };
}

function validateAnswer() {
    const answerInputs = document.querySelectorAll('.answer');
    const userAnswer = answerInputs[currentQuestionIndex].value.trim();
    const correctAnswer = answerInputs[currentQuestionIndex].dataset.answer.trim();
    const frenchTranslation = answerInputs[currentQuestionIndex].dataset.french.trim();

    const correctionElement = document.createElement('p');
    correctionElement.textContent = `FR: ${frenchTranslation}, Votre Réponse: ${userAnswer}, Réponse Correcte: ${correctAnswer}`;
    correctionsContainer.appendChild(correctionElement);

    currentQuestionIndex++;

    if (currentQuestionIndex < answerInputs.length) {
        showNextQuestion();
    } else {
        showResults();
    }
}

function showNextQuestion() {
    const answerInputs = document.querySelectorAll('.answer');
    answerInputs[currentQuestionIndex].parentNode.classList.add('hidden');
    answerInputs[currentQuestionIndex].parentNode.nextElementSibling.classList.remove('hidden');
}

function showResults() {
    const scoreContainer = document.getElementById('scoreContainer');
    scoreContainer.textContent = `Score : ${score} sur ${answerInputs.length}`;
    scoreContainer.classList.remove('hidden');

    correctionsContainer.classList.remove('hidden');
}

document.getElementById('verbForm').addEventListener('submit', function(event) {
    event.preventDefault();

    selectedBlocks.length = 0;

    // Récupérer les blocs sélectionnés
    Array.from(this.elements).forEach(element => {
        if (element.type === 'checkbox' && element.checked) {
            selectedBlocks.push(element.value);
        }
    });

    if (selectedBlocks.length > 0) {
        displayQuestions();
    }
});

function displayQuestions() {
    const verbListContainer = document.getElementById('verbList');
    verbListContainer.innerHTML = '';

    selectedBlocks.forEach(block => {
        const blockNumber = block.match(/\d/)[0];

        for (let i = 0; i < 4; i++) { // Vous avez 20 questions au total
            const question = generateQuestion(block);
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `
                <h2>Question ${i + 1} - Bloc ${blockNumber}</h2>
                <p>${question.question}</p>
                <input type="text" class="answer" data-answer="${question.answer}" data-french="${question.frenchTranslation}">
            `;
            verbListContainer.appendChild(questionElement);
        }
    });

    verbListContainer.classList.remove('hidden');
    showNextQuestion();
}
