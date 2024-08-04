import { productos } from "./productos.js"

const ofertasContainer = document.getElementById('ofertas-container')
const promosContainer = document.getElementById('promos-container')
const ofertas = productos[4].ofertas
const promos = productos[5].promos

for (const oferta of ofertas){
    ofertasContainer.innerHTML += `
    <div class="card col-sm-4 p-1 mb-5 bg-light div1" style="width: 18rem">
        <img src="${oferta.imagen}" class="card-img-top" alt="${oferta.producto}">
        <div class="card-body">
            <p class="card-text">${oferta.producto}</p>
            <h5 class="card-title">${oferta.precio}</h5>
            <div class="d-flex justify-content-center">
                <a
                    href="./pages/productoOferta.html"
                    class="btn btn-outline-info"
                    >Ver más</a>
            </div>
        </div>
    </div>
    `
}

for (const promo of promos) {
    promosContainer.innerHTML += `
    <div class="card col-3 mb-5 bg-light div1" style="width: 18rem">
        <img
        src=${promo.imagen}
        class="card-img-top object-fit-cover h-75"
        alt=${promo.producto}
        />
        <div class="card-body bg-light">
            <p class="card-text bg-light">${promo.producto}</p>
            <h5 class="card-title bg-light text-info fw-bold"><span class="text-decoration-line-through fs-6 text-black bg-danger-subtle me-2">${promo.precio}</span>${precioPromo(promo.precio)}</h5>
            <div class="d-flex justify-content-center bg-light">
                <a
                href="#"
                class="btn btn-outline-info"
                >Ver más</a
                >
            </div>
        </div>
    </div>
    `
}

function precioPromo(precio){
    const valor = precio.split('$')
    return `$${(Number(valor[1]) - (Number(valor[1]) * 0.2)).toPrecision(5)}`
}