document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", revealOnScroll);

    function revealOnScroll() {
        var reveals = document.querySelectorAll(".votar");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealBottom = reveals[i].getBoundingClientRect().bottom;

            if (revealTop < windowHeight && revealBottom >= 0) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    
    revealOnScroll();
});
