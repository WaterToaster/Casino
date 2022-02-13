const main_menu_btn = document.getElementById("main_menu_btn");

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

let onClick = evt =>
{
    window.location.replace("../index.html");
}
main_menu_btn.addEventListener("click", onClick);

