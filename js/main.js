document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    crearAnimacion();
    window.addEventListener("resize", crearAnimacion);

    setVH();
    window.addEventListener('resize', setVH);
});

function crearAnimacion() {
    let endPosition = (window.innerHeight * 0.4) - (window.innerWidth > 600 ? 100 : 40);
    let scale = window.innerWidth > 600 ? 0.3 : 0.5;
    let top = (window.innerHeight * 0.4) - (window.innerWidth > 600 ? 50 : 40);
    // Eliminar triggers antiguos para evitar duplicaciones
    ScrollTrigger.getAll().forEach(t => t.kill());

    gsap.to(".main-icon", {
        scale: scale,
        top: top,
        transform: `translateY(-50%)`,
        scrollTrigger: {
            trigger: "body",
            start: "top",
            end: `+=${endPosition}`,
            scrub: true,
        }
    });

    // Refrescar ScrollTrigger después de actualizar
    ScrollTrigger.refresh();
}

// Ajustar --vh en función del tamaño real del viewport
function setVH() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}