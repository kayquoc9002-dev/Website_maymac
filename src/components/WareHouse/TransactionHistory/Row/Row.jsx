import React from "react";

function Row({ detail }) {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" />
        </td>
        <td
          class={
            "border border-gray-300 px-2 py-1.5 font-bold text-center " +
            (detail.type == "IN" ? " text-green-600" : " text-blue-600")
          }
        >
          {detail.type == "IN" ? "Nhập" : "Xuất"}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{detail.warehouse_name}</td>
        <td class="border border-gray-300 px-2 py-1.5 font-bold">{detail.document_code}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">{detail.good_sku}</td>
        <td class="border border-gray-300 px-2 py-1.5 font-bold">{detail.good_name}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">{detail.variant_size}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">{detail.variant_color}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">{detail.amount}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">{detail.good_unit}</td>
        <td class="border border-gray-300 px-2 py-1.5">{detail.batch_code}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">{detail.record_date}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">{detail.record_time}</td>
        <td class="border border-gray-300 px-2 py-1.5">{detail.reason_or_note}</td>
      </tr>
    </>
  );
}

export default Row;
