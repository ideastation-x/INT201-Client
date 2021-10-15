let VAT = 0.07 // global variable (let)

// priceWithVat - global function
function priceWithVat(price) {
    return price * VAT + price
}

function getPrice(price) {}

console.log(priceWithVat(100))
