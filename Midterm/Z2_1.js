// Class Student สำหรับสร้าง Object Student
class Student {
    constructor(id, name) {
        this._id = id // รหัสนึกศึกษา
        this._name = name // ชื่อนักศึกษา
        this._studySubject = [] // วิชาที่นักศึกษาลงไว้ท้งหมด
    }
    setSemester(subject) {
        this._studySubject.push[subject] // วิชาที่นักศึกษาต้องการจะลง
    }
    // แสดง ID, NAME, วิชาที่ลงทะเบียนไว้
    getOverAll() {
        return `${this._id} ${this._name} ${this._studySubject}`
    }
}

// Class Semester สำหรับสร้าง Object Semester ที่เก็บ Subject ไว้แต่ละเทอม
class Semester {
    constructor(semester, year, allSubject) {
        this._semester = semester // เทอม
        this._year = year // ปีการศึกษา
        this._allSubject = allSubject // วิชาทั้งหมดในแต่ละเทอม
    }
}

// Class Subject ไว้สร้าง Object วิชาต่าง ๆ
class Subject {
    constructor(id, subject, credit) {
        this._id = id // รหัสวิขา
        this._subject = subject // ชื่อวิชา
        this._credit = credit // หน่วยกิต
    }
}

// สร้าง Subject ในแต่ละเทอม
let GEN101 = new Subject('GEN101', 'Physical Education', 3)
let GEN121 = new Subject('GEN121', 'Learning And Problem Solving Skill', 2)
let INT100 = new Subject('INT100', 'Information Technology Fundamentals', 2)
let INT101 = new Subject('INT101', 'Programming Fundamentals', 3)
let INT102 = new Subject('INT102', 'Web Technology', 3)
let INT114 = new Subject('INT114', 'Discrete Mathematics', 3)
let LNG220 = new Subject('LNG220', 'Academic English', 1)

// นำ Subject ไปใส่ไว้ใน semester2021 โดยมี Subject ตามที่ได้สร้างไว้
let semester2021 = new Semester(1, 2563, [
    GEN101,
    GEN121,
    INT100,
    INT101,
    INT102,
    INT114,
    LNG220,
])

let student1 = new Student('63130500094', 'Phumin') // สร้าง Object Student
student1.setSemester(semester2021) // นำ semester2021 ที่ได้สร้างไว้ เป็นการลงทะเบียนของนักศึกษา
console.log(student1.getOverAll()) // แสดงผลลัพธ์ทั้งหมดของนึกศึกษา
