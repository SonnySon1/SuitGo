// Score
let playerScore = 0;
let computerScore = 0;
let totalGame = 1;

// pilihan computser
function getComputerChoices() {
    const computerChoices = Math.random();
    if (computerChoices < 0.34)  return "batu";
    if(computerChoices >= 0.36 && computerChoices < 0.67) return "gunting"
    return "kertas"
}

// pilihan player
const playerChoices = document.querySelectorAll('#arena-player div img');
for (let index = 0; index < playerChoices.length; index++) {
    const p = playerChoices[index];
    p.addEventListener('click', function () {
        const playerChoices = p.id;
        const computerChoices = getComputerChoices();

        const result = getRuls(playerChoices, computerChoices);

        if (result == "MENANG") {
            playerScore++;
            document.getElementById('player-score').textContent = playerScore;
        }
        else{
            computerScore++;
            document.getElementById('computer-score').textContent = computerScore;
        }

        document.getElementById('total-game').textContent = totalGame++;
        document.getElementById('info').textContent = result;
        document.getElementById('computer-choice').setAttribute('src', '../assets/'+computerChoices+'.png');
        document.getElementById('player-choice').setAttribute('src', '../assets/'+playerChoices+'.png');
    })
}


// get ruls
function getRuls(playerChoices, computerChoices) {
    if (playerChoices == computerChoices) return "SERI";
    if(playerChoices == "batu") return (computerChoices == "guning" ? "MENANG" : "KALAH");
    if(playerChoices == "gunting") return (computerChoices == "kertas" ? "MENANG" : "KALAH");
    if(playerChoices == "kertas") return (computerChoices == "batu" ? "MENANG" :  "KALAH");
    return "memasukan pilihan yang salah"
}