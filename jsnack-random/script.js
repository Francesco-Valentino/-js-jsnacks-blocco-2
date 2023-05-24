let myNumbers = [];

let randomNumber;

function generateNumber(){
    for (let i = 0; i < 4; i++){
        randomNumber = Math.floor(Math.random() * 5 + 1);
        
        if (myNumbers[i] !== randomNumber){
            myNumbers.push(randomNumber);
        }
    }

console.log(myNumbers);
}

generateNumber();