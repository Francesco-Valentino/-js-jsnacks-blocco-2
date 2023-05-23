function createDOMElement(tagName, className){
    const liElement = document.createElement(tagName);
    
    liElement.className = className;
    
    return liElement;
}

const ulElement = document.getElementById("toDoList");

for (let i = 0; i < 10; i++){
    const activeLi = createDOMElement("li", "listItem");

    ulElement.appendChild(activeLi);

    activeLi.append("code today")
}