const main_menu_btn = document.getElementById("main_menu_btn");
let playercard1 = document.getElementById("playerCard1");
let playercard2 = document.getElementById("playerCard2");
let playercard3 = document.getElementById("playerCard3");
let playercard4 = document.getElementById("playerCard4");
let playercard5 = document.getElementById("playerCard5");
let keepCards = document.getElementById("keepCardsButton");
let startGame = document.getElementById("newgamebutton");
let WinLoseMessage = document.getElementById("WinLoseMessage");
let totalCardsPulled = 0;
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
        var pointValue = 0;
        var suitArray, rankArray, s, r;
        suitArray = ["Clubs", "Diamonds", "Hearts", "Spades"];
        rankArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        for (s = 0; s < suitArray.length; s += 1) {
            pointValue = 0
            for (r = 0; r < rankArray.length; r += 1) {
                pointValue++;
                this.totalDeck[s * 13 + r] = {
                    rank: rankArray[r],
                    suit: suitArray[s],
                    points: pointValue
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
console.log("Money Available: " + myMoney);

function newGame() {
    WinLoseMessage.innerHTML = " ";
    reset();
    addCards();
    makeBet();
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
    totalCardsPulled += 1;
    player.cards[0] = deck.totalDeck[totalCardsPulled];
    playercard1.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard1').style.pointerEvents = 'none';
}
function changePlayerCard2() {
    totalCardsPulled += 1;
    player.cards[1] = deck.totalDeck[totalCardsPulled];
    playercard2.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard2').style.pointerEvents = 'none';
}
function changePlayerCard3() {
    totalCardsPulled += 1;
    player.cards[2] = deck.totalDeck[totalCardsPulled];
    playercard3.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard3').style.pointerEvents = 'none';
}
function changePlayerCard4() {
    totalCardsPulled += 1;
    player.cards[3] = deck.totalDeck[totalCardsPulled];
    playercard4.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard4').style.pointerEvents = 'none';
}
function changePlayerCard5() {
    totalCardsPulled += 1;
    player.cards[4] = deck.totalDeck[totalCardsPulled];
    playercard5.src = "./Cards/"+ deck.totalDeck[totalCardsPulled].rank + 'Of' + deck.totalDeck[totalCardsPulled].suit + ".png";
    document.getElementById('playerCard5').style.pointerEvents = 'none';
}
function checkWin() {
    document.getElementById('keepCardsButton').style.pointerEvents = 'none';
    document.getElementById('playerCard1').style.pointerEvents = 'none';
    document.getElementById('playerCard2').style.pointerEvents = 'none';
    document.getElementById('playerCard3').style.pointerEvents = 'none';
    document.getElementById('playerCard4').style.pointerEvents = 'none';
    document.getElementById('playerCard5').style.pointerEvents = 'none';
    player.cards.sort((a, b) => {
        return b.points - a.points;
    })
    player.cards.reverse();
    console.log(player.cards);
    //Royal Flush Check
    if ((player.cards[0].rank == 10 || player.cards[0].rank == "J" || player.cards[0].rank == "Q" || player.cards[0].rank == "K" || player.cards[0].rank == "A") && 
        (player.cards[1].rank == 10 || player.cards[1].rank == "J" || player.cards[1].rank == "Q" || player.cards[1].rank == "K" || player.cards[1].rank == "A" && player.cards[1].rank !==  player.cards[0].rank) &&
        (player.cards[2].rank == 10 || player.cards[2].rank == "J" || player.cards[2].rank == "Q" || player.cards[2].rank == "K" || player.cards[2].rank == "A" && player.cards[2].rank !==  player.cards[1].rank && player.cards[2].rank !==  player.cards[0].rank) &&
        (player.cards[3].rank == 10 || player.cards[3].rank == "J" || player.cards[3].rank == "Q" || player.cards[3].rank == "K" || player.cards[3].rank == "A" && player.cards[3].rank !==  player.cards[2].rank && player.cards[3].rank !==  player.cards[1].rank && player.cards[3].rank !==  player.cards[0].rank) &&
        (player.cards[4].rank == 10 || player.cards[4].rank == "J" || player.cards[4].rank == "Q" || player.cards[4].rank == "K" || player.cards[4].rank == "A" && player.cards[4].rank !==  player.cards[3].rank && player.cards[4].rank !==  player.cards[2].rank && player.cards[4].rank !==  player.cards[1].rank && player.cards[4].rank !==  player.cards[0].rank) &&
        (player.cards[0].suit == player.cards[1].suit && player.cards[0].suit == player.cards[2].suit && player.cards[0].suit == player.cards[3].suit && player.cards[0].suit == player.cards[4].suit))
        {
        WinLoseMessage.innerHTML = "Congratulations You Have A Royal Flush";
        myMoney = myMoney + (playerBet*100000);
    }
    //Straight Flush Check
    else if (player.cards[0].points + 1 == player.cards[1].points && player.cards[1].points + 1 == player.cards[2].points && player.cards[2].points + 1 == player.cards[3].points && player.cards[3].points + 1 == player.cards[4].points &&
            (player.cards[0].suit == player.cards[1].suit && player.cards[0].suit == player.cards[2].suit && player.cards[0].suit == player.cards[3].suit && player.cards[0].suit == player.cards[4].suit)) 
            {
        WinLoseMessage.innerHTML = "Congratulations You Have A Straight Flush";
        myMoney = myMoney + (playerBet*10000);
    }
    // //Four of a kind Check
    else if ((player.cards[0].rank == player.cards[1].rank && player.cards[0].rank == player.cards[2].rank && player.cards[0].rank == player.cards[3].rank) ||
             (player.cards[1].rank == player.cards[2].rank && player.cards[1].rank == player.cards[3].rank && player.cards[1].rank == player.cards[4].rank) ||
             (player.cards[2].rank == player.cards[3].rank && player.cards[2].rank == player.cards[4].rank && player.cards[2].rank == player.cards[0].rank) ||
             (player.cards[3].rank == player.cards[4].rank && player.cards[3].rank == player.cards[0].rank && player.cards[3].rank == player.cards[1].rank) ||
             (player.cards[4].rank == player.cards[0].rank && player.cards[4].rank == player.cards[1].rank && player.cards[4].rank == player.cards[2].rank))
             {
        WinLoseMessage.innerHTML = "Congratulations You Have Four of a kind";
        myMoney = myMoney + (playerBet*1000);
    }
    // //Full house CHeck
    else if (((player.cards[0].rank == player.cards[1].rank && player.cards[0].rank == player.cards[2].rank) && (player.cards[3].rank == player.cards[4].rank)) ||
             ((player.cards[0].rank == player.cards[1].rank && player.cards[0].rank == player.cards[4].rank) && (player.cards[2].rank == player.cards[3].rank)) ||
             ((player.cards[0].rank == player.cards[1].rank && player.cards[0].rank == player.cards[3].rank) && (player.cards[2].rank == player.cards[4].rank)) ||
             ((player.cards[0].rank == player.cards[3].rank && player.cards[0].rank == player.cards[2].rank) && (player.cards[1].rank == player.cards[4].rank)) ||
             ((player.cards[0].rank == player.cards[4].rank && player.cards[0].rank == player.cards[2].rank) && (player.cards[1].rank == player.cards[3].rank)) ||
             ((player.cards[3].rank == player.cards[1].rank && player.cards[3].rank == player.cards[2].rank) && (player.cards[0].rank == player.cards[4].rank)) ||
             ((player.cards[4].rank == player.cards[1].rank && player.cards[4].rank == player.cards[2].rank) && (player.cards[0].rank == player.cards[3].rank)) ||
             ((player.cards[0].rank == player.cards[3].rank && player.cards[0].rank == player.cards[4].rank) && (player.cards[1].rank == player.cards[2].rank)) ||
             ((player.cards[1].rank == player.cards[3].rank && player.cards[1].rank == player.cards[4].rank) && (player.cards[0].rank == player.cards[2].rank)) ||
             ((player.cards[2].rank == player.cards[3].rank && player.cards[2].rank == player.cards[4].rank) && (player.cards[0].rank == player.cards[1].rank))) {
        WinLoseMessage.innerHTML = "Congratulations You Have A Full House";
        myMoney = myMoney + (playerBet*100);
    }
    // //Flush Check
    else if (player.cards[0].suit == player.cards[1].suit && player.cards[0].suit == player.cards[2].suit && player.cards[0].suit == player.cards[3].suit && player.cards[0].suit == player.cards[4].suit &&
            !(player.cards[0].points + 1 == player.cards[1].points && player.cards[1].points + 1 == player.cards[2].points && player.cards[2].points + 1 == player.cards[3].points && player.cards[3].points + 1 == player.cards[4].points)) 
            {
        WinLoseMessage.innerHTML = "Congratulations You Have A Flush";
        myMoney = myMoney + (playerBet*50);
    }
    // //Straight Check
    else if (player.cards[0].points + 1 == player.cards[1].points && player.cards[1].points + 1 == player.cards[2].points && player.cards[2].points + 1 == player.cards[3].points && player.cards[3].points + 1 == player.cards[4].points) {
        WinLoseMessage.innerHTML = "Congratulations You Have A Straight";
        myMoney = myMoney + (playerBet*25);
    }
    // //Three of a kind Check
    else if ((player.cards[0].rank == player.cards[1].rank && player.cards[0].rank == player.cards[2].rank) ||
             (player.cards[1].rank == player.cards[2].rank && player.cards[1].rank == player.cards[3].rank) ||
             (player.cards[2].rank == player.cards[3].rank && player.cards[2].rank == player.cards[4].rank) ||
             (player.cards[3].rank == player.cards[4].rank && player.cards[3].rank == player.cards[1].rank) ||
             (player.cards[0].rank == player.cards[1].rank && player.cards[0].rank == player.cards[3].rank) ||
             (player.cards[0].rank == player.cards[1].rank && player.cards[0].rank == player.cards[4].rank) ||
             (player.cards[0].rank == player.cards[2].rank && player.cards[0].rank == player.cards[3].rank) ||
             (player.cards[0].rank == player.cards[2].rank && player.cards[0].rank == player.cards[4].rank) ||
             (player.cards[1].rank == player.cards[2].rank && player.cards[1].rank == player.cards[4].rank) ||
             (player.cards[1].rank == player.cards[3].rank && player.cards[1].rank == player.cards[4].rank)) 
             {
        WinLoseMessage.innerHTML = "Congratulations You Have Three of a kind";
        myMoney = myMoney + (playerBet*10);
    }
    // //Two pair Check
    else if ((player.cards[0].rank == player.cards[1].rank && player.cards[2].rank == player.cards[3].rank) ||
             (player.cards[0].rank == player.cards[1].rank) && (player.cards[2].rank == player.cards[4].rank) ||
             (player.cards[0].rank == player.cards[1].rank) && (player.cards[3].rank == player.cards[4].rank) ||
             (player.cards[0].rank == player.cards[2].rank) && (player.cards[3].rank == player.cards[4].rank) ||
             (player.cards[1].rank == player.cards[2].rank) && (player.cards[3].rank == player.cards[4].rank)) {
        WinLoseMessage.innerHTML = "Congratulations You Have 2 Pairs";
        myMoney = myMoney + (playerBet*5);
    }
    // //Pair Check
    else if ((player.cards[0].rank == player.cards[1].rank) ||
             (player.cards[0].rank == player.cards[2].rank) ||
             (player.cards[0].rank == player.cards[3].rank) ||
             (player.cards[0].rank == player.cards[4].rank) ||
             (player.cards[1].rank == player.cards[2].rank) ||
             (player.cards[1].rank == player.cards[3].rank) ||
             (player.cards[1].rank == player.cards[4].rank) ||
             (player.cards[2].rank == player.cards[3].rank) ||
             (player.cards[2].rank == player.cards[4].rank) ||
             (player.cards[3].rank == player.cards[4].rank)) 
             {
        WinLoseMessage.innerHTML = "Congratulations You Have A Pair";
        myMoney = myMoney + (playerBet*1);
    }
    else{
        WinLoseMessage.innerHTML = "You Lose";
        myMoney = myMoney - playerBet;
        if (myMoney <= 0) {
                alert("You Have Run Out Of Money, Returning To Home Page...");
                window.location.replace("../index.html");
        }
    }
    document.getElementById('newgamebutton').style.pointerEvents = 'auto';
}
function reset() {
    totalCardsPulled = 0;
    player.cards = [];
    deck.makeDeck();
    deck.shuffleDeck();
    console.log("Money Available: " + myMoney);
}
function makeBet() {
    document.getElementById('playerCard1').style.pointerEvents = 'none';
    document.getElementById('playerCard2').style.pointerEvents = 'none';
    document.getElementById('playerCard3').style.pointerEvents = 'none';
    document.getElementById('playerCard4').style.pointerEvents = 'none';
    document.getElementById('playerCard5').style.pointerEvents = 'none';
    document.getElementById('keepCardsButton').style.pointerEvents = 'none';
    document.getElementById('newgamebutton').style.pointerEvents = 'none';
    do {
        playerBet = prompt("Enter Bet Amount...Cannot exceed withdrawn money. Withdrawn money: " + myMoney);
    } while (playerBet <= 0 || playerBet > myMoney);
    console.log("Player Bets: " + playerBet);
}
let onBackClick = evt =>
{
    window.location.replace("../index.html");
}
main_menu_btn.addEventListener("click", onBackClick);