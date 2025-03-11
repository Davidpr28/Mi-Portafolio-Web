// Alternador de Modo Dark
const darkModeButton = document.getElementById("toggle-Darkmode");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = darkModeButton.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

