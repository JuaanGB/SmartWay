// 0: claro, 1: oscuro
var tema = 0;

// 0: ocultos en modo pequeño, 1: visibles en modo pequeño
var nav = 0;

function mostrarInformacionPaso(event) {
    const tarjeta = event.target;
    const id = tarjeta.id; // Acabará en 1, 2, 3 o 4
    const num = id.slice(-1);
    const info = document.getElementById("info-paso");

    if (event.type == "mouseenter") {
        switch (num) {
            case "1":
                info.textContent = "Regístrate o crea una cuenta nueva en el sistema para comenzar a vender tus tickets.";
                break;
            case "2":
                info.textContent = "Rellena un formulario con información sobre el evento y adjunta la entrada en formato PDF.";
                break;
            case "3":
                info.textContent = "Un administrador validará la información introducida del evento en un plazo de tres días. Si hay algún error, se te notificará por correo electrónico.";
                break;
            case "4":
                info.textContent = "¡Tu entrada ya estará disponible para el resto de usuarios que quieran comprar!";
                break;
            default:
                info.textContent = "Sitúa el ratón sobre un paso para conocer sus detalles.";
        }
    } 
    if (event.type == "mouseleave") {
        info.textContent = "Sitúa el ratón sobre un paso para conocer sus detalles.";
    }
}

// Para personalizar estilos en función de un evento, podemos aplicar/quitar clases a los elementos que
// deseamos que cambien. Habrá que definir estilos para ese elemento y esa clase concreta en el CSS.
function cambiarTema(event) {
    if (event.type == "click") {
        if (tema == 0) { // Claro -> Oscuro
            document.documentElement.dataset.theme = "night";
        } else { // Oscuro -> Claro
            document.documentElement.dataset.theme = "nord";
        }
        tema = !tema; // Cambiamos de tema
    }
}

function mostrarNav(event) {
    if (event.type == "click") {
        var opciones = Array.from(document.getElementsByTagName("nav")[0].children);
        if (nav == 0) { // invisibles -> visibles
            event.target.setAttribute("src", "images/nav-close.png");
            opciones.forEach( n => {
                n.classList.add("nav-visible"); // Add a la lista y no asignación a className porque ya tiene la clase navegacion
            })
        } else { // invisibles -> visibles
            event.target.setAttribute("src", "images/nav-open.png");
            opciones.forEach( n => {
                n.classList.remove("nav-visible");
            })
        }
        nav = !nav;
    }
}