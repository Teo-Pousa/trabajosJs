const prendas = [
    { nombre: "Zapatillas", precio: "$25.000" },
    { nombre: "Remera", precio: "$10.000" },
    { nombre: "Pantalon", precio: "$15.000" },
    { nombre: "Buzo", precio: "$18.000" },
    { nombre: "Botas", precio: "$35.000" },
];

let carrito = []

let seleccion = prompt("Hola, Bienvenid@ a Empilchate, ¿desea comprar ropa?")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor, ingrese si o no.")
    seleccion = prompt("Hola, Bienvenid@ a Empilchate, ¿desea comprar ropa?")
}

if (seleccion == "si") {
    alert("estas son las prendas que tenemos disponibles: ")
    let prendasDisponibles = prendas.map((prendas) => prendas.nombre + " " + prendas.precio)
    alert(prendasDisponibles.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por visitar nuestra página web, hasta pronto.")
}

while (seleccion != "no") {
    let prendas = prompt("Agrega una prenda a tu carrito")
    let precio = 0

    if (prendas == "remera" || prendas == "pantalon" || prendas == "zapatillas" || prendas == "botas" || prendas == "buzo") {
        switch (prendas) {
            case "remera":
                precio = 10000;
                break;
            case "pantalon":
                precio = 15000;
                break;
            case "zapatillas":
                precio = 25000;
                break;
            case "buzo":
                precio = 18000;
                break;
            case "botas":
                precio = 35000;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("¿Cuantas unidades desea comprar?"))
        carrito.push({ prendas, unidades, precio })
        console.log(carrito)
    } else {
        alert("Por el momento no contamos con esa prenda.")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while (seleccion === "no"){
        alert("¡Gracias por su compra! esperemos que la disfrutes y que vuelva pronto.")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.prendas} / unidades: ${carritoFinal.unidades}  / precio total por prendas: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc +  el.precio * el.unidades, 0)
console.log("El total de la compra es de: " + total + " Gracias por su compra.")