import product from "./product.json" assert { type: "json" };
import details from "./product-details.json" assert { type: "json" };

// const API_END_POINT =
//   "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";

export const request = async (state) => {
  // const res = await fetch(`
  //   ${API_END_POINT}
  //   ${productId ? `/${productId}` : ""}
  // `);
  // switch (res.status / 100) {
  //   case 5:
  //     throw new Error(`Server error with status code ${res.status}`);
  //   case 4:
  //     throw new Error(`Client error with status code ${res.status}`);
  //   case 3:
  //     throw new Error(`Redirect error with status code ${res.status}`);
  //   default:
  //     return res.json();
  // }
  const res = !state ? product : details[state.productId];

  return res;
};
