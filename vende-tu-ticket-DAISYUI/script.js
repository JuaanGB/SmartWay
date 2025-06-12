/* --------------- CAMBIO DE TEMA ---------------- */

// Al cargar la página:
// 1. Preferencia de localStorage.
// 2. Si no la hay, la preferencia del navegador
if (localStorage.theme === undefined) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.theme = "dark";
        document.getElementById("modo").checked = false;
    } else {
        document.documentElement.setAttribute("data-theme", "nord");
        localStorage.theme = "nord";
        document.getElementById("modo").checked = true;
    }
} else if (localStorage.theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("modo").checked = false;
} else {
    document.documentElement.setAttribute("data-theme", "nord");
    document.getElementById("modo").checked = true;
}

// El botón
function cambiarTema(event) {
    if (event.type == "click") {
        const html = document.documentElement;
        const val = html.getAttribute("data-theme");
        if (val === "dark") { // Oscuro -> Claro
            console.log("Cambiando a modo claro.")
            event.target.checked = true;
            html.setAttribute("data-theme", "nord");
            localStorage.theme = "nord";
        } else { // Claro -> Oscuro
            console.log("Cambiando a modo oscuro.")
            event.target.checked = false;
            html.setAttribute("data-theme", "dark");
            localStorage.theme = "dark";
        }
    }
}

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
