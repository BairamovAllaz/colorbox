var BOX_COUNT: number = 3;
var COLOR_BOX_COUNT: number = 5;
var COLOR_CELL_COUNT: number = 3;



interface color {
    colorCode: string,
    colorName: string
}

enum CODES {
    Red = "#FF0000",
    Blue = "#0000ff",
    Green = "#00FF00"
}

const colors: color[] =
    [
        { colorCode: CODES.Red, colorName: "Red" },
        { colorCode: CODES.Green, colorName: "Green" },
        { colorCode: CODES.Blue, colorName: "Blue" }
    ]


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
    // div.style.background = "red";
    div.style.width = "200px";
    div.style.height = "300px";
    div.style.float = "left";
    div.style.marginLeft = "20px";
    return div;
}

function createCell(element: HTMLDivElement): void {
    var addedColors: color[] = [];
    for (let i = 0; i < COLOR_BOX_COUNT; i++) {
        var cell = initCell(i);
        initColors(cell,addedColors,i);
        element.appendChild(cell);
    }
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


function initColors(cell: HTMLDivElement, addedColors: color[],currIndex: number): void {
    var isDone: boolean = false;

    if (currIndex < COLOR_CELL_COUNT - 1) {
        cell.style.backgroundColor = "white";
    } else {
        while (!isDone) {
            var randomIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0);
            console.log(randomIndex);
            var randomItem: color = colors[randomIndex];
            if (!addedColors.some(s => s.colorName == randomItem.colorName)) {
                addedColors.push(randomItem);
                isDone = true;
                console.log("color: " + randomItem.colorCode)
                cell.style.backgroundColor = `${randomItem.colorCode}`;
            }
        }
    }
}

if (typeof window !== 'undefined') {
    initBox();
} else {
    console.log("Compiler done please run this app inside an browser");
}
