class User {
    private _nombre: string = '';

    // setter va a asignar un nombre
    set nombre(valor: string) {
        this._nombre = valor.toLowerCase();
    }

    // getter nos va a mostrar la propiedad
    get nombre() {
        return this._nombre;
    }

    // metodo va a realizar una accion
    saludar() {
        console.log(`Hola, soy ${this._nombre}`);
    }
}

const usuario1 = new User();
usuario1.nombre = "SOFIA"
usuario1.saludar();