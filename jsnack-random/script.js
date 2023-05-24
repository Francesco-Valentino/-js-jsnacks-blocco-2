function generateRandomNumber(minimumNumber, maximumNumber){
    const randomNumber = Math.floor(Math.random() * (maximumNumber - minimumNumber +1) + minimumNumber);

    return randomNumber;
}

function generateUniqueNumbers(minNum, maxNum, elements){
    let myNumbers = [];

    if((maxNum - minNum) < elements){
        return [];
    }

    while(myNumbers.length < elements){
        const randomUniqueNumber = generateRandomNumber(minNum, maxNum);

        if(!myNumbers.includes(randomUniqueNumber)){
            myNumbers.push(randomUniqueNumber);
        }
    }

    console.log(myNumbers);
}

generateUniqueNumbers(1, 5, 4);