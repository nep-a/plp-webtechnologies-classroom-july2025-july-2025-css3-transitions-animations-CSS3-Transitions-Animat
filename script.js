// ===========================
// Part 2: Functions, Scope & Return Values
// ===========================

// Global variable to store box reference
const box = document.querySelector('.animated-box');

// Function with parameter + return value
function calculateNewSize(multiplier) {
  const baseSize = 100; // local variable
  return baseSize * multiplier; // returning value
}

// Function to update box size dynamically
function resizeBox(multiplier) {
  const newSize = calculateNewSize(multiplier);
  box.style.width = newSize + 'px';
  box.style.height = newSize + 'px';
}

// ===========================
// Part 3: Triggering CSS Animations with JS
// ===========================

document.getElementById('animateBtn').addEventListener('click', () => {
  resizeBox(1.5); // Make box bigger before animating
  box.classList.add('animate'); // Add animation class
});

document.getElementById('resetBtn').addEventListener('click', () => {
  box.classList.remove('animate'); // Reset animation
  resizeBox(1); // Reset size
});
