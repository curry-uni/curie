document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");
    const menuLinks = document.querySelectorAll(".fixed-menu nav ul li a");

    function updateActiveMenu() {
        let scrollPosition = window.scrollY;
        let offset = window.innerHeight / 10; // Adjust for better detection

        sections.forEach((section, index) => {
            let sectionTop = section.offsetTop - offset;
            let sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove "active" from all links
                menuLinks.forEach(link => link.classList.remove("active"));
                // Add "active" to the current section's menu item
                menuLinks[index].classList.add("active");

                // Move menu proportionally
                let moveTo = -(index * 5) + "px"; // Adjust this for smoothness
                document.querySelector(".fixed-menu").style.transform = `translateY(calc(-50% + ${moveTo}))`;
            }
        });
         // Special Case: Ensure "Home" is active if at the top
         if (scrollPosition < window.innerHeight / 10) {
            menuLinks.forEach(link => link.classList.remove("active"));
            menuLinks[0].classList.add("active"); // Ensure Home is active when at the top
        }
    }

    window.addEventListener("scroll", updateActiveMenu);
    updateActiveMenu();
});
