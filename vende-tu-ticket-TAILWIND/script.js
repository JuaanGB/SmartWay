// 0: ocultos en modo pequeño, 1: visibles en modo pequeño
var navVisible = 0;

function initializeModoOscuro() {
    const btnTema = document.getElementById("btn-tema");
    btnTema.setAttribute("src", "images/night.png");
    document.documentElement.setAttribute("data-theme", "dark");
}

// Inicialización de sol o luna dependiendo del modo preferido del navegador
if (localStorage.theme == undefined) {
    console.log("Establezco preferencia de navegador.");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log("Preferencia de navegador: dark");
        initializeModoOscuro();
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
} else {
    console.log(`Establezco preferencia de localStorage: ${localStorage.theme}`);
    if (localStorage.theme == "dark") {
        initializeModoOscuro();
    }
}
// Si es modo día no cambiamos nada porque eso ya lo configuraba el html

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
        const html = document.documentElement;
        const val = html.getAttribute("data-theme");
        if (val === "dark") { // Oscuro -> Claro
            console.log("Cambiando a modo claro.")
            event.target.setAttribute("src", "images/day.png");
            html.removeAttribute("data-theme");
            localStorage.theme = "light";
        } else { // Claro -> Oscuro
            console.log("Cambiando a modo oscuro.")
            event.target.setAttribute("src", "images/night.png");
            html.setAttribute("data-theme", "dark");
            localStorage.theme = "dark";
        }
    }
}


function mostrarNav(event) {
    const menu = document.getElementById("menu");
    const btn = document.getElementById("menu-btn");

    if (!navVisible) {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        btn.src = "images/nav-close.png";
    } else {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
        btn.src = "images/nav-open.png";    
    }
    navVisible = !navVisible;
}