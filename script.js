document.addEventListener("DOMContentLoaded", () => {
    // 🌗 Theme Handling
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    document.body.appendChild(themeToggle);

    const themes = ["light", "dark", "mixed"];
    
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        themeToggle.innerText = theme === "dark" ? "☀️ Light Mode" 
                                : theme === "mixed" ? "🎨 Mixed Mode" 
                                : "🌙 Dark Mode";
                                // Dynamically update the background image
        document.body.style.backgroundImage = getComputedStyle(document.documentElement) .getPropertyValue("--bg-image");
    }

    function detectSystemTheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    let currentTheme = localStorage.getItem("theme") || detectSystemTheme();
    applyTheme(currentTheme);

    themeToggle.addEventListener("click", () => {
        let nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
        currentTheme = nextTheme;
        applyTheme(nextTheme);
    });

    // Smooth Fade-in Animations 🎭
    function revealElements() {
        document.querySelectorAll(".fade-in").forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements(); // Initial call

    // 📱 Mobile-Friendly Navigation
    const nav = document.querySelector("nav ul");
    const menuToggle = document.createElement("button");
    menuToggle.id = "menu-toggle";
    menuToggle.innerText = "☰ Menu";
    document.body.insertBefore(menuToggle, nav);

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuToggle.innerText = nav.classList.contains("open") ? "✖ Close" : "☰ Menu";
    });

    // Lazy Loading for Images 🖼️
    const lazyImages = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    }, { rootMargin: "50px" });

    lazyImages.forEach(img => imageObserver.observe(img));
});
