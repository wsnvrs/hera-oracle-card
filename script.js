const cards = [];

for(let i = 1; i <= 20; i++){

    cards.push(`cards/Kartu ${i}.png`);

}

let deck = [];

/* SHUFFLE */

function shuffleDeck(){

    deck = [...cards];

    for(let i = deck.length - 1; i > 0; i--){

        const j =
        Math.floor(Math.random() * (i + 1));

        [deck[i], deck[j]] =
        [deck[j], deck[i]];
    }

}

/* BUKA DECK */

function openDeck(){

    shuffleDeck();

    document.getElementById("cover").style.display =
    "none";

    drawCard();

}

/* DRAW CARD */

function drawCard(){

    if(deck.length === 0){

        shuffleDeck();

    }

    document.getElementById("result").style.display =
    "none";

    document.getElementById("loading").style.display =
    "block";

    setTimeout(() => {

        document.getElementById("loading").style.display =
        "none";

        document.getElementById("result").style.display =
        "block";

        const card =
        deck.pop();

        document.getElementById("card").src =
        card;

    },1000);

}