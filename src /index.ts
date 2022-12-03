var BOX_COUNT: number = 3;
import { colors,color } from './color';
var COLOR_BOX_COUNT: number = 5;
var COLOR_CELL_COUNT : number = 3; 


var mainBox = document.getElementById("mainBox");

function initBox(): void {
    if (!mainBox) {
        return;
    }
    for (var i: number = 0; i < BOX_COUNT; ++i) {
        var box = createBox(i);
        createCell(box);
        mainBox?.appendChild(box);
    }
}

function createBox(id: number): HTMLDivElement {
    var div = document.createElement("div");
    div.id = id.toString();
    div.style.background = "red";
    div.style.width = "200px";
    div.style.height = "300px";
    div.style.float = "left";
    div.style.marginLeft = "20px";
    return div;
}

function initCell(id: number): HTMLDivElement {
    var div = document.createElement("div");
    div.id = id.toString();
    div.style.width = "100%";
    div.style.height = `${(100 / COLOR_BOX_COUNT) - 5}%`;
    div.style.border = "solid 1px black";
    div.style.marginTop = "10px";
    return div;
}

function createCell(element: HTMLDivElement): void {
    for (let i = 0; i < COLOR_BOX_COUNT; i++) {
        var cell = initCell(i);
        initColors(cell);
        element.appendChild(cell);
    }
}

function initColors(element : HTMLDivElement) : void 
{ 
    var answer : color[] = [],couter = 0;
    
    while(couter < colors.length)
    { 
        var randomIndex = Math.floor(Math.random() * colors.length);
        var randomItem : color = colors[randomIndex];
        if(!answer.some(s => s.colorName == randomItem.colorName))
        {
            answer.push(randomItem); 
            couter++;
        }     
        console.log(randomItem)
    }
    console.log("Answer : " + answer);
}


if (typeof window !== 'undefined') {
    initBox();
} else {
    console.log("Compiler done please run this app inside an browser");
}
