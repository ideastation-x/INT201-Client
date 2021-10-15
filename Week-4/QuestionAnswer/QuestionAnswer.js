let questions = [
    {
        question: '1+2=?',
        choices: {
            a: '3',
            b: '5',
            c: '7'
        },
        correctAnswer: 'a'
    },
    {
        question: '4*8=?',
        choices: {
            a: '28',
            b: '32',
            c: '36'
        },
        correctAnswer: 'b'
    },
    {
        question: '7*5-2=?',
        choices: {
            a: '27',
            b: '30',
            c: '33'
        },
        correctAnswer: 'c'
    },
    {
        question: '6/3*4=?',
        choices: {
            a: '4',
            b: '8',
            c: '12'
        },
        correctAnswer: 'b'
    },
    {
        question: '4+6+10=?',
        choices: {
            a: '20',
            b: '55',
            c: '19'
        },
        correctAnswer: 'a'
    }
]

// แสดงข้อสอบและตัวเลือกคำตอบ
for (i = 0; i < questions.length; i++) {
    console.log(`Question ${i + 1}: ${questions[i].question}`);
    for (let j in questions[i].choices) {
        console.log(`${j}: ${questions[i].choices[j]}`);
    }
}
let student = {
    name: 'A',
    chooseQuestion: {

    }
}

function Player {
    constructor(name, answer) {
        this.name = name;
        this.answer = answer;
        this.score = function () {
            let count = 0;
            for (let i = 0; i < this._answer.length; i++) {
                // if () {
                count++;
                // }
            }
            return count;
        };
    }

    toString() {
        return `Name: ${this._name} \nScore: ${this._score}`
    }
}

let p1 = new Player('Benjamin', { 1: 'a', 2: 'b', 3: 'c' });
console.log(p1.toString());
//let p1 = new Player('Benjamin', 1, 'a');
//console.log(p1.playGame());







