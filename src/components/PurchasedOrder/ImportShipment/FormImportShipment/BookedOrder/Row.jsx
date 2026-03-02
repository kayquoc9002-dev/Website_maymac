import React from "react";

function Row({ order, selectedId, handleSelect }) {
  // const handleChange = (id) => {
  //   handleSelect(id);
  // };
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <div class="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              class="rounded border-gray-400"
              checked={selectedId == order.id}
              onChange={() => handleSelect(order.id, order)}
            />
          </div>
        </td>
        <td class="border border-gray-300 p-2 font-medium">
          {order.po_code}
        </td>
        <td class="border border-gray-300 p-2 font-bold">{order.recorded_date}</td>
        <td class="border border-gray-300 p-2">{order.orderer_name}</td>
        <td class="border border-gray-300 p-2">{order.supplier_name}</td>
      </tr>
    </>
  );
}

export default Row;
