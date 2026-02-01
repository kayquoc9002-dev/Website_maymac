import React from "react";

function RowInfoOrderStatus() {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" />
        </td>
        <td class="border border-gray-300 px-2 py-1.5">27/01/2026</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          ABCD-PDH000025
        </td>
        <td class="border border-gray-300 px-2 py-1.5">testdemo</td>
        <td class="border border-gray-300 px-2 py-1.5">Anh Sang</td>
        <td class="border border-gray-300 px-2 py-1.5">1.080.000,00</td>
        <td class="border border-gray-300 px-2 py-1.5 text-orange-500">
          Chưa thực hiện
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          Đặt hàng nhà cung cấp
        </td>
      </tr>
    </>
  );
}

export default RowInfoOrderStatus;
