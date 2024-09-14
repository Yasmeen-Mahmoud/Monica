

document.getElementById("bars").addEventListener("click", () => {
    var navSection = document.getElementById("nav-section");
    
    navSection.classList.toggle("hide");
});

window.addEventListener("resize", () => {
    var navSection = document.getElementById("nav-section");
    if(window.innerWidth > 900)
    {
        navSection.style.display = "flex";
    }
    else
    {
        navSection.style.display = "none";
    }
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: 
    {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints:
    {
        0:
        {
            slidesPerView: 1,
        },
        800:
        {
            slidesPerView: 2,
        },
        1200:
        {
            slidesPerView: 3,
        },
    }
});
