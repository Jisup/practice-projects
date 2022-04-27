export default function CartPage({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'CartPage';
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    this.$target.innerHTML = `
      <h1>장바구니</h1>
    `;
  };
}
