document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initSmoothScroll();
    initContentToggle();
});

/* Content Toggle for Modules */
function initContentToggle() {
    const icons = document.querySelectorAll('.toggle-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Toggle the 'active' class for rotation on the icon itself
            icon.classList.toggle('active');

            // Get the target ID from the data-target attribute
            const targetId = icon.getAttribute('data-target');
            const content = document.getElementById(targetId);

            if (content) {
                // Toggle the display of the content
                const isHidden = content.style.display === "none" || content.style.display === "";
                content.style.display = isHidden ? "block" : "none";
            }
        });
    });
}
/* Typewriting Effect */
function initTypewriter() {
    const headers = document.querySelectorAll('.text, .head-text');
    
    headers.forEach(header => {
        const originalText = header.innerText;
        header.innerText = '';
        header.style.borderRight = "2px solid #9007b7"; // Cursor effect
        
        let i = 0;
        function type() {
            if (i < originalText.length) {
                header.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                // Keep the cursor blinking or remove it after typing
                header.style.borderRight = "none";
            }
        }
        type();
    });
}

/** 3. Smooth Scrolling **/
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href.startsWith('#')) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}