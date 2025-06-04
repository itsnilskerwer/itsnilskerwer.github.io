themeToggle.addEventListener("click", () => {
  if (document.documentElement.classList.contains("light-mode")) {
    document.documentElement.classList.add("dark-mode");
    document.documentElement.classList.remove("light-mode");
  } else {
    document.documentElement.classList.add("light-mode");
    document.documentElement.classList.remove("dark-mode");
  }
});