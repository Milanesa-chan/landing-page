document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    crearAnimacion();

    window.addEventListener("resize", crearAnimacion);
});

function crearAnimacion() {
    let endPosition = (window.innerHeight * 0.4) - (window.innerWidth > 600 ? 100 : 50);
    let scale = window.innerWidth > 600 ? 0.4 : 0.5;
    // Eliminar triggers antiguos para evitar duplicaciones
    ScrollTrigger.getAll().forEach(t => t.kill());

    gsap.to(".main-icon", {
      scale: scale, // Reducir tamaño
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