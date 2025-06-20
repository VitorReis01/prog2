const result = document.querySelector('.result')


const playhuman = (humanChoice) => {


    playTheGame(humanChoice, playmachine())

}


const playmachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('humano:' + human + 'maquina:' + machine)

    if (human === machine) {
        result.innerHTML = "deu empate!"
    }
    else if (human === 'paper' && machine === 'rock') || (human === 'scissors' && machine === 'paper') || (human === 'rock' && machine === 'scissors')
    { result.innerHTML = "você ganhou!" }

    else {
    result.innerHTML = "você perdeu para a maquina"
}
}

