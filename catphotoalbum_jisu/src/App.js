export default function App($app) {
  this.$target = document.createElement("nav");
  this.$target.className = "Breadcrumb";

  $app.appendChild(this.$target);
}
