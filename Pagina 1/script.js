let arrayProductos= ["Coca Cola", "Cocinero Girasol", "Pepas Terepin", "Rexona M"];
let arrayPrecios= [1400,1750,700,2100];
let arrayImagenes= ["../Pagina 1/Imagenes/Coca Cola.jpg","../Pagina 1/Imagenes/Cocinero Girasol.jpg","../Pagina 1/Imagenes/Pepas Terepin.jpg","../Pagina 1/Imagenes/Rexona M.jpg"];

let elementos= document.querySelectorAll(".producto");
function ingresarElementos(arrImagenes,arrProductos,arrPrecios){
    for (let i = 0; i < arrProductos.length; i++) {
        elementos[i].innerHTML+= 
        `<h4 class="bienes">${arrProductos[i]}</h4>
        <p>$<span class="precio">${arrPrecios[i]}</span></p>
        <img src="${arrImagenes[i]}" alt="${arrProductos[i]}" class="img" />`
    }
}
ingresarElementos(arrayImagenes,arrayProductos,arrayPrecios);