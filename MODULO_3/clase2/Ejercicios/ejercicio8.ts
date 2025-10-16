function calcularArea(figura: "circulo" | "rectangulo", ...valores: number[]): number {
    if (figura === "circulo") {
        const radio = valores[0];
        if (radio === undefined) throw new Error("Falta el valor del radio");
        return Math.PI * Math.pow(radio, 2);
    } else if (figura === "rectangulo") {
        const largo = valores[0];
        const ancho = valores[1];
        if (largo === undefined || ancho === undefined)
            throw new Error("Faltan valores para el rectángulo");
        return largo * ancho;
    } else {
        throw new Error("Figura no válida");
    }
}

console.log(`El área del círculo es: ${calcularArea("circulo", 5)}`); // El área del círculo es: 78.5398...
console.log(`El área del rectángulo es: ${calcularArea("rectangulo", 5, 10)}`); // El área del rectángulo es: 50