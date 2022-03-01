const main_menu_btn = document.getElementById("main_menu_btn");
let playercard1 = document.getElementById("playerCard1");
let playercard2 = document.getElementById("playerCard2");
let playercard3 = document.getElementById("playerCard3");
let playercard4 = document.getElementById("playerCard4");
let playercard5 = document.getElementById("playerCard5");
let keepCards = document.getElementById("keepCardsButton");
let startGame = document.getElementById("newgamebutton");
let totalCardsPulled = 0;
let betMoney = myMoney;
let playerBet;
document.getElementById('playerCard1').style.pointerEvents = 'none';
document.getElementById('playerCard2').style.pointerEvents = 'none';
document.getElementById('playerCard3').style.pointerEvents = 'none';
document.getElementById('playerCard4').style.pointerEvents = 'none';
document.getElementById('playerCard5').style.pointerEvents = 'none';
document.getElementById('keepCardsButton').style.pointerEvents = 'none';

var player = {
    cards: [],
};
var deck = {
    totalDeck: [],
    makeDeck: function () {
        var suitArray, rankArray, s, r;
        suitArray = ["Clubs", "Diamonds", "Hearts", "Spades"];
        rankArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        for (s = 0; s < suitArray.length; s += 1) {
            for (r = 0; r < rankArray.length; r += 1) {
                this.totalDeck[s * 13 + r] = {
                    rank: rankArray[r],
                    suit: suitArray[s]
                };
            }
        }
    },
    shuffleDeck: function () {
        var temp, i, rnd;
        for (i = 0; i < this.totalDeck.length; i += 1) {
            rnd = Math.floor(Math.random() * this.totalDeck.length);
            temp = this.totalDeck[i];
            this.totalDeck[i] = this.totalDeck[rnd];
            this.totalDeck[rnd] = temp;
        }
    }
};
deck.makeDeck();
deck.shuffleDeck();
console.log(deck);
console.log(betMoney);

function newGame() {
    reset();
    addCards();
    document.getElementById('newgamebutton').style.pointerEvents = 'none';
    document.getElementById('playerCard1').style.pointerEvents = 'auto';
    document.getElementById('playerCard2').style.pointerEvents = 'auto';
    document.getElementById('playerCard3').style.pointerEvents = 'auto';
    document.getElementById('playerCard4').style.pointerEvents = 'auto';
    document.getElementById('playerCard5').style.pointerEvents = 'auto';
    document.getElementById('keepCardsButton').style.pointerEvents = 'auto';
}
function addCards() {
    player.cards.push(deck.totalDeck[totalCardsPulled])
    totalCardsPulled += 1;
    player.cards.push(deck.totalDeck[totalCardsPulled])
    totalCardsPulled += 1;
    player.cards.push(deck.totalDeck[totalCardsPulled])
    totalCardsPulled += 1;
    player.cards.push(deck.totalDeck[totalCardsPulled])
    totalCardsPulled += 1;
    player.cards.push(deck.totalDeck[totalCardsPulled])
    totalCardsPulled += 1;

    for (let i = 0; i < player.cards.length; i++) {
        switch (i) {
            case 0:
                playercard1.src = "./Cards/"+ player.cards[i].rank + 'Of' + player.cards[i].suit + ".png";
                break;
            case 1:
                playercard2.src = "./Cards/"+ player.cards[i].rank + 'Of' + player.cards[i].suit + ".png";
                break;
            case 2:
                playercard3.src = "./Cards/"+ player.cards[i].rank + 'Of' + player.cards[i].suit + ".png";
                break;
            case 3:
                playercard4.src = "./Cards/"+ player.cards[i].rank + 'Of' + player.cards[i].suit + ".png";
                break;
            case 4:
                playercard5.src = "./Cards/"+ player.cards[i].rank + 'Of' + player.cards[i].suit + ".png";
                break;
            default:
                break;
        }
    }
}
function changePlayerCard1() {
    playercard1.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard1').style.pointerEvents = 'none';
    totalCardsPulled += 1;
}
function changePlayerCard2() {
    playercard2.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard2').style.pointerEvents = 'none';
    totalCardsPulled += 1;
}
function changePlayerCard3() {
    playercard3.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard3').style.pointerEvents = 'none';
    totalCardsPulled += 1;
}
function changePlayerCard4() {
    playercard4.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard4').style.pointerEvents = 'none';
    totalCardsPulled += 1;
}
function changePlayerCard5() {
    playercard5.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard5').style.pointerEvents = 'none';
    totalCardsPulled += 1;
}
function checkWin() {
    
}
function reset() {
    totalCardsPulled = 0;
    player.cards = [];
    deck.makeDeck();
    deck.shuffleDeck();
}

let onClick = evt =>
{
    window.location.replace("../index.html");
}
main_menu_btn.addEventListener("click", onClick);