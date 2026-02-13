import React from "react";

function RowExportWarehouse({ exportedRecord, openDetail }) {
  return (
    <>
      {exportedRecord.status == "Xuất" && (
        <tr class="hover:bg-gray-50">
          <td class="border border-gray-300 p-2 text-center">
            <input type="checkbox" class="rounded border-gray-400" />
          </td>
          <td
            class={
              "border border-gray-300 px-2 py-1.5 font-bold text-center " +
              (exportedRecord.status == "Nhập"
                ? " text-green-600"
                : " text-blue-600")
            }
          >
            {exportedRecord.status}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.record_date}
          </td>
          <td class="border border-gray-300 px-2 py-1.5  text-blue-600 cursor-pointer hover:underline">
            {exportedRecord.record_id}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.record_time}
          </td>
          <td class="border border-gray-300 px-2 py-1.5 font-bold">
            {exportedRecord.warehouse_name ? exportedRecord.warehouse_name : ""}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.employee_id}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.employee_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.object_id ? exportedRecord.object_id : ""}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.object_name ? exportedRecord.object_name : ""}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.object_type ? exportedRecord.object_type : ""}
          </td>
          <td class="border border-gray-300 px-2 py-1.5" onClick={openDetail}>
            <button>Chi tiết</button>
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.note}
          </td>
        </tr>
      )}
    </>
  );
}

export default RowExportWarehouse;
