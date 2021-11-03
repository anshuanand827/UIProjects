let firstCard = 10
let secondCard = 1
let cards = [firstCard, secondCard]
let hasBlackJack = false
// let sum = firstCard + secondCard
let sum = cards[0] + cards[1]
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el').innerText
// let sumEl = document.querySelector('#sum-el').innerText
let cardsEl = document.querySelector('#cards-el').innerText

function startGame(){
    renderGame()
}
function renderGame(){
    if(sum <= 20){
        message = 'Do you want to draw a new card?'
    }else if(sum === 21){
        message = "Woohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = 'You are out of the game!'
        isAlive = false
    }   
    messageEl.textContent = message
    document.getElementById('sum-el').textContent = sumEl + " " + sum
    document.getElementById('cards-el').textContent = cardsEl + " " + firstCard + " " + secondCard
}
function newCard(){
    let card = 1
    sum += card
    renderGame()
}

