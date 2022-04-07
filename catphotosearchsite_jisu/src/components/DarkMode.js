export default function DarkMode({ $app }) {
  this.$target = document.createElement("label");
  this.$target.className = "DarkModeToggle";

  this.$checkbox = document.createElement("input");
  this.$checkbox.type = "checkbox";

  this.$toggle = document.createElement("span");
  this.$toggle.className = "slider round";

  this.$target.appendChild(this.$checkbox);
  this.$target.appendChild(this.$toggle);

  $app.appendChild(this.$target);

  this.$target.addEventListener("click", (e) => {});
}

// $darkModeToggler.onclick = () => {
//   let originTheme = document.body.dataset.theme;

//   if (!originTheme) {
//     originTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
//       ? 'dark'
//       : 'light';
//   }

//   let toggledTheme = originTheme === 'dark' ? 'light' : 'dark';

//   document.body.setAttribute('data-theme', toggledTheme);
// };
