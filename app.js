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


function show() {
    var navIcon = document.querySelector('.nav_icon');
    var navLinksContainer = document.querySelector('.nav_links_container');
    navIcon.classList.toggle('active'); // Toggle the 'active' class
    navLinksContainer.classList.toggle('active');
}

window.addEventListener("scroll", function () {
    const stars = document.querySelectorAll(".star");
    const scrollY = window.scrollY;
    console.log("scrollY", scrollY);

    stars.forEach((star, index) => {
        star.style.transform = `rotate(${scrollY}deg)`;
    });

    const sections = document.querySelectorAll(".section"); // Update this to match your section class
    const navigation = document.querySelector('.navigation');
    const navigationRect = navigation.getBoundingClientRect();

    sections.forEach((section, index) => {
        const sectionRect = section.getBoundingClientRect();
        const left = navigationRect.left - sectionRect.left;
        const top = navigationRect.top - sectionRect.top;
        const bgColor = getBackgroundColor(section, left, top);
        section.style.background = `linear-gradient(${bgColor}, ${bgColor}), ${section.style.background}`;
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