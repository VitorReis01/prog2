const result = document.querySelector('.result')
const scoreHuman = document.querySelector('#score-human')
const scoreMachine = document.querySelector('#score-machine')

let scoreHumanNumber = 0
let scoreMachineNumber = 0

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
        result.innerHTML = "deu empate! affff  &#x1F62B;"
    }
    else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'rock' && machine === 'scissors')



    ) {
        scoreHumanNumber++
        scoreHuman.innerHTML = scoreHumanNumber
        result.innerHTML = "você ganhou! 'fez mais que sua obrigação!!! &#x1F644;"
        scoreHumanNumber === 20 && scoreMachineNumber < 20, result.innerHTML = "parabens você esta batendo na maquina &#x1F633;"

    else {
        scoreMachineNumber++
        scoreMachine.innerHTML = scoreMachineNumber
        result.innerHTML = "você perdeu para a maquina &#x1F92A;"
        scoreMachineNumber === 20 && scoreHumanNumber < 20, result.innerHTML = "a maquina esta ta dando uma surra &#x1F923; "

    }



}





