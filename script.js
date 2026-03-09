// DOM 
const charCount = document.getElementById("charCount");
const display = document.getElementById("textBox");
const submitBtn = document.getElementById("submitBtn");

// Update function
function updateCount() {

    const count = display.value.length;
    charCount.textContent = count;

    // Color logic
    if (count > 0 && count < 90) {
        charCount.style.color = "#37fb30b1";
    } else if (count >= 90 && count <= 124) {
        charCount.style.color = "#f48b22d6";
    } else if (count > 124 && count >= 125) {
        charCount.style.color = "#fb0808ea";
    } else {
        charCount.style.color = "#ccc";
    }

    // Submit disabled
    submitBtn.disabled = count === 0;
}

// Event Listener
display.addEventListener("input",updateCount);
submitBtn.addEventListener("click", () => {
    display.value = "";
    updateCount();
});