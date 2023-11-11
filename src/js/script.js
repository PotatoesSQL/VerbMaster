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
        ["make", "made", "made", "fabriquer"],
        ["pay", "paid", "paid", "payer"],
        ["say", "said", "said", "dire"],
        ["sell", "sold", "sold", "vendre"],
        ["tell", "told", "told", "raconter"],
        ["understand", "understood", "understood", "comprendre"],
        ["win", "won", "won", "gagner"]
    ],
    block3: [
        ["build", "built", "built", "construire"],
        ["burn", "burnt", "burnt", "brûler"],
        ["dream", "dreamt", "dreamt", "rêver"],
        ["feel", "felt", "felt", "ressentir"],
        ["get", "got", "got", "obtenir"],
        ["keep", "kept", "kept", "garder"],
        ["learn", "learnt", "learnt", "apprendre"],
        ["leave", "left", "left", "quitter"],
        ["lose", "lost", "lost", "perdre"],
        ["mean", "meant", "meant", "signifier"],
        ["meet", "met", "met", "rencontrer"],
        ["send", "sent", "sent", "envoyer"],
        ["shoot", "shot", "shot", "tirer"],
        ["sit", "sat", "sat", "s'asseoir"],
        ["smell", "smelt", "smelt", "sentir (odeur)"],
        ["sleep", "slept", "slept", "dormir"],
        ["spend", "spent", "spent", "dépenser"]
    ],
    block4: [
        ["bring", "brought", "brought", "apporter"],
        ["buy", "bought", "bought", "acheter"],
        ["catch", "caught", "caught", "attraper"],
        ["fight", "fought", "fought", "se battre"],
        ["teach", "taught", "taught", "enseigner"],
        ["think", "thought", "thought", "penser"]
    ],
    block5: [
        ["begin", "began", "begun", "commencer"],
        ["drink", "drank", "drunk", "boire"],
        ["ring", "rang", "rung", "sonner"],
        ["run", "ran", "run", "courir"],
        ["sing", "sang", "sung", "chanter"],
        ["swim", "swam", "swum", "nager"]
    ],
    block6: [
        ["bite", "bit", "bitten", "mordre"],
        ["break", "broke", "broken", "casser"],
        ["choose", "chose", "chosen", "choisir"],
        ["drive", "drove", "driven", "conduire"],
        ["eat", "ate", "eaten", "manger"],
        ["fall", "fell", "fallen", "tomber"],
        ["forbid", "forbade", "forbidden", "interdire"],
        ["forget", "forgot", "forgotten", "oublier"],
        ["forgive", "forgave", "forgiven", "pardonner"],
        ["freeze", "froze", "frozen", "geler"],
        ["hide", "hid", "hidden", "cacher"],
        ["ride", "rode", "ridden", "monter"],
        ["see", "saw", "seen", "voir"],
        ["steal", "stole", "stolen", "voler"],
        ["take", "took", "taken", "prendre"],
        ["wake", "woke", "woken", "se réveiller"],
        ["write", "wrote", "written", "écrire"]
    ],
    block7: [
        ["draw", "drew", "drawn", "dessiner"],
        ["fly", "flew", "flown", "voler"],
        ["know", "knew", "known", "savoir/connaître"],
        ["throw", "threw", "thrown", "lancer/jeter"]
    ],
    block8: [
        ["become", "became", "become", "devenir"],
        ["come", "came", "come", "venir"],
        ["overcome", "overcame", "overcome", "surmonter"]
    ],
    block9: [
        ["be", "was/were", "been", "être"],
        ["do", "did", "done", "faire"],
        ["go", "went", "gone", "aller"]
    ]
};


document.addEventListener('DOMContentLoaded', function () {
    const buttonStart = document.querySelector('.button-start');
    let attempts = 3; // Nombre d'essais
    let correctAnswersCount = 0; // Compteur de bonnes réponses
    const correctAnswers = []; // Tableau pour stocker les bonnes réponses
    let attemptsRemaining; // Élément pour afficher les tentatives restantes

    buttonStart.addEventListener('click', function () {
        const selectedCheckboxes = document.querySelectorAll('.checkbox__input:checked');

        if (selectedCheckboxes.length > 0) {
            // Les affichages
            const content = document.querySelector('.content');
            content.style.display = 'none';

            const test = document.querySelector('.test');
            test.style.display = 'block';

            // Récupérer les verbes des blocs sélectionnés
            let selectedVerbs = [];
            selectedCheckboxes.forEach(function (checkbox) {
                const value = checkbox.value;
                const blockVerbs = verbs[value];
                selectedVerbs = selectedVerbs.concat(blockVerbs);
            });

            // Mélanger les verbes
            selectedVerbs = selectedVerbs.sort(() => Math.random() - 0.5).slice(0, 20);

            // Créer le tableau avec les verbes aléatoires
            const table = document.createElement('table');
            table.classList.add('verb-table');

            // Créer l'en-tête du tableau
            const headerRow = document.createElement('tr');
            const headers = ['N°', 'Base Verbale', 'Prétérit', 'Participe Passé', 'Français'];
            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.textContent = headerText;
                headerRow.appendChild(header);
            });
            table.appendChild(headerRow);

            // Ajouter les lignes avec une forme connue aléatoire
            selectedVerbs.forEach((verb, index) => {
                const row = document.createElement('tr');

                // Numéro de la ligne
                const numberCell = document.createElement('td');
                numberCell.textContent = index + 1;
                row.appendChild(numberCell);

                const knownFormIndex = Math.floor(Math.random() * verb.length); // Index de la forme connue
                verb.forEach((form, index) => {
                    const cell = document.createElement('td');
                    const input = document.createElement('input');
                    input.setAttribute('type', 'text');
                    input.classList.add('verb-input');
                    input.dataset.correctValue = form; // Stocker la réponse correcte

                    if (index === knownFormIndex) {
                        input.value = form; // Mettre la forme connue dans l'input
                        input.readOnly = true; // Rendre l'input non modifiable
                        input.classList.add('randomized'); // Ajouter une classe pour identifier les cases remplies aléatoirement
                        input.addEventListener('mousedown', function (event) {
                            event.preventDefault(); // Empêcher le clic
                        });
                    }

                    cell.appendChild(input);
                    row.appendChild(cell);
                });
                table.appendChild(row);
            });

            const verbTableContainer = document.getElementById('blocContainer');
            verbTableContainer.innerHTML = '';
            verbTableContainer.appendChild(table);

            // Créer le bouton "Vérifier"
            const verifyButton = document.createElement('button');
            verifyButton.classList.add('button-start');
            verifyButton.textContent = 'Vérifier';
            verifyButton.addEventListener('click', function () {
                attempts--;

                attemptsRemaining.textContent = `Tentatives restantes : ${attempts}`; // Mettre à jour les tentatives restantes

                // Parcourir les cellules et les vérifier
                const cells = document.querySelectorAll('.verb-input:not(.randomized)'); // Ne vérifier que les cases non remplies aléatoirement
                cells.forEach(function (cell) {
                    const inputValue = cell.value;
                    const correctValue = cell.dataset.correctValue;

                    // Comparer les valeurs
                    if (inputValue === correctValue) {
                        cell.style.color = 'green'; // Le verbe est correct
                        cell.parentNode.classList.add('correct');
                        correctAnswersCount++; // Incrémenter le compteur de bonnes réponses
                    } else {
                        cell.style.color = 'red'; // Le verbe est incorrect
                        cell.readOnly = false; // Permettre la modification de la case incorrecte
                    }
                });

                if (correctAnswersCount === 20) {
                    attempts = 0; // Mettre le nombre de tentatives à 0 pour éviter de compter les essais supplémentaires
                    verifyButton.disabled = true; // Désactiver le bouton après 3 essais

                    // Calculer le score et la note
                    let score = (correctAnswersCount / 20) * 100;

                    // Si le score dépasse 100%, le limiter à 100%
                    if (score > 100) {
                        score = 100;
                    }

                    // Afficher le score
                    const scoreElement = document.createElement('div');
                    scoreElement.classList.add('score');
                    scoreElement.textContent = `Score : ${score.toFixed(2)}%`;

                    // Calculer la note sur 20
                    let note = (score / 100) * 20;

                    // Si la note dépasse 20, la limiter à 20
                    if (note > 20) {
                        note = 20;
                    }

                    // Afficher la note
                    const noteElement = document.createElement('div');
                    noteElement.classList.add('note');
                    noteElement.textContent = `Note : ${note.toFixed(2)}/20`;

                    const returnElement = document.createElement('a');
                    returnElement.classList.add('button-start');
                    returnElement.textContent = `Retour`;
                    returnElement.href = '';

                    verbTableContainer.innerHTML = ''; // Effacer le contenu précédent

                    // Ajouter les éléments au conteneur
                    verbTableContainer.appendChild(scoreElement);
                    verbTableContainer.appendChild(noteElement);
                    verbTableContainer.appendChild(returnElement);

                    // Cacher le tableau et le bouton "Vérifier"
                    table.style.display = 'none';
                    verifyButton.style.display = 'none';
                    attemptsRemaining.style.display = 'none';
                } else if (attempts === 0) {
                    verifyButton.disabled = true; // Désactiver le bouton après 3 essais

                    // Calculer le score et la note
                    let score = (correctAnswersCount / 20) * 100;

                    // Si le score dépasse 100%, le limiter à 100%
                    if (score > 100) {
                        score = 100;
                    }

                    // Afficher le score
                    const scoreElement = document.createElement('div');
                    scoreElement.classList.add('score');
                    scoreElement.textContent = `Score : ${score.toFixed(2)}%`;

                    // Calculer la note sur 20
                    let note = (score / 100) * 20;

                    // Si la note dépasse 20, la limiter à 20
                    if (note > 20) {
                        note = 20;
                    }

                    // Afficher la note
                    const noteElement = document.createElement('div');
                    noteElement.classList.add('note');
                    noteElement.textContent = `Note : ${note.toFixed(2)}/20`;

                    const returnElement = document.createElement('a');
                    returnElement.classList.add('button-start');
                    returnElement.textContent = `Retour`;
                    returnElement.href = '';

                    verbTableContainer.innerHTML = ''; // Effacer le contenu précédent

                    // Ajouter les éléments au conteneur
                    verbTableContainer.appendChild(scoreElement);
                    verbTableContainer.appendChild(noteElement);
                    verbTableContainer.appendChild(returnElement);

                    // Cacher le tableau et le bouton "Vérifier"
                    table.style.display = 'none';
                    verifyButton.style.display = 'none';
                    attemptsRemaining.style.display = 'none';
                }
                // Ajouter les réponses correctes au tableau correctAnswers
                cells.forEach(function (cell) {
                    correctAnswers.push(cell.dataset.correctValue);
                });

            });

            // Empêcher la propagation du clic sur les cases du tableau
            table.addEventListener('click', function (event) {
                event.stopPropagation();
            });

            // Afficher le nombre d'essais restants
            attemptsRemaining = document.createElement('div');
            attemptsRemaining.classList.add('attempts-remaining');
            attemptsRemaining.textContent = `Tentatives restantes : ${attempts}`;
            verbTableContainer.appendChild(attemptsRemaining);

            verbTableContainer.appendChild(verifyButton);

        } else {
            alert('Veuillez sélectionner au moins un bloc.');
        }
    });
});
