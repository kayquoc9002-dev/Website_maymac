import React from 'react'

function RowImportWarehouse({importedRecord, selectedId, handleSelect}) {
  return (
    <>
      <tr class="hover:bg-gray-50">
          <td class="border border-gray-300 p-2 text-center">
            <input type="checkbox" class="rounded border-gray-400" />
          </td>
          {/* checked={selectedId.includes(importedRecord.id)} onChange={() => {handleSelect(importedRecord.id)}} */}
          <td
            class={
              "border border-gray-300 px-2 py-1.5 font-bold text-center " +
              (importedRecord.type == "IN" ? " text-green-600" : " text-blue-600")
            }
          >
            {importedRecord.type == "IN" ? "Nhập" : "Xuất"}
          </td>
          <td class="border border-gray-300 px-2 py-1.5 font-bold">
            {importedRecord.document_code}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.warehouse_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5  text-blue-600 cursor-pointer hover:underline">
            {importedRecord.good_sku}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.good_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.variant_size}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.variant_color}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.amount}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.good_unit}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.employee_id}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.employee_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.supplier_or_object_id}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.supplier_or_object_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.record_date}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.record_time}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.note}
          </td>
        </tr>
    </>
  )
}

export default RowImportWarehouse;
