//2.2
function registerCredit(semester, year, credit) {
    let allRegsiter = {}
    allRegsiter.semester = semester
    allRegsiter.year = year
    allRegsiter.credit = credit
    return allRegsiter
}
console.log(registerCredit('1', '2563', 10))

//2.3
function calGrade(gradeNumber) {
    switch (gradeNumber) {
        case 4:
            return 'A'
        case 3.5:
            return 'B+'
        case 3:
            return 'B'
        case 2.5:
            return 'C+'
        case 2:
            return 'C'
        case 1.5:
            return 'D+'
        case 1:
            return 'D'
        case 0:
            return 'F'
        default:
            return 'Fa'
    }
}
console.log(calGrade(4))
