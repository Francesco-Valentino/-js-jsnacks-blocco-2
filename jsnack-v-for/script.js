const {createApp} = Vue;

createApp({
    data(){
        return{
            elements: ["air", "earth", "wind", "fire"],
        }
    }
}).mount("#app");