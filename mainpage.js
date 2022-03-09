//The main guys money, steal from this main js page for your own respective games
myMoney = 100; //We can change whatever this is later :/

const poker_btn = document.getElementById("poker_btn");
const blackjack_btn = document.getElementById("blackjack_btn");
const craps_btn = document.getElementById("craps_btn");
const roulette_btn = document.getElementById("roulette_btn");

let onClick = evt =>
{
    if (evt.target.id == "poker_btn") {
        window.location.replace("Poker/poker.html");
    }
    else if (evt.target.id == "blackjack_btn") {
        window.location.replace("Blackjack/BJView.html");
    }
    else if (evt.target.id == "craps_btn") {
        window.location.replace("Craps/craps.html");
    }
    else if (evt.target.id == "roulette_btn") {
        window.location.replace("Roulette/Roulette.html");
    }
}

poker_btn.addEventListener("click", onClick);
blackjack_btn.addEventListener("click", onClick);
craps_btn.addEventListener("click", onClick);
roulette_btn.addEventListener("click", onClick);