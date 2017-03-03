/*global document*/
/*global window*/
/*globals random_num, $ */
var container = document.getElementById("container"),
    addListBtn = document.getElementById("add-a-list-btn"),
    saveListBtn = document.getElementById("save-list-btn"),
    saveListBox = document.getElementById("save-list-box"),
    addACardBtn = document.createElement("div"), //Add a card... button is created
    listInputBox = document.getElementById("list-input-box"),
    newListNode = document.createTextNode(listInputBox.value), //new added lists    
    
    cardsList = document.createElement("div"), //Add a card... button container    
    addCardBtn = document.createElement("button"), //Add a card... button
    newCardNode = document.createTextNode("Add a card..."), //Add a card... button text
    newCard = document.createElement("a"), //Add a card... hyperlink
    cardContainer = document.createElement("textarea"), //card textarea
    newAddCardBtn = document.createTextNode("Add"), //Add button text
    newCardTitleNode = document.createTextNode(cardContainer.value),
    
    form = document.getElementById("form");

function addList() {
    "use strict";
    addListBtn.style.display = "none";
    saveListBox.style.display = "inline-block";
}

function showList() {
    "use strict";
    container.insertBefore(addACardBtn, addListBtn.previousSibling);
    
    saveListBox.style.display = "inline-block"; //save list box steps aside
    addACardBtn.style.cssFloat = "left"; //Add a card... floats left
    addACardBtn.style.display = "inline-block";
    addACardBtn.classList.add("text"); //class "text" for css usage
    addACardBtn.classList.add("add-a-card-btn"); //class "add-a-card-btn" for css usage  
    
    newCard.classList.add("newCard");//class "newCard" for css usage
    newCard.appendChild(newCardNode);
    addACardBtn.appendChild(newCard);
}

window.addEventListener("load", function () {
    "use strict";
    addListBtn.addEventListener("click", function () {
        addList();
    });
    
    saveListBtn.addEventListener("click", function () {
        showList();
        listInputBox.value = "";
    });
});