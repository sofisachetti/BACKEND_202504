// Definimos iuna funcion asincrona llamada fetchCharacter que recibe un parametro 'id'
async function fetchCharacter(id) {
    try {
        // Validamos el 'id', si no fue proporcionado lanzamos un error
        if (!id) throw new Error('No ID provided.');

        // Hacemos una solicitud a la API de Star Wars usando el ID proporcionado
        const response = await fetch(`https://swapi.dev/api/people/${id}`);

        // Verificamos si la respuesta no fue exitosa (status diferente a 200), lanzamos error
        if (!response.ok) throw new Error(`Character not found: ${response.status}`);

        // Convertimos la respuesta a formato JSON para obtener los datos del personaje
        const character = await response.json();

        // Imprimimos en consola los datos del personaje
        console.log('Character data: ', character);
    } catch (error) {
        // Capturamos cualquier error ocurrido en el bloque try y lo mostramos en la consola
        console.error('Error: ', error.message);
    }
}

// Llamamos a la funcion fecthCharacter pasando el ID del personaje
fetchCharacter(3); // Puedes probar en cambiar el ID para obtener otros personajes