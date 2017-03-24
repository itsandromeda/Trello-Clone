/*global document, window, console*/
/*globals random_num, $ */
var container = document.getElementById("container"),
    addListBtn = document.getElementById("add-a-list-btn"),
    saveListBtn = document.getElementById("save-list-btn"),
    saveListBox = document.getElementById("save-list-box"),
    //addACardBtn = document.createElement("div"),
    listInputBox = document.getElementById("list-input-box"),
    
    //cardsList = document.createElement("div"),  
    //addCardBtn = document.createElement("button"),
    //newCardNode = document.createTextNode("Add a card..."),
    //newCard = document.createElement("a"),
    //cardContainer = document.createElement("textarea"),
    //newAddCardBtn = document.createTextNode("Add"),
    //newCardTitleNode = document.createTextNode(cardContainer.value),
    textValue;
    //form = document.getElementById("form");

function addList() {
    "use strict";    
    saveListBox.style.display = "inline-block";
    addListBtn.style.display = "none";
}

function createList(textValue) {
    "use strict";
    if (textValue) {
        var parentDiv = document.createElement("div"),
            listTitle = document.createElement("div"),
            newTextNode = document.createTextNode(textValue),
            addCardLink = document.createElement("a"),
            addText = document.createTextNode("Add a card...");
        
        //<a>Add a card...</a>
        //<div class="fa fa-ellipsis-h" style="font-size:12px;color:white"></div> ... icono
        addCardLink.setAttribute("href", "#");
        addCardLink.appendChild(addText);
        parentDiv.setAttribute("class", "add-a-card-btn");
        listTitle.setAttribute("class", "text");
        listTitle.appendChild(newTextNode);
        parentDiv.style.cssFloat = "left";
        parentDiv.style.display = "inline-block";

        container.insertBefore(parentDiv, addListBtn); 
        saveListBox.style.display = "inline-block";
        parentDiv.appendChild(listTitle);
        parentDiv.appendChild(addCardLink);
        listInputBox.value = "";
    }
}

window.addEventListener("load", function () {
    "use strict";
    addListBtn.addEventListener("click", function () {
        addList();
    });
    
    saveListBtn.addEventListener("click", function () {
        textValue = listInputBox.value;
        createList(textValue);
    });
});