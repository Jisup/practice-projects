export default function ProductDetailPage({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'ProductDetailPage';
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    this.$target.innerHTML = `
      <h1>커피잔 상품 정보</h1>
    `;
  };
}
