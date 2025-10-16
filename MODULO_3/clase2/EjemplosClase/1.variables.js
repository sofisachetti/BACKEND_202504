// 1. VAR:
function ejemploVar() {
    console.log(variableVar);
    var variableVar = "Soy una variable de tipo var.";
    console.log(variableVar);
}
ejemploVar();

function ejemploLet() {
    // console.log(variableLet);
    let variableLet = "Soy una variable de tipo let.";
    console.log(variableLet);
}
ejemploLet();

function ejemploConst() {
    //console.log(variableConst);
    const variableConst = "Soy una variable de tipo const.";
    console.log(variableConst);
    variableConst = "otro valor"
    // console.log(variableConst);
    
}
ejemploConst();