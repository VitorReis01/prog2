const cart = [10, 244, 99, 2, 20, 33]

let discount = 0
let total = 0

for (const value of cart) {
    if (value > 30) {
        discont = discont + calcularDesconto(value, 10)
        total = total + value
    } else {
        total = total + value
    }

    console.log(o valor de suas compras é R$ ${ total }, Você teve compras acima de R$30,00 e recebeu desconto de R$ ${ discont.tofixed(2) }Então o valor a pagar é R$ $ {(total - discont).toFixed(2)}.  )

function calcularDesconto(value, percentual) {
    return value * percentual / 100
}



}