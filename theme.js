document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  // 1. Apply saved or default theme
  const savedTheme = localStorage.getItem("theme");

  const applyTheme = (theme) => {
      root.classList.remove("light-mode", "dark-mode");
      root.classList.add(`${theme}-mode`);
      localStorage.setItem("theme", theme);
    };

  const detectSystemPreference = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  applyTheme(savedTheme || detectSystemPreference());

  // 2. Toggle theme on button click

  themeToggle.addEventListener("click", () => {
    const currentTheme = root.classList.contains("dark-mode") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    });
});