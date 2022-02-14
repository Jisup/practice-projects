import React from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart() {
  let state = useSelector((state) => state.reducer);
  let isAlert = useSelector((state) => state.reducer2);

  let dispatch = useDispatch();

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {state.map((shoe, idx) => {
            return (
              <tr key={idx}>
                <td>{shoe.id}</td>
                <td>{shoe.title}</td>
                <td>{shoe.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: "수량증가", payload: shoe.id });
                    }}
                  >
                    +
                  </button>
                  &nbsp;
                  <button
                    onClick={() => {
                      dispatch({ type: "수량감소", payload: shoe.id });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {isAlert === true ? (
        <div className="my-alert">
          <p>지금 구매하시면 신규할인 20%</p>
          <hr></hr>
          <button
            onClick={() => {
              dispatch({ type: "열자" });
            }}
          >
            🔺
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: "닫자" });
          }}
        >
          🔻
        </button>
      )}
    </div>
  );
}

// 옛날 문법!
// function state를props화(state) {
//   return {
//     state: state.reducer,
//     isAlert: state.reducer2,
//   };
// }
// export default connect(state를props화)(Cart);

export default Cart;
