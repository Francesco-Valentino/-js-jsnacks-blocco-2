let peperoni = [
    {
        peso: 100,
        lunghezza: 19,
        varietà: "rosso"
    },

    {
        peso: 60,
        lunghezza: 15,
        varietà: "friggitello"
    },

    {
        peso: 180,
        lunghezza: 20,
        varietà: "giallo"
    },

    {
        peso: 30,
        lunghezza: 6,
        varietà: "habanero"
    },

    {
        peso: 500,
        lunghezza: 46,
        varietà: "goliath"
    }
]

let pesoTotale = 0;

for (let i = 0; i < peperoni.length; i++){
    pesoTotale += peperoni[i.peso];
}

console.log(pesoTotale);