"use strict";
exports.__esModule = true;
var ChooseColor;
(function (ChooseColor) {
    ChooseColor[ChooseColor["red"] = 0] = "red";
    ChooseColor[ChooseColor["green"] = 1] = "green";
    ChooseColor[ChooseColor["black"] = 2] = "black";
})(ChooseColor || (ChooseColor = {}));
function carColor(color) {
    console.log(color);
}
carColor(ChooseColor.red);
// string enums
var ChooseModel;
(function (ChooseModel) {
    ChooseModel["full"] = "x30R";
    ChooseModel["lxi"] = "rw9M";
    ChooseModel["vxi"] = "tbiP";
})(ChooseModel || (ChooseModel = {}));
function chooseCarModel(model) {
    console.log(model);
}
chooseCarModel(ChooseModel.full);
//Hetrogenous enums
var ChooseEngine;
(function (ChooseEngine) {
    ChooseEngine[ChooseEngine["petrol"] = 450295] = "petrol";
    ChooseEngine["desel"] = "4rg74";
    ChooseEngine["cng"] = "ds463x";
    ChooseEngine[ChooseEngine["ev"] = 40158] = "ev";
})(ChooseEngine || (ChooseEngine = {}));
function chooseEngineType(type) {
    console.log(type);
}
chooseEngineType(ChooseEngine.ev);
