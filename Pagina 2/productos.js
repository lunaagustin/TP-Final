let arrayProductos=["Coca Cola","Cocinero Girasol","Pepas Terepin","Rexona M","Ala Ultra Limon",
                    "Cepillo Colgate","Colgate Triple Accion","Dulce de Leche","Gallo Oro",
                    "Leche Chocolatada","Molito Spaghetti","Pure de Tomate"];
let arrayStocks= [14,18,7,21,16,11,19,21,30,17,11,8];
let arrayPrecios=[1400,1750,700,2100,1600,1100,1900,2100,3000,1700,1100,800];
let arrayImagenes= ["../Pagina 1/Imagenes/Coca Cola.jpg","../Pagina 1/Imagenes/Cocinero Girasol.jpg",
                    "../Pagina 1/Imagenes/Pepas Terepin.jpg","../Pagina 1/Imagenes/Rexona M.jpg",
                    "../Pagina 2/Imagenes/Ala Ultra Eucalipto Limon.jpg",
                    "../Pagina 2/Imagenes/Cepillo Dent Colgate Clasic Medio.jpg",
                    "../Pagina 2/Imagenes/Colgate Triple Accion.jpg","../Pagina 2/Imagenes/Dulce de Leche Ilolay.jpg",
                    "../Pagina 2/Imagenes/Gallo Oro.jpg","../Pagina 2/Imagenes/Leche Chocolatada Cindor.png",
                    "../Pagina 2/Imagenes/Molito Spaghetti.jpg","../Pagina 2/Imagenes/Pure de Tomate La Campagnola.jpg"];

let lista= document.querySelector(".productos");
function ingresarElementos(arrImagenes,arrProductos,arrPrecios,arrStocks){
    for (let i = 0; i < arrProductos.length; i++) {
        lista.innerHTML+= 
        `<div class="producto">
            <h4 class="bienes">${arrProductos[i]}</h4>
            <p>Stock: <span class="stock">${arrStocks[i]}</span></p>
            <p>$<span class="precio">${arrPrecios[i]}</span></p>
            <img src="${arrImagenes[i]}" alt="${arrProductos[i]}" class="img" />
            <input type="number" id="cantidad${i}" value="0" min="0" max=${arrStocks[i]}>
        </div>`
    }
}
ingresarElementos(arrayImagenes,arrayProductos,arrayPrecios,arrayStocks);

let textTotal= document.querySelector(".total-compra");
function comprar() {
    let total= 0;
    for (let i = 0; i < arrayPrecios.length; i++) {
        let stockHTML= document.querySelectorAll(".stock");
        let cantidadHTML = document.getElementById(`cantidad${i}`);
        let cantidad = parseInt(cantidadHTML.value) || 0;
        if(cantidad>=0 && (arrayStocks[i]-cantidad)>=0){
            arrayStocks[i]-= cantidad;
            stockHTML[i].textContent= arrayStocks[i];
            cantidadHTML.value=0;
            cantidadHTML.max= arrayStocks[i];
            total += cantidad * arrayPrecios[i];
        } else{
            alert("Ingrese cantidades positivas y menores o iguales al stock")
        }
    }
    textTotal.textContent = total
}
document.querySelector(".boton-compra").addEventListener("click", comprar);