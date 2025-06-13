/* --------------- CAMBIO DE TEMA ---------------- */

// Al cargar la página:
// 1. Preferencia de localStorage.
// 2. Si no la hay, la preferencia del navegador
if (localStorage.theme === undefined) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.theme = "dark";
        modo.checked = false; // Previamente como document.getElementByID("modo")
    } else {
        document.documentElement.setAttribute("data-theme", "nord");
        localStorage.theme = "nord";
        modo.checked = true;
    }
} else if (localStorage.theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    modo.checked = false;
} else {
    document.documentElement.setAttribute("data-theme", "nord");
    modo.checked = true;
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


