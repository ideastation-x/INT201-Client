class Students {
    constructor(id, name) {
        this._id = id
        this._name = name
    }
    getSemester(semester, year) {}
}

class Semester {
    constructor(semester, year) {
        this._semester = semester
        this._year = year
        this._subject = new Subject()
    }
}

class Subject {
    constructor(id, subject, credit) {
        this._id = id
        this._subject = subject
        this._credit = credit
    }
    getGrade() {}
}

class overall {}

Students(1, 'phumin')
Semester(1, 2021)
