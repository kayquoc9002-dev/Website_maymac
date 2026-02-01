import React from "react";
import { useState } from "react";

function Pay() {

    const [active, setActive] = useState(false);

    // let buttonPay = document.querySelectorAll("#button-pay");
  let handleClick = () => {
    setActive(!active)
  }
  return (
    <button
      id="button-pay"
      className= {"border order rounded py-2 text-xs hover:bg-orange-100 hover:font-medium hover:text-orange-500 "+ (active ? "border-orange-400 bg-orange-500 text-white font-bold" : "border-gray-200 text-gray-500")}
      onClick={handleClick}
    >
      Thanh toán khi nhận
    </button>
  );
}

export default Pay;
// "border-orange-400", "text-orange-500"
// border-gray-200 text-gray-500