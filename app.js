window.addEventListener("scroll", function () {
    const stars = document.querySelectorAll(".star");
    const scrollY = window.scrollY;
    console.log("scrollY", scrollY);

    stars.forEach((star, index) => {
        star.style.transform = `rotate(${scrollY}deg)`;
    });
    
    if (scrollY > 0) {
        // Hide the elements smoothly
        document.querySelector('.scroll_txt').style.opacity = '0';
        document.querySelector('.scroll_arrow').style.opacity = '0';
    } else {
        // Show the elements smoothly
        document.querySelector('.scroll_txt').style.opacity = '1';
        document.querySelector('.scroll_arrow').style.opacity = '1';
    }
    

    
});


