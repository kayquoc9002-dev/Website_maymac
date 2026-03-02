import React from "react";

function Row({detail}) {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" />
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.batch_code}
        </td>
        <td class="border border-gray-300 px-2 py-1.5  text-blue-600 cursor-pointer hover:underline">
          {detail.warehouse}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.total_product_types}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.total_quantity_in_batch}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.imported_date}
        </td>
        <td class="border border-gray-300 px-2 py-1.5 font-bold">
          {detail.imported_date}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.good_group}
        </td>
      </tr>
    </>
  )
}

export default Row;
