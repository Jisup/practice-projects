export default function ProductListPage({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'ProductListPage';
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    console.log('상품목록 렌더링됩니다 ㅋㅋ');
    this.$target.innerHTML = `
      <h1>상품목록</h1>
    `;
  };
}
