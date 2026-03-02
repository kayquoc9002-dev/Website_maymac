import React from "react";
import { useNavigate } from "react-router-dom";
function Navigator({ type }) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(`/orderstatus/` + path);
  };
  return (
    <>
      <div class="flex border-b border-gray-300 bg-white">
        <button
          onClick={() => {
            handleNavigate("purchaserequest");
          }}
          class={
            "px-4 py-2   flex items-center focus:outline-none " +
            (type == "purchaserequest"
              ? "text-blue-700 font-bold border-t-2 border-blue-700 bg-white "
              : " text-gray-600 hover:text-blue-600")
          }
        >
          {/* Báo hàng gửi đi */}
          Yêu cầu mua hàng
        </button>
        <button
          onClick={() => {
            handleNavigate("purchaseorder");
          }}
          class={
            "px-4 py-2   flex items-center focus:outline-none " +
            (type == "purchaseorder"
              ? "text-blue-700 font-bold border-t-2 border-blue-700 bg-white "
              : " text-gray-600 hover:text-blue-600")
          }
        >
          Đơn đã đặt
          {/* <span class="ml-2 bg-orange-500 text-white text-[10px] px-1.5 rounded">
                    2
                  </span> */}
        </button>
        <button
          onClick={() => {
            handleNavigate("goodreceipt");
          }}
          class={
            "px-4 py-2   flex items-center focus:outline-none " +
            (type == "goodreceipt"
              ? "text-blue-700 font-bold border-t-2 border-blue-700 bg-white "
              : " text-gray-600 hover:text-blue-600")
          }
        >
          Nhận hàng
        </button>
      </div>
    </>
  );
}

export default Navigator;
