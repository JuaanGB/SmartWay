// 0: claro, 1: oscuro
var modo = 0;

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

function cambiarTema(event) {
    if (event.type == "click") {
        modo = !modo;
        if (modo == 0) { // Claro
            event.target.setAttribute("src", "images/modo-dia.png");
        } else { // Oscuro
            event.target.setAttribute("src", "images/modo-noche.png");
        }
    }
}