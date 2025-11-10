/* Ejercicio 1: Herencia Múltiple Indirecta y Modificadores de Acceso 
Consigna: Define una clase base Negocio con un método protegido operar(). 
Define otra clase Consultoria que herede de Negocio y sobrescriba el método operar() 
para mostrar un mensaje sobre cómo opera el negocio de consultoría.
*/

// clase base
class Negocio {
    protected operar(): void {
        console.log("El negocio esta operando de forma general");
    }
    // Metodo publico para llamar al metodo protegido desde fuera
    public iniciarOperacion(): void {
        this.operar()
    }
}

// clase derivada
class consultoria extends Negocio {
    protected operar(): void {
        console.log("El negocio de consultoria opera brindando asesoramiento especializado");
    }

    public iniciarOperacion(): void {
        this.operar()
    }
}

// prueba 
const miConsultoria = new consultoria()
miConsultoria.iniciarOperacion()