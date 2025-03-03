let nombre = prompt("decime tu nombre")
alert("Hola " + nombre)

let Distancia = prompt("Cuantos Km vas a hacer hoy ?")
if (Distancia > 0 && Distancia <= 1000) {
    alert("Te recomiendo que vayas a Pie")
} else if (Distancia > 1000 && Distancia <= 10000) {
    alert("Te recomiendo que vayas a bicicleta")
} else if (Distancia > 10000 && Distancia <= 30000) {
    alert("Te recomiendo que vayas a colectivo")
} else if (Distancia > 30000 && Distancia <= 100000) {
    alert("Te recomiendo que vayas a auto") 
} else if (Distancia > 100000) {
    alert("Te recomiendo que vayas a avion") 
}