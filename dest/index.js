"use strict";
var BOX_COUNT = 3;
var COLOR_BOX_COUNT = 5;
var COLOR_CELL_COUNT = 3;
var CODES;
(function (CODES) {
    CODES["Red"] = "#FF0000";
    CODES["Blue"] = "#0000ff";
    CODES["Green"] = "#00FF00";
})(CODES || (CODES = {}));
const colors = [
    { colorCode: CODES.Red, colorName: "Red" },
    { colorCode: CODES.Green, colorName: "Green" },
    { colorCode: CODES.Blue, colorName: "Blue" }
];
var mainBox = document.getElementById("mainBox");
function initBox() {
    if (!mainBox) {
        return;
    }
    for (var i = 0; i < BOX_COUNT; ++i) {
        var box = createBox(i);
        createCell(box);
        mainBox === null || mainBox === void 0 ? void 0 : mainBox.appendChild(box);
    }
}
function createBox(id) {
    var div = document.createElement("div");
    div.id = id.toString();
    // div.style.background = "red";
    div.style.width = "200px";
    div.style.height = "300px";
    div.style.float = "left";
    div.style.marginLeft = "20px";
    return div;
}
function createCell(element) {
    var addedColors = [];
    for (let i = 0; i < COLOR_BOX_COUNT; i++) {
        var cell = initCell(i);
        initColors(cell, addedColors, i);
        element.appendChild(cell);
    }
}
function initCell(id) {
    var div = document.createElement("div");
    div.id = id.toString();
    div.style.width = "100%";
    div.style.height = `${(100 / COLOR_BOX_COUNT) - 5}%`;
    div.style.border = "solid 1px black";
    div.style.marginTop = "10px";
    return div;
}
function initColors(cell, addedColors, currIndex) {
    var isDone = false;
    if (currIndex < COLOR_CELL_COUNT - 1) {
        cell.style.backgroundColor = "white";
    }
    else {
        while (!isDone) {
            var randomIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0);
            console.log(randomIndex);
            var randomItem = colors[randomIndex];
            if (!addedColors.some(s => s.colorName == randomItem.colorName)) {
                addedColors.push(randomItem);
                isDone = true;
                console.log("color: " + randomItem.colorCode);
                cell.style.backgroundColor = `${randomItem.colorCode}`;
            }
        }
    }
}
if (typeof window !== 'undefined') {
    initBox();
}
else {
    console.log("Compiler done please run this app inside an browser");
}
