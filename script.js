//Loading...
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const startBtn = document.getElementById("start-btn");
    const introContainer = document.querySelector(".introcontainer");

    // Simulate loading time (3 seconds)
    setTimeout(() => {
      loadingScreen.classList.add("fade-out"); // Fade out loading screen
      startBtn.style.display = "block"; // Show "Click to Start" button
    }, 2000);

    // When user clicks "Start", show intro animation
    startBtn.addEventListener("click", () => {
      startBtn.style.display = "none"; // Hide start button
      introContainer.style.display = "flex"; // Change from 'none' to 'flex'

      // Hide the loading screen completely after fading out
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 1000); // Ensure it's gone after fade-out animation
    });
});

// BG music 
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
    function playMusic() {
      setTimeout(() => {
        music.play().catch(error => console.log("Autoplay blocked:", error));
      }, 1000); // Delay start by 3 seconds
      document.removeEventListener("click", playMusic);
    }
    document.addEventListener("click", playMusic);
});

// custom cursor 
const cursor = document.querySelector(".custom-cursor");
    // cursor position to follow mouse movement
    document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY + 5}px`; // Adjust slightly below for better feel
    });
    // Detect hover over clickable elements 
    document.querySelectorAll("a, button, .clickable").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("hovering"); });
    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovering");});
    });
    // Detect click 
    document.addEventListener("mousedown", () => {
    cursor.classList.add("clicking");});
    document.addEventListener("mouseup", () => {
    cursor.classList.remove("clicking"); // Remove class when released
});


//Scroll inicator
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) { e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});});
});


//menu bar
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
