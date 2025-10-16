// VAR:
function ejemploVar(): void {
    // console.log(variableVar); // -> Nos da error: Variable 'variableVar' is used before being assigned.
    var variableVar = 'Soy una variable var';
    console.log(variableVar);
}
ejemploVar();

// LET:
function ejemploLet(): void {
    // console.log(variableLet); // -> Nos da el mismo error que en el ejemplo anterior
    let variableLet = 'Soy una variable let';
    console.log(variableLet);
}
ejemploLet();

// CONST: 
function ejemploConst(): void {
    const variableConst = 'Soy una variable const';
    console.log(variableConst);
    // variableConst = "Otro valor"; // -> Nos da error: Cannot assign to 'variableConst' because it is a constant.
}
ejemploConst()