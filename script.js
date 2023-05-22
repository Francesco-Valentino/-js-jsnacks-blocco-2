/* function checkLength(firstWord, secondWord){
    if (firstWord.length === secondWord.length){
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

checkLength(firstTyped, secondTyped); */

const firstWord = prompt ("Type first word");

const secondWord = prompt ("Type second word");

if (checkLength(firstWord, secondWord)){
    console.log(firstWord);
    console.log(secondWord);
    console.log("Same length");
} else if (firstWord.length > secondWord.length){
    console.log(firstWord);
    console.log("The first word is longer")
} else{
    console.log(secondWord);
    console.log("The second word is longer")
}

function checkLength(firstWord, secondWord){
    if (firstWord.length === secondWord.length){
        return true;
    }
}