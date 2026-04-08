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
