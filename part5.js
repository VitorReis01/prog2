const cart = [10, 244, 99, 2, 20, 33, 250]
const valuetotal = [10, 244, 99, 2, 20, 33, 250]
let finalvalue = 0
let totalvalue = 0

valuetotal.forEach(value2 => {
    totalvalue += value2

});

function CalculateDiscount(price, discount) {
    const result = (price * discount) / 100

    return result

}

CalculateDiscount(33, 10)




cart.forEach((value) => {

    if (value > 30) {
        const discount = CalculateDiscount(value, 10)
        finalvalue = finalvalue + (value - discount)

    }
    else { finalvalue += value }




});

console.log(`o valor final da sua compra foi de R$ ${totalvalue} porém você teve desconto de 10% e pagara sómente R$ ${finalvalue}`)
