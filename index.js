 let count = 0

let countEl = document.getElementById('count-el')
console.log(countEl)

function increment(){
    count = count + 1
    countEl.innerText = count
}

function save(){
    let saveEl = ""
    saveEl += count + " - "
    document.getElementById('save-el').innerText += " " + saveEl
    console.log(count)
    count = 0
    countEl.innerText = count
}

