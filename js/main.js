var $mainIcon;
var $header;

document.addEventListener("DOMContentLoaded", () => {
    $mainIcon = document.getElementById("main-icon");
    $header = document.getElementById("header");

    gsap.registerPlugin(ScrollTrigger);

    setVH();
    window.addEventListener('resize', setVH);

    crearAnimacion();
    window.addEventListener("resize", crearAnimacion);
});

function crearAnimacion() {
    ScrollTrigger.refresh();

    let endPosition = (window.innerHeight * 0.4) - (window.innerWidth > 600 ? 100 : 80);
    let scale = window.innerWidth > 600 ? 0.3 : 0.5;
    let top = (window.innerHeight * 0.4) - (window.innerWidth > 600 ? 50 : 40) - ($mainIcon.height / 2);

    console.log($header.offsetHeight);
    console.log($mainIcon.offsetHeight);
    let startingTop = $header.offsetHeight - ($mainIcon.offsetHeight / 2);
    // Eliminar triggers antiguos para evitar duplicaciones
    ScrollTrigger.getAll().forEach(t => t.kill());

    gsap.set(".main-icon", { top: startingTop });

    gsap.to(".main-icon", {
        scale: scale,
        top: top,
        scrollTrigger: {
            trigger: "body",
            start: "top",
            end: `+=${endPosition}`,
            scrub: true,
        }
    });

    // Refrescar ScrollTrigger después de actualizar
    ScrollTrigger.refresh();

    console.log("RESIZE");
    
}

// Ajustar --vh en función del tamaño real del viewport
function setVH() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}