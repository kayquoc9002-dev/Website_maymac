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
            (detail.status == "Nhập" ? " text-green-600" : " text-blue-600")
          }
        >
          {detail.status}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{detail.record_date}</td>
        <td class="border border-gray-300 px-2 py-1.5  text-blue-600 cursor-pointer hover:underline">
          {detail.record_id}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{detail.record_time}</td>
        <td class="border border-gray-300 px-2 py-1.5">{detail.employee_id}</td>
        <td class="border border-gray-300 px-2 py-1.5 font-bold">
          {detail.warehouse_name ? detail.warehouse_name : ""}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.employee_name}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.object_id ? detail.object_id : ""}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.object_name ? detail.object_name : ""}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {detail.object_type ? detail.object_type : ""}
        </td>
        <td class="border border-gray-300 px-2 py-1.5"></td>
        <td class="border border-gray-300 px-2 py-1.5">{detail.note}</td>
      </tr>
    </>
  );
}

export default Row;
