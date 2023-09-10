class Card{
    constructor(rank, suit){
        this.suit = suit
        this.rank = rank
    }
}

class Deck{
    constructor(){
        this.cards = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        const suits = ['C', 'S', 'D', 'H']

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit))
            }
        }
    }
    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--){
            const shuffle = Math.floor(Math.random() * (i * 1));
            [this.cards[i], this.cards[shuffle]] = [this.cards[shuffle], this.cards[i]]
        }
    }
    dealToPlayer() {
        const player1Hand = this.cards.slice(0, 26);
        const player2Hand = this.cards.slice(26);
        return [player1Hand, player2Hand]
    }
}

class CardGame{
    constructor() {
        this.deck = new Deck();
        this.deck.shuffle();
        this.players = this.deck.dealToPlayer();
        this.player1Score = 0;
        this.player2Score = 0
    }
    play() {
        for (let i = 0; i < 26; i++){
            const player1Card = this.players[0][i];
            const player2Card = this.players[1][i]

            if (player1Card.rank > player2Card.rank){
                this.player1Score++;
            }else if (player1Card.rank < player2Card.rank){
                this.player2Score++;
            }
        }
    }
    declareWinner(){
        if (this.player1Score > this.player2Score){
            return 'Player 1 is the winner'
        }else if (this.player1Score < this.player2Score){
            return 'Player 2 is the winner'
        }else{
            return 'It looks like it is a tie'
        }
    }
}


const game = new CardGame();
game.play();
console.log(game.declareWinner())



