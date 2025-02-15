console.log("🚀 Starting debug...");
debugger;  // ✅ This will pause execution here
console.log("This line will not run until you continue debugging.");


document.addEventListener("DOMContentLoaded", () => {
    async function loadHTML(id, file) {
        let element = document.getElementById(id);
        if (!element) {
            console.error(`❌ Element with ID "${id}" not found in 0_index.html`);
            return;
        }

        try {
            let response = await fetch(file);
            if (!response.ok) throw new Error(`❌ Failed to load ${file}: ${response.status} ${response.statusText}`);

            let html = await response.text();
            element.innerHTML = html;

            // ✅ Delay cursor initialization until AFTER `content.html` loads
            setTimeout(initCursor, 500); 
        } catch (error) {
            console.error("❌ Error loading HTML file:", error);
            element.innerHTML = `<p style="color: red;">❌ Error loading content: ${error.message}</p>`;
        }
    }

    function initCursor() {
        const cursor = document.querySelector(".custom-cursor");
        if (cursor) {
            console.log("✅ Cursor element found!");

            document.addEventListener("mousemove", (e) => {
                cursor.style.left = `${e.clientX}px`; 
                cursor.style.top = `${e.clientY + 5}px`;
            });

            document.querySelectorAll("a, button, .clickable").forEach((el) => {
                el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
                el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
            });

            document.addEventListener("mousedown", () => cursor.classList.add("clicking"));
            document.addEventListener("mouseup", () => cursor.classList.remove("clicking"));
        } else {
            console.error("❌ Cursor still NOT found! Check if it exists inside content.html.");
        }
    }

    // ✅ Load `content.html` inside #content
    loadHTML("content", "./content.html");
});






//Loading...
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const startBtn = document.getElementById("start-btn");
    const introContainer = document.querySelector(".introcontainer");
    const menucontainer = document.querySelector(".menucontainer");
    const fixedmenu = document.querySelector(".fixedmenu");
    // Simulate loading time (3 seconds)
    setTimeout(() => {
      loadingScreen.classList.add("fade-out");startBtn.style.display = "block"; }, 100);
    // When user clicks "Start"
    startBtn.addEventListener("click", () => {
      startBtn.style.display = "none"; introContainer.style.display = "flex";menucontainer.style.display = "flex"; fixedmenu.style.display = "flex";setTimeout(() => {loadingScreen.style.display = "none";}, 1000);});
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

// ✅ Check if cursor exists before adding event listeners
if (cursor) {
    // Cursor follows mouse movement
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`; 
        cursor.style.top = `${e.clientY + 5}px`;
    });

    // Detect hover over clickable elements 
    document.querySelectorAll("a, button, .clickable").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
    });

    // Detect click 
    document.addEventListener("mousedown", () => cursor.classList.add("clicking"));
    document.addEventListener("mouseup", () => cursor.classList.remove("clicking"));
} else {
    console.error("❌ Cursor element NOT found. Check if .custom-cursor exists in the HTML.");
}



// side menus +//
document.addEventListener("DOMContentLoaded", () => {
    const musicButton = document.querySelector(".music");
    const musicControls = document.querySelector(".music-controls");

    // 🎵 Toggle music controls when clicking "music +"
    musicButton.addEventListener("click", function () {
        musicControls.style.display = (musicControls.style.display === "none") ? "flex" : "none";
    });

    // ✨ Click Animation for Side Menu + Music Buttons
    document.querySelectorAll(".home, .cursor, .music, .colour, .music-controls button").forEach(item => {
        item.addEventListener("click", function() {
            this.style.letterSpacing = "0vh"; 
            setTimeout(() => { 
                this.style.letterSpacing = "0.25vh"; 
                setTimeout(() => { 
                    this.style.removeProperty("letter-spacing");
                }, 100);}, 100);});});
});


//music play//
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const changeMusicBtn = document.getElementById("change-music-btn");
    playBtn.addEventListener("click", () => {music.play().catch(error => console.log("Playback error:", error));});
    pauseBtn.addEventListener("click", () => {music.pause();});
    changeMusicBtn.addEventListener("click", () => {
        const newMusicURL = prompt("Enter new music URL:");
        if (newMusicURL) {
            music.src = newMusicURL;
            music.play().catch(error => console.log("Playback error:", error));}});
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


//logo
const logo = document.querySelector('.nav-logo');
logo.addEventListener('mousemove', (e) => {
    const bound = logo.getBoundingClientRect();
    const x = e.clientX - bound.left;
    const y = e.clientY - bound.top;
    
    logo.style.setProperty('--x', `${x}px`);
    logo.style.setProperty('--y', `${y}px`);
});


//scroll indicator animation
document.addEventListener("DOMContentLoaded", function () {
    let scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
      scrollIndicator.style.animation = "fadeInUp 1s forwards 24s, bounce 1.5s infinite alternate";}
  });
  