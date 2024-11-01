/* variabili:

- punteggio giocatore
- punteggio computer
- carta, forbice, sasso (array o oggetti)

- id per selezionare i punti in cui scrivere i risultati

- evento per click dei pulsanti

- logica per la giocata del computer

- logica per comparare la mia scelta a quella del computer
  - aggiornare i contatori dei punteggi
  - scrivere la mia scelta
  - scrivere la scelta del computer
  - scrivere l'esito */

let playerScore = 0;
let computerScore = 0;
let choices = {
  sasso: {
    sasso: "pareggio",
    carta: "sconfitta",
    forbici: "vittoria"
  },
  carta: {
    sasso: "vittoria",
    carta: "pareggio",
    forbici: "sconfitta"
  },
  forbici: { 
    sasso: "sconfitta",
    carta: "vittoria",
    forbici: "pareggio"
  }
}

let playerSpan = document.getElementById("playerScore");
let computerSpan = document.getElementById("computerScore");

let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");

let result = document.getElementById("result");

function checker(input){
  let computerChoices = ["sasso", "carta", "forbici"];
  // Assegno al computer un elemento a caso dell'array
  let computerChoose = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  // Scrivo le scelte di utente e computer nella pagina html
  playerChoice.innerHTML = input;
  computerChoice.innerHTML = computerChoose;
  // Attraverso l'oggetto choices prendendo la scelta dell'utente e quella del computer
  switch(choices[input][computerChoose]){
    case("vittoria"):
    result.innerHTML = "Hai vinto";
    playerScore++;
    playerSpan.innerHTML = playerScore;
    result.classList.remove("draw", "lose");
    result.classList.add("win");
    break;
    case("sconfitta"):
    result.innerHTML = "Hai perso";
    computerScore++;
    computerSpan.innerHTML = computerScore;
    result.classList.remove("win", "draw");
    result.classList.add("lose");
    break;
    case("pareggio"):
    result.innerHTML = "Pareggio";
    result.classList.remove("lose", "win");
    result.classList.add("draw");
    break;
  }
}