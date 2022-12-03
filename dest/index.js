"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BOX_COUNT = 3;
const color_1 = require("./color");
var COLOR_BOX_COUNT = 5;
var COLOR_CELL_COUNT = 3;
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
    div.style.background = "red";
    div.style.width = "200px";
    div.style.height = "300px";
    div.style.float = "left";
    div.style.marginLeft = "20px";
    return div;
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
function createCell(element) {
    for (let i = 0; i < COLOR_BOX_COUNT; i++) {
        var cell = initCell(i);
        initColors(cell);
        element.appendChild(cell);
    }
}
function initColors(element) {
    var answer = [], couter = 0;
    while (couter < color_1.colors.length) {
        var randomIndex = Math.floor(Math.random() * color_1.colors.length);
        var randomItem = color_1.colors[randomIndex];
        if (!answer.some(s => s.colorName == randomItem.colorName)) {
            answer.push(randomItem);
            couter++;
        }
        console.log(randomItem);
    }
    console.log("Answer : " + answer);
}
if (typeof window !== 'undefined') {
    initBox();
}
else {
    console.log("Compiler done please run this app inside an browser");
}
