import React from "react";

function Row({detail, handleSelect, selectedId}) {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400"  checked={selectedId.includes(detail.id)} onChange={() => {handleSelect(detail.id)}}/>
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.warehouse}
        </td>
        <td class="border border-gray-300 px-2 py-1.5  text-blue-600 cursor-pointer hover:underline">
          {detail.good_sku}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.good_name}
        </td>
        <td class="border border-gray-300 px-2 py-1.5 font-bold">
          {detail.good_barcode}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.good_group}
        </td>

        <td class="border border-gray-300 px-2 py-1.5">
          {detail.good_unit}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.total_quantity}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.good_price}
        </td>
         <td class="border border-gray-300 px-2 py-1.5">
          
        </td>
      </tr>
    </>
  )
}

export default Row;
