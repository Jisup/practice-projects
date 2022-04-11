export default function DarkMode({ $app }) {
  var $theme = document.body.dataset.theme;
  if (!$theme) {
    $theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.body.setAttribute("data-theme", $theme);
  }

  this.$target = document.createElement("label");
  this.$target.className = "DarkModeToggle";

  this.$checkbox = document.createElement("input");
  this.$checkbox.type = "checkbox";

  this.$toggle = document.createElement("span");
  this.$toggle.className = "slider round";

  this.$target.appendChild(this.$checkbox);
  this.$target.appendChild(this.$toggle);

  $app.appendChild(this.$target);

  this.$target.addEventListener("click", (e) => {
    const $themeMode = e.target.checked ? "dark" : "light";
    document.body.setAttribute("data-theme", $themeMode);
  });
}
