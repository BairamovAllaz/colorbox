export interface color
{ 
    colorCode : string, 
    colorName : string
}

enum CODES
{ 
    Red = "#FF0000",
    Blue = "#0000ff",
    Green = "#00FF00"
}

export const colors : color[] =
[ 
     {colorCode : CODES.Red,colorName : "Red"},
     {colorCode : CODES.Green,colorName : "Green"},
     {colorCode : CODES.Blue,colorName : "Blue"}
]