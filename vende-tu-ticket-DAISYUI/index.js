function mostrarInformacionPaso(event) {
    const click = event.target.closest(".card");

    if (!click) return;

    const tarjeta = click.getElementsByTagName("p")[0];
    
    if (tarjeta.classList.contains("hidden")) {
        tarjeta.classList.remove("hidden");
        tarjeta.classList.add("block");
    } else {
        tarjeta.classList.add("hidden");
        tarjeta.classList.remove("block");
    }
    
}

