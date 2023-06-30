console.warn('Esto es una advertencia.')
console.error('Houston, tenemos un problema.')

let trabajoPractico = "de Js"
const enDonde = "Coderhouse"


let username = prompt( "elige nombre de usuario:" )
if (username) {  
    console.log( "Bienvenido😁", username)
}

let Edad = prompt( "Solo puedes seguir navegando si eres mayor de edad ¿Desea seguir navegando?")
    if (Edad === "si") {
        console.log( "Podras seguir navegando por el sitio.", username)
} else { console.log("No puedes seguir en el sitio, Seras Redirijido.")
    }

console.log("1 para vestido, 2 para Remera , 3 para pantalon, 4 para zapatilla")

function mostrarCuotas() {
    console.log("Contamos con hasta:")
    for (let i=1; i<=6; i++) {
    console.log(i + " cuota(s) sin interés.")
    }
}

function verPrecio(codigo) {
    switch (codigo) {
        case "1":
            console.log("el precio del vestido es de: $43.000")
                break;
        case "2":
            console.log("el precio de la remera es de: $13.000")
                break;
        case "3":
                console.log("el precio del pantalon es de: $16.000")
                break;
        case "4":
                console.log("el precio de la zapatilla es de: $25.000")
                break;
        default:
            console.warn("No entendimos tu respuesta, intente nuevamente.")
                break;
    }
}

function consultarPrendas() {
    let respuesta = confirm("¿Desea consultar por alguna prenda?")
    if (respuesta === true) {
        let codigo = prompt("Ingresa el codigo numerico de la prenda:")
        verPrecio(codigo)
        mostrarCuotas(codigo)
    }
}
/*const clubes = ["Boca Juniors", "River Plate", "Independiente", "Racing", "San Lorenzo", "Velez", "Estudiantes", "Talleres", "Belgrano", "Lanus", "Rosario Central"]
for (let i=0; i<=20; i++){
    console.log (clubes [i])
} */