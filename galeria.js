pinturaSeleccionada = null;

class pintura{
    constructor(id, nombre, url, descripcion, artista){
        this.nombre = nombre;
        this.url = url;
        this.descripcion = descripcion;
        this.artista = artista;
        this.id = id;
    }
}

pinturas = [
    new pintura(1, "El conejo de los sueños", "imagenes/conejito.jpg", "Es una pintura que retrata a un conejo café flotando en las nubes bajo la luz del sol. Los ojos del conejo brillan con un aire misterioso mientras el fondo se llena de detalles fantásticos, creando una atmósfera de ensueño que invita al espectador a sumergirse en un mundo de fantasía y asombro.", "luna-diamante"),
    new pintura(2, "Amigos inesperados", "imagenes/conejo y abeja.jpg", "En una pintura donde un conejo y una abeja comparten un instante de curiosidad y armonía entre las nubes. Ambos se miran con ojos vivaces.", "luna-diamante"), 
    new pintura(3, "Jugando en las olas", "imagenes/foquita.jpg", "Es una pintura de una tierna foca que descansa en el mar. Observa con ojos amables, transmitiendo paz y conexión con la vida marina.", "luna-diamante"), 
    new pintura(4, "Gato cósmico", "imagenes/gatito.jpg", "Es una pintura de un gato astronauta que flota en el espacio, admirando las maravillas del universo. Vestido con un traje espacial decorado con estrellas, su expresión revela asombro y curiosidad mientras explora el cosmos.", "luna-diamante"), 
    new pintura(5, "Amistad leal", "imagenes/perro 1.jpg", "Es una pintura de un perro coqueto que cautiva con su mirada. Con un pelaje meticulosamente arreglado transmiten una atmósfera de sofisticación y ternura", "luna-diamante"),
    new pintura(6, "La elegancia del conejo", "imagenes/Conejo coquette.jpg", "Es una pintura de un conejo coqueto que posa con encanto con un ramo de flores, es un accesorio elegante. El colorido de las flores resalta su pelaje suave y sus ojos vivaces, creando una escena encantadora y llena de alegría primaveral.","petalo-encantado"), 
    new pintura(7, "Reunión", "imagenes/conejos circulo.jpg", "Es una pintura de varios conejos que se reúnen en un círculo, mostrando ternura y curiosidad mientras comparten un momento de conexión y armonía. La escena, representa la unión entre estos animales", "petalo-encantado"), 
    new pintura(8, "Jardín de conejos", "imagenes/conejos fondo verde.jpg", "Es una pintura donde varios conejos yacen sobre el suave pasto, disfrutando de un momento de paz bajo el cálido sol. La escena transmite serenidad y tranquilidad en un entorno natural.", "petalo-encantado"),
    new pintura(9, "El encuentro", "imagenes/ranas de la mano.jpg", "Es una pintura donde dos ranas sonrientes caminan de la mano por un prado, compartiendo un momento de amistad y alegría en medio de la naturaleza. El prado se extiende suavemente a su alrededor, lleno de colores vivos y flores silvestres que bailan con la brisa. ", "petalo-encantado"),
    new pintura(10, "El felino con estilo pt.1", "imagenes/gato 1.jpg", "Es una pintura de un gato majestuoso que posa con una pañoleta negra, elegante alrededor de su cuello. Con una postura orgullosa y ojos brillantes, el felino exhibe un aire de sofisticación y refinamiento", "dulce-mariposa"),
    new pintura(11, "El felino con estilo pt.2", "imagenes/gato 2.jpg", "Es una pintura de un felino aristocrático, que se destaca una pañoleta roja, elegante que adorna su cabeza. Con una mirada serena y porte regio, el gato emana una aura de sofisticación y clase. ", "dulce-mariposa"),
    new pintura(12, "Unión felina", "imagenes/just some kittens.jpg", "Es una pintura de dos gatos que yacen juntos, abrazados con ternura y cerrando los ojos en un gesto de tranquilidad y afecto mutuo. La escena irradia calidez y conexión, capturando la belleza del amor entre los felinos.", "dulce-mariposa"),
]

cargarDatos("luna-diamante");
cargarDatos("petalo-encantado");
cargarDatos("dulce-mariposa");


function abrirModal(pintura){
    document.getElementById("imagenModal").src = pintura.url;
    document.getElementById("descripcion-modal").innerHTML = pintura.descripcion;
    document.getElementById("titulo-modal").innerHTML = pintura.nombre;
    document.getElementById("autor-modal").innerHTML = pintura.artista;
    this.pinturaSeleccionada = pintura;
    
}

function cargarDatos(artista){
    let artistaDiv = document.getElementById(artista);
    artistaDiv.innerHTML="";
    pinturasFiltradas = pinturas.filter(pintura => pintura.artista == artista);
    pinturasFiltradas.forEach(pintura => {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "col-6 col-md-4 col-lg-2 text-center contenedor-imagen";
        nuevoDiv.onclick = function() {
            abrirModal(pintura);
        };
        nuevoDiv.setAttribute("data-bs-toggle", "modal");
        nuevoDiv.setAttribute("data-bs-target", "#modalGaleria");

        const nuevaImagen = document.createElement("img");
        nuevaImagen.src = pintura.url;
        nuevaImagen.className = "img-thumbnail";

        const divTextoSuperpuesto = document.createElement("div");
        divTextoSuperpuesto.className = "texto-superpuesto";

        const nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = pintura.nombre;

        divTextoSuperpuesto.appendChild(nuevoParrafo);

        nuevoDiv.appendChild(nuevaImagen);
        nuevoDiv.appendChild(divTextoSuperpuesto);

        artistaDiv.appendChild(nuevoDiv);
    });
}

function eliminar(){
    this.pinturas = this.pinturas.filter(pintura => pintura.id != this.pinturaSeleccionada.id);
    cargarDatos(pinturaSeleccionada.artista);
}