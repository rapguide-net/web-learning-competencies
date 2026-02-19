document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initSmoothScroll();
    initContentToggle();
});

function initContentToggle() {
    document.querySelectorAll('.selector-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const content = document.getElementById(targetId);
            if (content) {
                const isOpened = content.classList.toggle('open');
                button.textContent = isOpened ? "Show Less" : "Read More";
            }
        });
    });
}

function initTypewriter() {
    const headers = document.querySelectorAll('.text, .head-text');
    
    headers.forEach(header => {
        const originalText = header.innerText;
        header.innerText = '';
        header.style.borderRight = "3px solid #ff6b35"; // Cursor effect
        
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
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}