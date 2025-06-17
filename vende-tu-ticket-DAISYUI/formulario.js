window.onbeforeunload = function() {
    return false;
};

const input = document.getElementById("foto-evento-input");
const label = document.getElementById("foto-evento-img");
const botonX = document.getElementById("boton-foto-evento");

input.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = function () {
        label.style.backgroundImage = `url(${reader.result})`;
        label.style.backgroundSize = "cover";
        label.style.backgroundPosition = "center";
        label.classList.add("hay-foto");
    };
    reader.readAsDataURL(file);
});

botonX.addEventListener("click", function (e) {
    e.preventDefault();
    input.value = "";
    label.style.backgroundImage = "";
    label.classList.remove("hay-foto");
});

