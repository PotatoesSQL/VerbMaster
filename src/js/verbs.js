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
        ["make", "made", "made", "faire"],
        ["pay", "paid", "paid", "payer"],
        ["say", "said", "said", "dire"],
        ["sell", "sold", "sold", "vendre"],
        ["tell", "told", "told", "dire"],
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
        ["light", "lit", "lit", "allumer"],
        ["each", "each", "each", "chaque"],
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
        ["ride", "rode", "ridden", "chevaucher"],
        ["see", "saw", "seen", "voir"],
        ["steal", "stole", "stolen", "voler (dérober)"],
        ["take", "took", "taken", "prendre"],
        ["wake", "woke", "woken", "se réveiller"],
        ["write", "wrote", "written", "écrire"]
    ],
    block7: [
        ["draw", "drew", "drawn", "dessiner"],
        ["fly", "flew", "flown", "voler (avion)"],
        ["know", "knew", "known", "savoir/connaître"],
        ["throw", "threw", "thrown", "jeter"]
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

function afficherBloc(bloc) {
    for (let i = 1; i <= 9; i++) {
        const buttonView = document.querySelector(`.button-view${i}`);
        buttonView.classList.add('hidden');
    }

    const verbTableContainer = document.getElementById('blocContainer');
    const verbTableBody = document.getElementById('blocTableBody');
    verbTableContainer.classList.remove('hidden');
    verbTableBody.innerHTML = '';

    const blocTitle = document.querySelector('.blocTitle');
    blocTitle.textContent = `Bloc n°${bloc.charAt(bloc.length - 1)}`; 7
    console.log(verbTableContainer)

    verbs[bloc].forEach(verb => {
        const row = document.createElement('tr');
        verb.forEach(form => {
            const cell = document.createElement('td');
            cell.textContent = form;
            row.appendChild(cell);
        });
        verbTableBody.appendChild(row);
    });
}

function retour() {
    for (let i = 1; i <= 9; i++) {
        const buttonView = document.querySelector(`.button-view${i}`);
        buttonView.classList.remove('hidden');
    }

    const verbTableContainer = document.getElementById('blocContainer');
    verbTableContainer.classList.add('hidden');
}

