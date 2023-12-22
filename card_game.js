const prompt = require("prompt-sync")();

const choices = ["Plante", "Eaux", "Feux"];
let userScore = 0; //Score de l'utilisateur
let computerScore = 0; //Score de l'IA
let rounds = 3; //Nombre de manche pendant le jeu

/**
 * @function compChoise
 * @returns any
 */
function compChoise(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
/**
 * @function determineWinner
 * @param {any} userChoice 
 * @param {any} computerChoise 
 * @returns any
 */
function determineWinner(userChoice, computerChoise){
    if(userChoice === computerChoise){
        return "Égalité entre vous deux";
    }else if(
        (userChoice === "Eaux" && computerChoise === "Feux") ||
        (userChoice === "Plante" && computerChoise === "Eaux") ||
        (userChoice === "Feux" && computerChoise === "Plante")){
            userScore++;
            return "Vous avez gagné cette manche";
        }else{
            computerScore++;
            return "Votre adversaire avez gagné cette manche";
        }
    }
    /**
     * @function game
     */
    function game(){
                        console.log(" _______________________________________________");
                        console.log("|                   CARD GAME                   |");
                        console.log("|-----------------------------------------------|");
                        console.log("|                  Menu du Jeu                  |");
                        console.log("|///////////////////////////////////////////////|");
                        console.log("|                   1. JOUER                    |");
                        console.log("|                   2. Guide du jeu             |");
                        console.log("|///////////////////////////////////////////////|");
                        console.log("|_______________________________________________|");
    }
    /**
     * @function nameOfPlayer
     */
    function nameOfPlayer(){
        game();
        let user = +prompt("Veillez entrer votre choix : ");
        if(user === 1){
            console.log("Bienvenu dans Card Game");
        let askUserName = prompt("Avant de commencer, veuillez entrer les noms d'utilisateurs que vous préferez : ");
        console.log(`Heureux de vous connaître ${askUserName}, débutons la partie maintenant!`);
    }else if(user === 2){
        console.log("Bienvenu dans le guide du jeu de cartes");
    console.log('Vous avez 3 manches dans une partie et vous disposez 3 cartes différentes entre vos mains,');
    console.log("A chaque manche, vous avez le droit de choisir votre carte parmi les trois existant que ce soit vous ou");
    console.log("votre adversaire; votre score s'afficherez à chaque fin de la manche ainsi que le carte utilise vous et ");
    console.log("votre adversaire. Si vous avez 2 manches au moins vous avez gagné mais si l'adversaire a gagné au moins 2");
    console.log("victoires, vous avez perdu. Si pendant la partie, il y a 1 victoire et 2 nulle, le joueur qui a une victoire gagnera");
    console.log("Quand vous avez choisi votre premier carte votre adversaire avez choisi automatiquement aussi");
    console.log("Il suffit donc de bien concentré carte et de mieux choisir votre carte pour détruire votre adversaire");
    console.log("choissez bien votre carte afin de battre votre adversaire. Amusez-vous bien!");
    }
    game();
    user = +prompt("Veillez entrer votre choix : ");
}
    nameOfPlayer();

/**
 * @function MenuOfTheGame
 */
function MenuOfTheGame(){
                        console.log("_________________________________________________________________");
                        console.log("|                         Règle du jeu                           |");
                        console.log("|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|");
                        console.log("|                  Vous avez 3 cartes disponibles :              |");
                        console.log("|                         1. Plante                              |");
                        console.log("|                         2. Eaux                                |");
                        console.log("|                         3. Feux                                |");
                        console.log("|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |");
                        console.log("|                         4. Quitter le jeu                      |");
                        console.log("|________________________________________________________________|");
}

/**
 * @function playRound
 */
function playRound(){
    MenuOfTheGame();

    const userChoiceIndex = parseInt(prompt("Faites votre choix : "));
    
    if(userChoiceIndex >= 1 && userChoiceIndex <= 3){
        const userChoice = choices[userChoiceIndex - 1];
        const computerChoise = compChoise();
        const result = determineWinner(userChoice, computerChoise);

        console.log(`Vous avez choisi ${userChoice}, l'adversaire a choisi ${computerChoise}, ${result}`);
        console.log(`Score actuel - Vous: ${userScore}, Votre adversaire: ${computerScore}`);
        rounds--;

        if(rounds > 0){
            playRound();
        }else{
            console.log('Fin du jeu');
            if(userScore > computerScore){
                console.log('Vous avez gagné la partie!');
            }else if(computerScore > userScore){
                console.log('Votre adversaire a gagné la partie.');
            }else{
                console.log('La partie est nulle');
            }
        }
    }else if(userChoiceIndex === 4){
        console.log('Partie interrompue.');
        console.log("Merci d'avoir jouer et consulter nos jeu!");
    }else{
        console.log("Choix invalide. Veillez choisir entre 1 et 3, ou 4 pour quitter");
        playRound();
    }
}

console.log('Vous avez 3 manches dans une partie et vous disposez 3 cartes différentes entre vos mains,');
console.log("choissez bien votre carte afin de battre votre adversaire. Amusez-vous bien!");
playRound();