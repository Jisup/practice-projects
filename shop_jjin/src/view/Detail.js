/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../style/Detail.scss";
import { CSSTransition } from "react-transition-group";
import { connect, useDispatch, useSelector } from "react-redux";

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();

  let [alert, setalert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  const nodeRef = React.useRef(null);

  let findProduct = props.shoes.find((상품) => 상품.id == id);

  let dispatch = useDispatch();

  /*
    useEffect 렌더링될 때마다 어떠한 작업을 수행하기 위한 Hook
    - 여러개 사용가능
    - 그냥 작성한 코드 : 현재 컴포넌트가 만들어질때 실행됨. componentDidMount
    - 내부에 return () => {} : 현재 컴포넌트가 사라질때 실행됨. componentWillUnmount
    - [] : 조건. []안에 들어가는 state가 변경될때만 실행됨. 빈배열일경우 단 한번만 실행되고 update시엔 실행안됨을 의미. componentDidUpdate
  */

  useEffect(() => {
    let timer = setTimeout(() => {
      setalert(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <div className="container">
      <div className="title">
        <h3 className="red">Detail</h3>
      </div>

      {alert ? (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (props.shoes.filter((상품) => 상품.id == id)[0].id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}원</p>
          <p>재고 : {props.재고[findProduct.id]}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch({
                type: "재고감소",
                payload: findProduct.id,
              });

              dispatch({
                type: "항목추가",
                payload: {
                  title: findProduct.title,
                  quan: 1,
                },
              });

              history.push("/cart");
            }}
          >
            주문하기
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              탭변경(0);
            }}
          >
            상품설명
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              탭변경(1);
            }}
          >
            배송정보
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition
        nodeRef={nodeRef}
        in={스위치}
        classNames="wow"
        timeout={500}
      >
        <div ref={nodeRef}>
          <TabContent
            탭={탭}
            스위치={스위치}
            스위치변경={스위치변경}
          ></TabContent>
        </div>
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.탭 === 0) {
    return <div>내용0</div>;
  } else if (props.탭 === 1) {
    return <div>내용1</div>;
  } else if (props.탭 === 2) {
    return <div>내용2</div>;
  }
}

// function state를props화(state) {
//   return {
//     state: state.reducer,
//   };
// }
// export default connect(state를props화)(Detail);

export default Detail;
