// Typing effect
const text = ["Full Stack Python Developer", "Django & REST API Specialist", "Frontend Enthusiast"];
let count = 0, index = 0, currentText = "", letter = "";

(function type(){
    if(count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 80);
    }
})();

// Dark mode
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// Scroll reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});

/* =========================================
   MOBILE RESPONSIVENESS (Max Width: 768px)
   ========================================= */
@media (max-width: 768px) {
    
    /* 1. Navigation: Stack the logo and the links */
    nav {
        flex-direction: column;
        text-align: center;
        padding: 15px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px 0 0 0;
        gap: 15px;
    }

    /* 2. Hero Section: Scale down massive text so it doesn't overflow */
    .hero-text h1 {
        font-size: 2.2rem;
    }

    .hero-text h2 {
        font-size: 1.2rem;
    }

    /* 3. Skills Grid: Force a 2-column layout instead of squishing them */
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        padding: 0 15px;
    }

    /* 4. Projects: Stack cards vertically and give them breathing room */
    .projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .projects a {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .card {
        width: 90%; /* Keeps the card from touching screen edges */
        margin: 0 auto;
    }

    /* 5. General Section Padding: Prevent text from touching the sides */
    .section {
        padding: 40px 20px;
    }
}

