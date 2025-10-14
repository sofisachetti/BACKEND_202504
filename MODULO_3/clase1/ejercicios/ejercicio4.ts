// archivo: ejercicio4.ts
let nombre: string = "Laura";
let edad: number | undefined;

if (edad !== undefined) {
  console.log(`${nombre} tiene ${edad} años.`);
} else {
  console.log(`${nombre} no ha proporcionado su edad.`);
}