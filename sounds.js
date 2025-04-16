const lightningSound = "resources/sounds/lightning-189909.mp3";
const gallopingSound = "resources/sounds/single-horse-galopp-6152.mp3";
const thunderSound = "resources/sounds/thunder-for-anime-161022.mp3";

// Function to play a given sound file
function playSoundEffect(path) {
    const audio = new Audio(path);
    audio.play();
}

// Attach event listeners to elements by ID
document.getElementById("lightning-sound").addEventListener("click", () => {
    playSoundEffect(lightningSound);
});

document.getElementById("galloping-sound").addEventListener("click", () => {
    playSoundEffect(gallopingSound);
});

document.getElementById("thunder-sound").addEventListener("click", () => {
    playSoundEffect(thunderSound);
});