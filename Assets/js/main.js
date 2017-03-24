/*global document, window, console*/
/*globals random_num, $ */
var container = document.getElementById("container"),
    addListBtn = document.getElementById("add-a-list-btn"),
    saveListBtn = document.getElementById("save-list-btn"),
    saveListBox = document.getElementById("save-list-box"),
    listInputBox = document.getElementById("list-input-box"),
    textValue;

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
            title = document.createElement("div"),
            dotIcon = document.createElement("a"),
            newTextNode = document.createTextNode(textValue),
            addCardLink = document.createElement("a"),
            addText = document.createTextNode("Add a card...");
        
        parentDiv.setAttribute("class", "add-card-container");
        dotIcon.setAttribute("class", "fa fa-ellipsis-h ellipsis");
        title.setAttribute("contenteditable", "true");
        title.setAttribute("class", "text");
        title.appendChild(newTextNode);
        listTitle.appendChild(dotIcon);
        listTitle.setAttribute("class", "list-title");
        listTitle.appendChild(title);
        addCardLink.setAttribute("href", "#");
        addCardLink.setAttribute("class", "add-card");
        addCardLink.appendChild(addText);
        parentDiv.style.cssFloat = "left";
        parentDiv.style.display = "inline-block";
        parentDiv.appendChild(listTitle);
        parentDiv.appendChild(addCardLink);
        container.insertBefore(parentDiv, addListBtn);
        addListBtn.style.display = "inline-block";
        saveListBox.style.display = "none";
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