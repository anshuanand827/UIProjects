let num1 = 8
let num2 = 9

document.getElementById('num1-el').innerText = num1
document.getElementById('num2-el').innerText = num2

function add(){
    let sum = num1 + num2
    document.getElementById('sum-el').innerText = 'Sum:'+sum
}
function multiply(){
    let sum = num1 * num2
    document.getElementById('sum-el').innerText = 'Product:'+sum
}
function divide(){
    let sum = num1 / num2
    document.getElementById('sum-el').innerText = 'Quotient:'+sum
}
function subtract(){
    let sum = num1 - num2
    document.getElementById('sum-el').innerText = 'Sum:'+sum
}