// Challenge 1: Reverse the string
// Return the string in reverse
//ex. reverseString('Hello') === 'olleH'

const reverseString = (str) => {
    // return str.split('').reverse().join('')
    // let revString = ''
    // for(i = str.length - 1; i >= 0; i --){
    //     revString = revString + str[i]
    // }
    // return revString

    // let revString = ''
    // for (let char of str){
    //     revString = char + revString
    // }
    // return revString 

    // let revString = ''
    // str.split('').forEach(char => revString = char + revString)
    // return revString

    return str.split('').reduce((revString,char) => char + revString , '')

}

// Challenge 2: Validate the palidrome
// Return true if palidrome and false if not
// ex. isPalindrome('racecar') === 'true' , isPalindrome
// ('hello') == false

const isPalindrome = (str) => {
    const result = str.split('').reverse().join('')

    if (result == str){
        return true 
    }else {
        return false
    }
}

// Challenge 3: Reverse an Integer
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = (num) => {
    let result = num.toString().split('').reverse().join('')
    return parseInt(result) * Math.sign(num)
}


//Chanllege 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
//ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

const capitalizedLetters = (str) =>{
    // let strArr = str.toLowerCase().split(' ')

    // for (i=0; i<strArr.length; i++){
    //     strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1)
    // }

    // return strArr.join(' ')

    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ')
} 

//CHallenge 5: Max Character
//Return the character that is most common in a string
//ex. maxCharacter('javascript')=='a'
const maxCharacter = (str) => {
    const charMap = {}
    let maxNum = 0
    let maxChar = ''

    str.split('').forEach(char => {
        if (charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    })
    for (let char in charMap){
        if (charMap[char] > maxNum){
            maxNum = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}


//Chanllenge 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz" . for number which are multiple of both 3 and 5 , print "FizzBuzz".

const fizzBuzz = () => {
    for (i = 1 ; i <= 100 ; i++){
        if (i %3 === 0 && i%5 === 0){
            console.log("Fizz")
        }else if (i % 3 === 0){
            console.log("Buzz")
        }else if (i %5 === 0 ){
            console.log("FizzBuzz")
        }else{
            console.log(i)
        }
    }
}

let str = fizzBuzz()
console.log(str)