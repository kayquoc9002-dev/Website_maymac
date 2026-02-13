import React from 'react'

function RowImportWarehouse({importedRecord}) {
  return (
    <>
      {importedRecord.status == "Nhập" && (
        <tr class="hover:bg-gray-50">
          <td class="border border-gray-300 p-2 text-center">
            <input type="checkbox" class="rounded border-gray-400" />
          </td>
          <td
            class={
              "border border-gray-300 px-2 py-1.5 font-bold text-center " +
              (importedRecord.status == "Nhập"
                ? " text-green-600"
                : " text-blue-600")
            }
          >
            {importedRecord.status}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.record_date}
          </td>
          <td class="border border-gray-300 px-2 py-1.5  text-blue-600 cursor-pointer hover:underline">
            {importedRecord.record_id}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.record_time}
          </td>
          <td class="border border-gray-300 px-2 py-1.5 font-bold">
            {importedRecord.warehouse_name ? importedRecord.warehouse_name : ""}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.employee_id}
          </td>
          
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.employee_name}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.object_id ? importedRecord.object_id : ""}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.object_name ? importedRecord.object_name : ""}
          </td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.object_type ? importedRecord.object_type : ""}
          </td>
          <td class="border border-gray-300 px-2 py-1.5"></td>
          <td class="border border-gray-300 px-2 py-1.5">
            {importedRecord.note}
          </td>
        </tr>
      )}
    </>
  )
}

export default RowImportWarehouse;
