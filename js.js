// ========================
// GLOBAL VARIABLES
// ========================
let score = 0; // keeps track of score

// Wait for DOM to load before running
document.addEventListener("DOMContentLoaded", function() {

  // ========================
  // START BUTTON
  // ========================
  document.getElementById("startBtn").addEventListener("click", function() {
    switchScreen("screen1", "screen2");
  });

  // ========================
  // NEXT BUTTONS (FUN FACTS)
  // ========================
  document.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", function() {
      let currentScreen = this.closest(".screen");
      let nextScreen = currentScreen.nextElementSibling;
      if(nextScreen) switchScreenByElement(currentScreen, nextScreen);
    });
  });

  // ========================
  // RIGHT ANSWERS
  // ========================
  document.querySelectorAll(".right").forEach(btn => {
    btn.addEventListener("click", function() {
      // Increase score
      score += 10;
      document.getElementById("scoreDisplay").innerText = score;

      // Play character voice
      let character = btn.getAttribute("data-character");
      let audio;
      if(character==='pikachu') audio = new Audio("https://www.soundjay.com/button/sounds/button-3.mp3");
      else if(character==='spongebob') audio = new Audio("https://www.soundjay.com/button/sounds/button-4.mp3");
      else if(character==='shinchan') audio = new Audio("https://www.soundjay.com/button/sounds/button-5.mp3");
      audio.play();

      // Show alert
      alert("Yay! Correct! 😄💖");

      // Go to next screen
      let currentScreen = btn.closest(".screen");
      let nextScreen = currentScreen.nextElementSibling;
      if(nextScreen) switchScreenByElement(currentScreen, nextScreen);
    });
  });

  // ========================
  // WRONG ANSWERS
  // ========================
  document.querySelectorAll(".wrong").forEach(btn => {
    btn.addEventListener("click", function() {
      alert("Oops! Try again 😜");
    });
  });

  // ========================
  // CELEBRATION BUTTON
  // ========================
  document.getElementById("celebrateBtn").addEventListener("click", function() {
    let audio = new Audio("https://www.soundjay.com/human/sounds/applause-01.mp3");
    audio.play();
    document.getElementById("finalText").innerText = "🎉 Happy Birthday Her Name! 🎂💖✨";

    // Confetti animation
    confetti({
      particleCount: 300,
      spread: 90,
      origin: { y: 0.6 }
    });
  });
});

// ========================
// FUNCTION: Switch screens by ID
// ========================
function switchScreen(hideId, showId) {
  document.getElementById(hideId).classList.remove("active");
  document.getElementById(showId).classList.add("active");
}

// ========================
// FUNCTION: Switch screens by element
// ========================
function switchScreenByElement(hideEl, showEl) {
  hideEl.classList.remove("active");
  showEl.classList.add("active");
}