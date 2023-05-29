let giocatore = {
    codice: getID(3),
    nome: "Carlo",
    cognome: "Soffici",
    età: 29,
    mediPuntiPerPartita: 25,
    percentualeSuccesso: "50%",
    stoppate: 15,
    tiri: 60, 
}

function getID(lettersNumber) {
    let playerID = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let index = 0;
    while (index < lettersNumber) {
      playerID += characters.charAt(Math.floor(Math.random() * charactersLength));
      index += 1;
    }
    return playerID;
}

function getRandomInt(minNumber, maxNumber){
    const randomInt = Math.floor( Math.random() * (maxNumber - minNumber + 1) + minNumber);

    return randomInt;
}
