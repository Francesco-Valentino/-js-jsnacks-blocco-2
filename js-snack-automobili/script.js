let cars = [
 {
    marca: "Nissan",
    modello: "Micra",
    alimentazione: "benzina"
 },   

 {
    marca: "Opel",
    modello: "Mokka",
    alimentazione: "diesel"
 },   

 {
    marca: "Peugeot",
    modello: "306",
    alimentazione: "benzina"
 },   

 {
    marca: "Reanult",
    modello: "Clio",
    alimentazione: "metano"
 },   

 {
    marca: "Fiat",
    modello: "500e",
    alimentazione: "elettrica"
 },   

 {
    marca: "Mercedes",
    modello: "Classe E",
    alimentazione: "diesel"
 },   

 {
    marca: "Fiat",
    modello: "Panda",
    alimentazione: "metano"
 },   

 {
    marca: "Opel",
    modello: "Astra",
    alimentazione: "metano"
 },   

 {
    marca: "Tesla",
    modello: "Cybertruck",
    alimentazione: "elettrica"
 },   

 {
    marca: "Nissan",
    modello: "Armada",
    alimentazione: "diesel"
 },   

 {
    marca: "Volkswagen",
    modello: "Polo",
    alimentazione: "gpl"
 },   

 {
    marca: "Volkswagen",
    modello: "Golf",
    alimentazione: "diesel"
 },  

 {
    marca: "Nissan",
    modello: "Skyline",
    alimentazione: "benzina"
 },   

 {
    marca: "Ford",
    modello: "Prefect",
    alimentazione: "preghiere"
 },   

 {
    marca: "Fiat",
    modello: "Multipla",
    alimentazione: "diesel"
 }   
]

for (let i = 0; i < cars.length; i++){
    if (cars[i].alimentazione === "benzina"){
        console.log(cars[i]);
    }
}

const otherCars = cars.filter(element => element.alimentazione !== "benzina" && element.alimentazione !== "diesel")

console.log(otherCars);