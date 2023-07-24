const prendas = [
    { nombre: "Zapatillas", precio: "$25.000", codigo: 1, img: "./img/zapatillas.jpg", },
    { nombre: "Remera", precio: "$10.000", codigo: 2, img: "./img/remera.jpg", },
    { nombre: "Pantalon", precio: "$15.000", codigo: 3, img: "./img/pantalon.jpg", },
    { nombre: "Buzo", precio: "$18.000", codigo: 4, img: "./img/buzo.jpg", },
    { nombre: "Botas", precio: "$35.000", codigo: 5, img: "./img/botas.jpg", },
    { nombre: "Campera", precio: "$15.000", codigo: 6, img: "./img/campera.jpg", },
    { nombre: "Sandalias", precio: "$5.000", codigo: 7, img: "./img/sandalias.jpg", },
    { nombre: "Camisa", precio: "$27.000", codigo: 8, img: "./img/camisa.png", },
    { nombre: "Medias", precio: "$1.000", codigo: 9, img: "./img/medias.png", },
    { nombre: "Cordones", precio: "$800", codigo: 10, img: "./img/cordones.png", },
    { nombre: "Body", precio: "$7.000", codigo: 11, img: "./img/body.png", },
    { nombre: "Sweter", precio: "$12.000", codigo: 12, img: "./img/sweter.png", },
    { nombre: "Anteojos", precio: "$20.000", codigo: 13, img: "./img/anteojos.png", },
    { nombre: "Gorra", precio: "$19.000", codigo: 14, img: "./img/gorra.png", },
];

let carrito = []

function saludo() {
    return "Hola, Bienvenid@ a Empilchate, ¡espero que te podamos ayudar!"
}


let seleccion = confirm("Hola, Bienvenid@ a Empilchate ¿desea comprar ropa?")

while (seleccion) {
    alert("estas son las prendas que tenemos disponibles: ")
    let prendasDisponibles = prendas.map((prendas) => prendas.nombre + " " + prendas.precio)
    alert(prendasDisponibles.join(" - "))
    break;
}

while (seleccion) {
    let prendas = prompt("Agrega una prenda a tu carrito")
    let precio = 0

    if (prendas == "remera" || prendas == "pantalon" || prendas == "zapatillas" || prendas == "botas" || prendas == "buzo" || prendas == "campera" || prendas == "Sandalias" || prendas == "Camisa" || prendas == "medias" || prendas == "cordones" || prendas == "body" || prendas == "sweter" || prendas == "anteojos" || prendas == "gorra") {
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
            case "campera":
                precio = 15000;
                break;
            case "sandalias":
                precio = 5000;
                break;
            case "camisa":
                precio = 27000;
                break;
            case "medias":
                precio = 1000;
                break;
            case "cordones":
                precio = 800;
                break;
            case "body":
                precio = 7000;
                break;
            case "sweter":
                precio = 12000;
                break;
            case "anteojos":
            precio = 20000;
                break;
            case "gorra":
                precio = 19000;
                break;
            default:
        }

        let unidades = parseInt(prompt("¿Cuantas unidades desea comprar?"))
        carrito.push({ prendas, unidades, precio })
        console.log(carrito)
    } else {
        alert("Por el momento no contamos con esa prenda.")
    }

    seleccion = prompt("¿Desea seguir comprando?")
    if (seleccion == "no") {
        alert("¡Gracias por su compra! esperemos que la disfrutes y que vuelva pronto.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.prendas} / unidades: ${carritoFinal.unidades}  / precio total por prendas: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log("El total de la compra es de: " + total + " Gracias por su compra.")

let card = document.getElementById("card-template");

prendas.map((x) => {
    card.innerHTML += `
    
    <div class="col">
    <div class="card">
        <img src="${x.img}" class="card-img-top" alt="${x.nombre}">
        <div class="card-body">
            <h5 class="card-title text-center text-primary">${x.nombre}</h5>
            <p class="card-text"></p>
            <div class="btn btn-primary" id="botonComprar"${x.botonComprar}>Comprar.</div>
        </div>
    </div>
</div>
    `;
})

const botonComprar = document.querySelector("div#botonComprar")
botonComprar.addEventListener("click", () => {
    console.log(" Producto agregado al carrito. ")
    alert(" Producto agregado al carrito. ")
})
