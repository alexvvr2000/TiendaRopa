import { crearElemento } from "./Categorias.js";
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true,
        fullWidth: true
    });
});
var categorias = [
    {
        categoria: "Hombre",
        fondo: "./recursos/fotos-home/ropa-hombre.jpg",
        titulo: "Amplia variedad de moda varonil",
        id: `categoria-hombre`
    }, 
    {
        categoria: "Mujeres",
        fondo: "./recursos/fotos-home/ropa-mujer.jpg",
        titulo: "Lo mejor de temporada femenil",
        id: `categoria-mujer`
    }, 
    {
        categoria: "Niños",
        fondo: "./recursos/fotos-home/ropa-kids.jpg",
        titulo: "Conciente al pequeño de la casa",
        id: `categoria-kids`
    }, 
    {
        categoria: "Sin genero",
        fondo: "./recursos/fotos-home/ropa-sg.jpg",
        titulo: "Sin reglas de genero de por medio",
        id: `categoria-sg`
    }
]
var carruselBase= document.getElementById("carruselBase");
categorias.forEach(categoria => {
    var itemNuevo = crearElemento(categoria);
    itemNuevo.style.backgroundImage = `url("${categoria.fondo}")`
    var seccionNueva = document.createElement("section")
    seccionNueva.appendChild(itemNuevo)
    carruselBase.appendChild(itemNuevo)
});
