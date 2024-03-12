document.addEventListener("DOMContentLoaded", function (){
    const projectItems = document.querySelectorAll(".main-image");

    function checkSlide() {
        projectItems.forEach((projectItems) => {
            const slideInAt = window.scrollY + window.innerHeight - projectItems.clientHeight/2;
            const itemBottom = projectItems.offsetTop + projectItems.clientHeight;
            const isHalfShown = slideInAt > projectItems.offsetTop;
            const isNotScrolledPast = window.scrollY < itemBottom; 

            if (isHalfShown && isNotScrolledPast){
                projectItems.classList.add("slide-in");
            } else {
                projectItems.classList.remove("slide-in");
            }
        }
        )
    } 

    window.addEventListener("scroll", checkSlide);
    window.addEventListener("resize", checkSlide);

    checkSlide()
} )