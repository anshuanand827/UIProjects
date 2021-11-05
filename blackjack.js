let cards = []
let sum = 0
hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el').innerText
let cardsEl = document.querySelector('#cards-el').innerText
let player = {
    playerName: "Anshu",
    playerChips: 145,
    // sayHello: function(){
    //     console.log("Howdy!")
    // }
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.playerName + ": $" + player.playerChips

function getRandomCard(){
    
    let num = Math.floor(Math.random() * 13)
   
    if(num === 1)
        return 11
    else if(num > 10)
        return 10
    else
        return num
        
}

function startGame(){
    isAlive = true
    let firstCard = Math.floor(Math.random() * 13)
    let secondCard = Math.floor(Math.random() * 13)
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}
function renderGame(){
    
    document.getElementById('cards-el').textContent = "Cards: "
    
    for(let i = 0; i < cards.length; i++)
        document.getElementById('cards-el').textContent += cards[i] + " "

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
    
}
function newCard(){

    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}

