/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import styled from "styled-components";
import "../style/Detail.scss";

// styled-components 사용
// let 박스 = styled.div`
//   padding: 20px;
// `;

// let 제목 = styled.h4`
//   font-size: 25px;
//   color: ${(props) => props.색상};
// `;

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();

  let [alert, setalert] = useState(true);

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
      console.log("사라졌군");
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
          <h4 className="pt-5">
            {props.shoes.find((상품) => 상품.id == id).title}
          </h4>
          <p>{props.shoes.find((상품) => 상품.id == id).content}</p>
          <p>{props.shoes.find((상품) => 상품.id == id).price}원</p>
          <button className="btn btn-danger">주문하기</button>
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
    </div>
  );
}

export default Detail;
