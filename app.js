let playerone = true
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')


const newGame = document.querySelector('#newGame')
const reset = document.querySelector('#reset')
const resText = document.querySelector('#resText')
const wining = document.querySelector('.wining')
const form = document.querySelector('.form')
const form2 = document.querySelector('.form2')
const player1Name = document.querySelector('#player1Name')
const player2Name = document.querySelector('#player2Name')
const player1Submit = document.querySelector('#player1Submit')
const player2Submit = document.querySelector('#player2Submit')
const firstPlayer = document.querySelector('#firstPlayer')
const secondPlayer = document.querySelector('#secondPlayer')
const rollandHold = document.querySelector('.rollandHold')
let Player1CurScore = document.querySelector('#Player1CurScore')
let Player2CurScore = document.querySelector('#Player2CurScore')
let player1TotScore = document.querySelector('#player1TotScore')
let player2TotScore = document.querySelector('#player2TotScore')
currentScore1 = 0
currentScore2 = 0
TotalScore1 = 0
TotalScore2 = 0

const rollDies = document.querySelector('#rollDies')
const Dies = document.querySelector('#Dies').firstElementChild
firstPlayer.classList.add('style')
// NewGame Function
newGame.addEventListener('click', () => {
    form.style.top = "16rem"
    wining.style.visibility = "hidden"
    resText.textContent = "RESET"
})

reset.addEventListener('click', () => {
    wining.style.visibility = "hidden"
    player1.style.visibility = "visible"
    player2.style.visibility = "visible"
    rollandHold.style.visibility = "visible"
    resText.textContent = "RESET"
    // reset.children[2].textContent = "RESET"
    player1TotScore.textContent = 0
    player2TotScore.textContent = 0
    currentScore1 = 0
    currentScore2 = 0
    TotalScore1 = 0
    TotalScore2 = 0
    newGame.style.display = "none"
})
// PlayerOne Name Function
player1Submit.addEventListener('click', () => {
    if (player1Name.value == "") {
        alert("Enter Name Please")
    }
    else {
        firstPlayer.textContent = player1Name.value
        player1Name.value = ""
        form.style.top = "-16rem"
        form2.style.top = "16rem"
        player1.style.visibility = "visible"
    }
})
// PlayerTwo Name Function
player2Submit.addEventListener('click', () => {
    if (player2Name.value == "") {
        alert("Enter Name Please")
    }
    else {
        secondPlayer.textContent = player2Name.value
        player2Name.value = ""
        form2.style.top = "-16rem"
        player2.style.visibility = "visible"
        rollandHold.style.visibility = "visible"
        newGame.style.display = "none"
        reset.style.visibility = "visible"
    }
})
// Roll Dies Function
rollDies.addEventListener('click', () => {
    random = Math.ceil(Math.random() * 6)
    Dies.src = `./Assets/Images/${random}.png`
    Dies.classList.add('animat')
    setTimeout(()=>{
        Dies.classList.remove('animat')
    },1000)
    
    let audio = new Audio('./Assets/Audio/dice-142528.mp3')
    audio.play()
    if (random == 1) {
        if (playerone) {
            playerone = false
            Player1CurScore.textContent = 0
            currentScore1 = 0
            firstPlayer.classList.remove('style')
            secondPlayer.classList.add('style')
        }
        else {
            Player2CurScore.textContent = 0
            playerone = true
            currentScore2 = 0
            secondPlayer.classList.remove('style')
            firstPlayer.classList.add('style')
        }
    }
    else {
        if (playerone) {
            Player1CurScore.textContent = currentScore1 += random

        }
        else {
            Player2CurScore.textContent = currentScore2 += random
        }
    }
    // console.log(Player1CurScore.textContent)

})
// Hold Function
hold.addEventListener('click', () => {
    if (playerone) {
        player1TotScore.textContent = TotalScore1 += +Player1CurScore.textContent
        Player1CurScore.textContent = 0
        playerone = false
        Dies.src = ""
        currentScore1 = 0
        firstPlayer.classList.remove('style')
        secondPlayer.classList.add('style')
        if (TotalScore1 >= 50) {
            wining.style.visibility = "visible"
            wining.firstElementChild.textContent = `${firstPlayer.textContent} Has Won`
            player1.style.visibility = "hidden"
            player2.style.visibility = "hidden"
            rollandHold.style.visibility = "hidden"
            resText.textContent = "PLAY AGAIN"
            player1TotScore.textContent = 0
            player2TotScore.textContent = 0
            currentScore1 = 0
            currentScore2 = 0
            TotalScore1 = 0
            TotalScore2 = 0
            // alert("hello")
            newGame.style.display = "flex"
            let winingAudio = new Audio('./Assets/Audio/JKL83NH-video-game-win.mp3')
            winingAudio.play()
        }
    }
    else {
        player2TotScore.textContent = TotalScore2 += +Player2CurScore.textContent
        Player2CurScore.textContent = 0
        playerone = true
        Dies.src = ""
        currentScore2 = 0
        secondPlayer.classList.remove('style')
        firstPlayer.classList.add('style')
        if (TotalScore2 >= 50) {
            wining.style.visibility = "visible"
            wining.firstElementChild.textContent = `${secondPlayer.textContent} Has Won`
            player1.style.visibility = "hidden"
            player2.style.visibility = "hidden"
            rollandHold.style.visibility = "hidden"
            resText.textContent = "PLAY AGAIN"
            player1TotScore.textContent = 0
            player2TotScore.textContent = 0
            currentScore1 = 0
            currentScore2 = 0
            TotalScore1 = 0
            TotalScore2 = 0
            newGame.style.display = "flex"
            let winingAudio = new Audio('./Assets/Audio/JKL83NH-video-game-win.mp3')
            winingAudio.play()
        }
    }
})

// if(playerone){
//     firstPlayer.classList.add('style')
// }
// else{
//     secondPlayer.classList.add('style')
// }

