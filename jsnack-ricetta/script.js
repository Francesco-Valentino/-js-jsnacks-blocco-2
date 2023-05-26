let ingredientsListInput = [];

let ingredientInput = document.getElementById("userIngredientInput");

document.getElementById("addIngredientInputButton").addEventListener("click", function(){
    ingredientsListInput.push(ingredientInput.value);
    let listItem = document.createElement("li");
    listItem.innerHTML = ingredientInput.value;
    document.getElementById("ingredientsList").appendChild(listItem);
    ingredientInput.value = "";
})

/* document.getElementById("generateMealInputButton").addEventListener("click", function(){
    
}) */

console.log(ingredientsListInput);