function changeCalculator(order, pay) {
    let changeMoney = {}
    let moneyType = ['B500', 'B100', 'B50', 'B20', 'B10', 'B5', 'B2', 'B1']
    let moneyValue = [500, 100, 50, 20, 10, 5, 2, 1]
    if (order >= pay) return -1
    change = pay - order
}

console.log(changeCalculator(500, 1000))
