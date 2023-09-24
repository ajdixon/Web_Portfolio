//scroll arrow
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
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

//project image appear function
document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll('.mobile_img, .web_img');
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function adjustOpacity() {
        for (let i = 0; i < images.length; i++) {
            if (isElementInViewport(images[i])) {
                images[i].style.opacity = "1";
            } else {
                images[i].style.opacity = "0";
            }
        }
    }
    window.addEventListener('scroll', adjustOpacity);
    window.addEventListener('resize', adjustOpacity);
    window.addEventListener('load', adjustOpacity);
});


// Navbar scroll function
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav_links a');
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
            const targetSection = document.getElementById(targetId); // Get the target section
            
            if (targetSection) {
                const duration = 600; // Duration of the scroll animation in milliseconds
                const targetPosition = targetSection.offsetTop;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const startTime = performance.now();
                
                
                function scrollStep(timestamp) {
                    const currentTime = timestamp - startTime;
                    const scrollFraction = currentTime / duration;
                    
                    if (scrollFraction < 1) {
                        window.scrollTo(0, startPosition + distance * scrollFraction);
                        requestAnimationFrame(scrollStep);
                    } else {
                        window.scrollTo(0, targetPosition);
                    }
                }
                requestAnimationFrame(scrollStep);
            }
        });
    });
});

var nav_links = document.querySelector(".nav_links");
var navIcon = document.getElementById("mobile-menu");
var mobileLinks = document.querySelectorAll(".nav_links a"); // Select all links inside .nav_links

navIcon.addEventListener("click", function() {
    nav_links.classList.toggle("active");
    navIcon.classList.toggle("active");
});

// Add event listeners to each link to hide the menu when clicked
mobileLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        nav_links.classList.remove("active"); // Remove "active" class to hide the menu
        navIcon.classList.remove("active");   // Remove "active" class from the icon
    });
});
