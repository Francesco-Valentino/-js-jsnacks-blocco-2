let sameLength = false

function checkLength(firstWord, secondWord){
    if (firstWord.length === secondWord.length){
        sameLength = true;
        console.log(firstWord);
        console.log(secondWord);
        console.log("Same length!");
    } else if (firstWord.length < secondWord.length){
        console.log(secondWord);
        console.log("The second word was longer.");
    } else {
        console.log(firstWord);
        console.log("The first word was longer.")
    }
}

const firstTyped = prompt("Type first word");

const secondTyped = prompt("Type second word");

checkLength(firstTyped, secondTyped);