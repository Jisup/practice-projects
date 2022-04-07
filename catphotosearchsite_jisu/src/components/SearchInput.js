export default function SearchInput({ $app, onSearch, onClick }) {
  this.$target = document.createElement("section");
  this.$target.className = "SearchSection";

  this.$input = document.createElement("input");
  this.$input.type = "text";
  this.$input.className = "SearchInput";
  this.$input.placeholder = "고양이를 검색해보세요.|";

  this.$button = document.createElement("button");
  this.$button.className = "SearchRandom";
  this.$button.innerHTML = `<span>╅</span></br>랜덤냐옹`;

  this.$target.appendChild(this.$input);
  this.$target.appendChild(this.$button);
  $app.appendChild(this.$target);

  this.$target.focus();

  this.render = () => {};

  this.onSearch = onSearch;
  this.onClick = onClick;

  this.$input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      this.onSearch(e.target.value);
    }
  });

  this.$input.addEventListener("click", (e) => {
    e.target.value = "";
  });

  this.$button.addEventListener("click", () => {
    this.onClick();
  });

  this.render();
}
