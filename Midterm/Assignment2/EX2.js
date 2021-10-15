function randomDice() {
    roll = () => Math.floor(Math.random() * 6) + 1
}

function playGame(gameDice, p1, p2, rounds) {
    let p1Result = 0
    let p2Result = 0
    for (let i = 0; i < rounds; i++) {
        p1.diceNumber = dice.roll()
        p2.diceNumber = dice.roll()
        if (p1.diceNumber[i] > p2.diceNumber[i]) {
            p1.results = 'WIN'
            p2.results = 'LOSE'
            p1Result++
        }
    }
}

p1 = {
    name: 'A',
    diceNumber: [],
    results: [],
}

p2 = {
    name: 'B',
    diceNumber: [],
    results: [],
}

console.log(playGame(randomDice, p1, p2, 3))
