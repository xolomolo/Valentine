// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn"); // Simplified selector
const celebrationMusic = document.getElementById("celebration-music");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// 1. Click Envelope to Open
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// 2. Logic to move the NO btn (Run away on hover)
noBtn.addEventListener("mouseover", () => {
    const min = 150;
    const max = 250;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// 3. YES is clicked (Celebration!)
yesBtn.addEventListener("click", () => {
    // Start the Jolly Music
    if (celebrationMusic) {
        celebrationMusic.play().catch(e => console.log("Music playback blocked until interaction."));
    }

    // Update Text and Images
    title.textContent = "Yippeeee! ❤️";
    
    // Make sure 'cat_dance.gif' is uploaded to your GitHub!
    catImg.src = "cat_dance.gif"; 

    // Add final styling class
    document.querySelector(".letter-window").classList.add("final");

    // Hide button group and show final text
    buttons.style.display = "none";
    finalText.style.display = "block";
});
