document.addEventListener("DOMContentLoaded", () => {
    console.log("📜 Script loaded and DOM fully parsed!");

    // 🌗 Theme Handling with Dynamic Background Images
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    document.body.appendChild(themeToggle);

    const themes = ["light", "dark", "mixed"];

    // 🎨 Background Images for Themes
    const bgImages = {
        light: ["assets/images/light1.webp", "assets/images/light2.webp", "assets/images/light3.webp"],
        dark: ["assets/images/dark1.webp", "assets/images/dark2.webp", "assets/images/dark3.webp"],
        mixed: ["assets/images/mixed1.webp", "assets/images/mixed2.webp", "assets/images/mixed3.webp"]
    };

    function getRandomImage(theme) {
        let images = bgImages[theme] || [];
        if (images.length === 0) {
            console.warn(`⚠️ No images found for theme: ${theme}`);
            return "";
        }
        return images[Math.floor(Math.random() * images.length)];
    }

    function applyTheme(theme) {
        if (!themes.includes(theme)) {
            console.warn(`⚠️ Invalid theme detected: ${theme}. Resetting to 'light'.`);
            theme = "light";
        }

        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        let bgImage = getRandomImage(theme);
        document.body.style.backgroundImage = bgImage ? `url('${bgImage}')` : "none";

        console.log(`✅ Applied Theme: ${theme}`);
        console.log(`🎨 Background Image: ${bgImage}`);

        themeToggle.innerText = theme === "dark" ? "☀️ Light Mode" 
                                : theme === "mixed" ? "🎨 Mixed Mode" 
                                : "🌙 Dark Mode";
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
    revealElements();

    // 📱 Mobile-Friendly Navigation
    const nav = document.querySelector("nav ul");
    const navWrapper = document.querySelector("nav");

    if (nav && navWrapper) {
        const menuToggle = document.createElement("button");
        menuToggle.id = "menu-toggle";
        menuToggle.innerText = "☰ Menu";
        menuToggle.setAttribute("aria-expanded", "false"); // Accessibility

        navWrapper.insertBefore(menuToggle, nav);

        menuToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");
            menuToggle.innerText = isOpen ? "✖ Close" : "☰ Menu";
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        console.log("✅ Mobile menu initialized and working!");
    } else {
        console.warn("⚠️ Navigation menu (nav ul) not found. Check your HTML structure.");
    }

    // 🖼️ Lazy Loading for Images
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
