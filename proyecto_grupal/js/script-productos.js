import { productos } from './productos.js'

const remerasContainer = document.getElementById('remeras-container')
const zapatillasContainer = document.getElementById('zapatillas-container')
const camperasContainer = document.getElementById('camperas-container')
const calzasContainer = document.getElementById('calzas-container')

const remeras = productos[0].remeras
const zapatillas = productos[1].zapatillas
const camperas = productos[2].camperas
const calzas = productos[3].calzas

for (const remera of remeras) {
    remerasContainer.innerHTML += `
    <div class="card col-sm-4 p-1 mb-5 bg-light div1" style="width: 18rem">
        <img src="${remera.imagen}" class="card-img-top" alt="${remera.producto}">
        <div class="card-body">
            <p class="card-text">${remera.producto}</p>
            <h5 class="card-title">${remera.precio}</h5>
            <div class="d-flex justify-content-center">
                <a
                    href="#"
                    class="btn btn-outline-info"
                    >Ver más</a>
            </div>
        </div>
    </div>
    `
}

for (const zapatilla of zapatillas) {
    zapatillasContainer.innerHTML += `
    <div class="card col-sm-4 p-1 mb-5 bg-light div1" style="width: 18rem">
        <img src="${zapatilla.imagen}" class="card-img-top" alt="${zapatilla.producto}">
        <div class="card-body">
            <p class="card-text">${zapatilla.producto}</p>
            <h5 class="card-title">${zapatilla.precio}</h5>
            <div class="d-flex justify-content-center">
                <a
                    href="#"
                    class="btn btn-outline-info"
                    >Ver más</a>
            </div>
        </div>
    </div>
    `
}

for (const campera of camperas) {
    camperasContainer.innerHTML += `
    <div class="card col-sm-4 p-1 mb-5 bg-light div1" style="width: 18rem">
        <img src="${campera.imagen}" class="card-img-top" alt="${campera.producto}">
        <div class="card-body">
            <p class="card-text">${campera.producto}</p>
            <h5 class="card-title">${campera.precio}</h5>
            <div class="d-flex justify-content-center">
                <a
                    href="#"
                    class="btn btn-outline-info"
                    >Ver más</a>
            </div>
        </div>
    </div>
    `
}

for (const calza of calzas){
    calzasContainer.innerHTML += `
    <div class="card col-sm-4 p-1 mb-5 bg-light div1" style="width: 18rem">
        <img src="${calza.imagen}" class="card-img-top" alt="${calza.producto}">
        <div class="card-body">
            <p class="card-text">${calza.producto}</p>
            <h5 class="card-title">${calza.precio}</h5>
            <div class="d-flex justify-content-center">
                <a
                    href="#"
                    class="btn btn-outline-info"
                    >Ver más</a>
            </div>
        </div>
    </div>
    ` 
}



