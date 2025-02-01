
var levels = {
    easy : 5,
    medium : 3,
    hard : 2
}
var currentLevel = levels.medium

var time = currentLevel
var score = 0
var isPlaying 

// DOM Elements
var wordInput = document.querySelector('#word-input')
var currentWord = document.querySelector('#current-word')
var scoreDisplay = document.querySelector('#score')
var timeDisplay = document.querySelector('#time')
var message = document.querySelector('#message')
var seconds = document.querySelector('#seconds')

var words = [
    'hat','river','lucky','statue','generate','stubborn','cocktail','runaway','joke','developer','establishment','hero','javascript','nutrition','revolver','echo','siblings','investigate','horrendous','sympton','laughter','magic','master','space','definition'
]

//Initialize init
var init = () => {

    seconds.innerHTML = currentLevel
    //Load word from array
    showWord(words)
    wordInput.addEventListener('input',startMatch)

    setInterval(countdown,1000)
    setInterval(checkStatus,50)
}
var startMatch = () => {
    if (matchWords()){
        isPlaying = true
        time = currentLevel + 1
        showWord(words)
        wordInput.value = ''
        score++
    }
    if (score === -1){
        scoreDisplay.innerHTML = 0
    }else{
        scoreDisplay.innerHTML = score
    }

}
var matchWords = () => {
    if (wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!'
        return true
    }else {
        message.innerHTML = ''
        return false
    }
}
var showWord = (words) => {
    const randIndex = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randIndex]
}

var countdown = () => {
    if (time > 0){
        time--
    }else if (time === 0){
        isPlaying = false
    }
    timeDisplay.innerHTML = time 
}

var checkStatus = () => {
    if (!isPlaying && time === 0){
        message.innerHTML = 'Gave Over!!!'
        score = -1
    }
}

document.addEventListener('DOMContentLoaded',init)