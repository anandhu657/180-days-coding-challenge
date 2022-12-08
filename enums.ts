enum ChooseColor {
    red,
    green,
    black
}

function carColor(color: ChooseColor): void {
    console.log(color);
}

carColor(ChooseColor.red);


// string enums

enum ChooseModel {
    full = "x30R",
    lxi = "rw9M",
    vxi = "tbiP"
}

function chooseCarModel(model: ChooseModel) {
    console.log(model);
}

chooseCarModel(ChooseModel.full);

export { }


//Hetrogenous enums

enum ChooseEngine {
    petrol = 450295,
    desel = "4rg74",
    cng = "ds463x",
    ev = 40158
}

function chooseEngineType(type: ChooseEngine) {
    console.log(type);
}

chooseEngineType(ChooseEngine.ev);