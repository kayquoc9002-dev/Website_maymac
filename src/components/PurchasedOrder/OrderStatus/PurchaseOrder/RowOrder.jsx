import React from "react";

function RowOrder({order}) {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" />
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{order.recorded_date} - {order.recorded_time}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {order.po_code}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{order.orderer_name}</td>
        <td class="border border-gray-300 px-2 py-1.5">{order.order_warehouse}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-500 text-center">
          Đang thực hiện
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {order.note}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {order.note}
        </td>
      </tr>
    </>
  );
}

export default RowOrder;
