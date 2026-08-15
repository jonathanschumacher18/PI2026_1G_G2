const blocos = document.querySelectorAll(".navbar li");

blocos.forEach(function(bloco) {

    bloco.addEventListener("mouseenter", function() {
        bloco.style.transform = "scale(1.1)";
    });

    bloco.addEventListener("mouseleave", function() {
        bloco.style.transform = "scale(1)";
    });

});