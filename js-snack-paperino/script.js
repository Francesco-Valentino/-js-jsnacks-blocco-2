let untidyArray = ["pIppO", "paPERino", "minnie", "PLUTO", "GAMbadileGNO", "clarabella", "macchiANERa", "basettoni", "ORAZIO", "eTABeta"];

let tidyArray = [];

untidyArray.forEach((name, index) => {
  const firstLetter = name.charAt(0).toUpperCase();

  const otherLetters = name.slice(1).toLowerCase();
  
  tidyArray.push(firstLetter + otherLetters);
});

console.log(tidyArray);