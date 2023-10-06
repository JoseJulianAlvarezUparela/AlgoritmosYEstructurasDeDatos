export function setupScrollButtons() {
    const scrollLeftButton = document.getElementById("scrollLeftButton");
    const scrollRightButton = document.getElementById("scrollRightButton");
    const headerNav = document.querySelector(".headerNav");

    scrollLeftButton.addEventListener("click", function () {
        headerNav.scrollLeft -= 100; // Ajusta el valor según la cantidad de desplazamiento deseada
    });

    scrollRightButton.addEventListener("click", function () {
        headerNav.scrollLeft += 100; // Ajusta el valor según la cantidad de desplazamiento deseada
    });
}

document.addEventListener("DOMContentLoaded", setupScrollButtons);

