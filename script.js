// 0: claro, 1: oscuro
var modo = 0;

// 0: ocultos en modo pequeño, 1: visibles en modo pequeño
var nav = 0;

function tarjetahover(event) {
    var ps = event.target.getElementsByTagName("p");
    var p = ps[0];
    if (event.type == "mouseenter")  {
        p.innerHTML = p.innerHTML + " (Seleccionado) "; // Esto cambia el texto original
    }
    if (event.type == "mouseleave")  {
        p.innerHTML = "Seguimiento en tiempo real de solicitudes entrantes a tu sistema."; // Aquí si hiciese = "" seguirá apareciendo
        // seleccionado porque modifiqué el texto original.
    }
}

function anadirnuevo(event) {
    if (event.type == "mouseenter")  {
        // Un borde en el div
        event.target.style.borderStyle = "solid";
        let div = document.createElement("div");
        div.innerHTML = "<h3>Clic aquí para saber más</h3>";
        div.style.background = "white";
        event.target.append(div);
    }
    if (event.type == "mouseleave")  {
        event.target.style.borderStyle = "";

        let div = event.target.getElementsByTagName("div")[0];
        div.remove();
    }
}

// Para personalizar estilos en función de un evento, podemos aplicar/quitar clases a los elementos que
// deseamos que cambien. Habrá que definir estilos para ese elemento y esa clase concreta en el CSS.
function cambiarTema(event) {
    if (event.type == "click") {
        if (modo == 0) { // Claro -> Oscuro
            event.target.setAttribute("src", "images/modo-noche.png");
            document.body.className = "dark";
        } else { // Oscuro -> Claro
            event.target.setAttribute("src", "images/modo-dia.png");
            document.body.className = "";
        }
        modo = !modo; // Cambiamos de modo
    }
}

function mostrarNav(event) {
    if (event.type == "click") {
        var opciones = Array.from(document.getElementsByTagName("nav")[0].children);
        if (nav == 0) { // invisibles -> visibles
            event.target.setAttribute("src", "images/nav-close.png");
            opciones.forEach( n => {
                n.classList.add("nav-visible");
            })
        } else { // invisibles -> visibles
            event.target.setAttribute("src", "images/nav.png");
            opciones.forEach( n => {
                n.classList.remove("nav-visible");
            })
        }
        nav = !nav;
    }
}