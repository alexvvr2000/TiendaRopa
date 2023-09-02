export function crearElemento(categoria) {
    var itemCarrusel = document.createElement("div")
    itemCarrusel.classList.add("carousel-item")
    itemCarrusel.setAttribute("id", categoria.id)
    itemCarrusel.innerHTML = `
        <h1>${categoria.titulo}</h1>
        <button 
            class="waves-effect waves-light btn" 
            type="submit" 
            name="action"
            id="btn-${categoria.id}"
        >
            Conocer mas...
        </button>
    `
    return itemCarrusel
}