import React from "react";

function Row({detail}) {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" />
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
          {detail.quatity}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.good_price}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.good_tax}%
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.good_price * detail.quatity * (1+detail.good_tax/100)}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          
        </td>
         <td class="border border-gray-300 px-2 py-1.5">
          
        </td>
      </tr>
    </>
  )
}

export default Row;
