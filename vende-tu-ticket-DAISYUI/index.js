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