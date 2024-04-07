// Selects the HTML element with the class "container" and assigns it to the variable container
const container = document.querySelector(".container");

// Adds a click event listener to the HTML element with the class "open-navbar-icon"
// When clicked, it adds the class "change" to the container element
document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

// Adds a click event listener to the HTML element with the class "close-navbar-icon"
// When clicked, it removes the class "change" from the container element
document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});


