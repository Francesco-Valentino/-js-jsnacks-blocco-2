const randomNumber = Math.floor(Math.random() * 100 + 1);

console.log(randomNumber);

let inputNumber;

let playerTries = [];

//devo ripetere la domanda FINCHE' randomNumber è uguale a inputNumber
while (inputNumber !== randomNumber){
    if (inputNumber < randomNumber){
        playerTries.push(inputNumber)
        console.log("The right number is greater.")
    } else if (inputNumber> randomNumber){
        playerTries.push(inputNumber)
        console.log("The right number is smaller.")
    }

    inputNumber = parseInt(prompt("Insert a number."))
}

if (randomNumber === inputNumber && playerTries.length === 0){
    console.log("You found the number!");
} else if (inputNumber === randomNumber){
    console.log("You found the number!")
    console.log("You have tried " + playerTries.length + " times.")
} 