import React from "react";
import { useState } from "react";

function RowTableProduct({ infor, kho, calculateTotal, handleChangeRow }) {
  const [id] = useState(() => Date.now());
  const [number, setNumber] = useState(0);
  function updateNumber(e) {
    if (e.target.value >= 0) {
      calculateTotal(e.target.value * infor.gia);
      setNumber(parseInt(e.target.value));
      handleChangeRow(id, infor.mau, parseInt(e.target.value), kho, infor.gia, infor.gia*parseInt(e.target.value))
    }
  }
  let totalCost = number * infor.gia;

  return (
    <>
      <tr class="group hover:bg-gray-50">
        {/* Màu sắc */}
        <td class="py-2 text-left">
          <div class="w-full border rounded px-2 py-1" onchange="updateTotal()">
            {infor.mau}
          </div>
        </td>

        {/* Số lượng */}
        <td class="py-2">
          <input
            type="number"
            value={number}
            class="w-16 border rounded px-2 py-1 text-center"
            onChange={(e) => {
              updateNumber(e);
            }}
          />
        </td>

        {/* Khổ vải */}
        <td class="py-2">
          <div
            class="w-20 border rounded px-2 py-1 text-center"
            onchange="updateTotal()"
          >
            {kho}
          </div>
        </td>

        {/* Đơn giá */}
        <td class="py-2">
          <div
            class="w-24 border rounded px-2 py-1 text-center"
            onchange="updateTotal()"
          >
            {new Intl.NumberFormat('vi-VN').format(infor.gia)}
          </div>
        </td>

        <td class="py-2 font-semibold subtotal">{new Intl.NumberFormat('vi-VN').format(totalCost)}</td>
      </tr>
    </>
  );
}

export default RowTableProduct;
