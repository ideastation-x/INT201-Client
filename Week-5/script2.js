
let quest = {
    id: 1,
    quest: 'what is it'
};

class Question {
    constructor(id, question = undefined) {
        this._id = id;
        this._question = question == undefined || null ? 'unknown' : question;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get question() {
        return this._question;
    }

    set question(question) {
        console.log("This is setter Question");
        this._question = question;
    }

    displayQuestion() {
        return `id: ${this._id}, question: ${this._question}`;
    }

    getQuestLength() {
        return this._question.length();
    }
}

let quest1 = new Question(1);
console.log(quest1);