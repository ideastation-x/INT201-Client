function changeCalculator(order, pay) {
    let changeResult = {}
    let key = [500, 100, 50, 20, 10, 5, 2, 1]
    if (order >= pay) return -1
    change = pay - order
    for (k of key) {
        changeResult[k] = Math.floor(change / k)
        change %= k
    }
    return changeResult
}

console.log(changeCalculator(385, 1000))
