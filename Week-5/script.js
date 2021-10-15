const quest1 = {
    id: 1,
    question: 'What is your name'
};

delete quest1.question;
console.log(quest1);

let quest2 = { id: 2, question: 'Where are you?' };
quest2 = quest1; //assign value -> memory address
console.log(`quest2 : ${quest2}`)

quest1.id = 3;
quest1.question = 'What is it';
console.log(quest1);

//#1 independent variables, all are array
let quests = ['What is your name', 'Where are you'];
let answers = ['Umaporn', 'at home'];

//#2 array of objects
//easy iterate all items under a single variable
let quest3 = [
    { id: 1, question: 'What is your name?', answer: 'Umaporn' },
    { id: 2, question: 'Where are you?', answer: 'at home' }
];

//#3 one object, each property stores with array
let quest4 = {
    ids: [1, 2],
    quests: ['What is your name', 'Where are you?'],
    answers: ['Umaporn', 'at home']
}