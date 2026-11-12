
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });

  const themeButton = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("daljin-theme");
  const theme = savedTheme === "light" ? "light" : "dark";
  document.body.dataset.theme = theme;

  const updateThemeButton = (activeTheme) => {
    if (!themeButton) return;
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    const icon = themeButton.querySelector(".theme-icon");
    const label = themeButton.querySelector(".theme-label");
    if (icon) icon.textContent = nextTheme === "light" ? "☼" : "☾";
    if (label) label.textContent = nextTheme === "light" ? "Light" : "Dark";
    themeButton.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    themeButton.setAttribute("title", `Switch to ${nextTheme} theme`);
  };

  updateThemeButton(theme);
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const next = document.body.dataset.theme === "dark" ? "light" : "dark";
      document.body.dataset.theme = next;
      localStorage.setItem("daljin-theme", next);
      updateThemeButton(next);
    });
  }
});
