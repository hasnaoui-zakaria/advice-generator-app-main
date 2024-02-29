const adviceId = document.getElementById('advice_id')
const adviceText = document.getElementById('advice')
const diceBtn = document.getElementById('dice')

const url = "https://api.adviceslip.com/advice/";

fetch(url + Math.floor((Math.random() * 224) + 1))
        .then(res => res.json())
        .then(data => {
            adviceId.innerText = data.slip.id
            adviceText.innerText = data.slip.advice
        })


diceBtn.addEventListener('click', () => {
    fetch(url + Math.floor((Math.random() * 224) + 1))
        .then(res => res.json())
        .then(data => {
            adviceId.innerText = data.slip.id
            adviceText.innerText = data.slip.advice
        })
})