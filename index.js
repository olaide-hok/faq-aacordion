// Select DOM Elements
// Select all accordion buttons
const accordionButtons = document.querySelectorAll(".question button.btn");

// Add click event listener to each button
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle the visibility of the <p> tag
    const content = button.closest(".question").querySelector("p");
    content.classList.toggle("d-none");

    // Toggle the icons
    const iconMinus = button.querySelector('img[alt="icon minus"]');
    const iconPlus = button.querySelector('img[alt="icon plus"]');
    iconMinus.classList.toggle("d-none");
    iconPlus.classList.toggle("d-none");
  });
});
