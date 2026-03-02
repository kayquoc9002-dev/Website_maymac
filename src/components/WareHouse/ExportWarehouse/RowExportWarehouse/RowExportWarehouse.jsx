import React from "react";

function RowExportWarehouse({ exportedRecord, openDetail, selectedId, handleSelect }) {
  return (
    <>
      <tr class="hover:bg-gray-50">
          <td class="border border-gray-300 p-2 text-center">
            <input type="checkbox" class="rounded border-gray-400" />
          </td>
          {/* checked={selectedId.includes(exportedRecord.id)} onChange={() => {handleSelect(exportedRecord.id)}} */}
          <td
            class={
              "border border-gray-300 px-2 py-1.5 font-bold text-center " +
              (exportedRecord.type == "IN" ? " text-green-600" : " text-blue-600")
            }
          >
            {exportedRecord.type == "IN" ? "Nhập" : "Xuất"}
          </td>
          <td class="border border-gray-300 px-2 py-1.5 font-bold">
            {exportedRecord.document_code}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.warehouse_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5  text-blue-600 cursor-pointer hover:underline">
            {exportedRecord.good_sku}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.good_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.variant_size}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.variant_color}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.amount}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.good_unit}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.employee_id}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.employee_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.supplier_or_object_id}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.supplier_or_object_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.supplier_or_object_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.record_date}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.record_time}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {exportedRecord.note}
          </td>
        </tr>
    </>
  );
}

export default RowExportWarehouse;
