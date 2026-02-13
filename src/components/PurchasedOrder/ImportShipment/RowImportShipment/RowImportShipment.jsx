import React from 'react'

function RowImportShipment({importedShipment, selectedId, handleSelect}) {
  return (
    <>
        <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" checked={selectedId.includes(importedShipment.id)} onChange={() => {handleSelect(importedShipment.id)}}/>
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{importedShipment.importshipment_date}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {importedShipment.importshipment_id}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{importedShipment.received_employeeName}</td>
        <td class="border border-gray-300 px-2 py-1.5">{importedShipment.supplier_name}</td>
        <td class="border border-gray-300 px-2 py-1.5">1.080.000,00</td>
        <td class="border border-gray-300 px-2 py-1.5 text-green-600">{importedShipment.status}</td>
        <td class="border border-gray-300 px-2 py-1.5">
          Đặt hàng nhà cung cấp
        </td>
      </tr>
    </>
  )
}
// text-orange-500
export default RowImportShipment
