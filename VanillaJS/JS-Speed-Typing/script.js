const RANDOM_URL_API_QUOTE = 'https://dummyjson.com/quotes/random'
const quoteDisplayElement  = document.getElementById('quoteDisplay')
const quoteInputElement    = document.getElementById('quoteInput')
const timerElement         = document.getElementById('timer')

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct = true
    arrayQuote.forEach((characterSpan,index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        }else if (character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })
    if (correct) renderNewQuote()
})

const getRandomQuote = async () => {
    try {
        const response = await fetch (RANDOM_URL_API_QUOTE)
        const data = await response.json()
        return data.quote
    }catch (error) {
        console.error('Error fetching quote:',error)
        return 'Failed to fetch quote'
    }
}

const renderNewQuote = async () => {
    const quote = await getRandomQuote() 
    quoteDisplayElement.innerText = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
    startTimer()
}
let startTime
const startTimer = () => {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    },1000)
}
const getTimerTime = () => {
    return Math.floor((new Date() - startTime) / 1000 )
}

renderNewQuote()