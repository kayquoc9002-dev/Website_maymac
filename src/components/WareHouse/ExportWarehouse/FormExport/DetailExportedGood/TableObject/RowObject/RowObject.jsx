import React from 'react'

function RowObject({infoObject, handleSelectObject}) {
  return (
    <>
      <tr class="bg-blue-100 hover:bg-blue-200">
        <td class="border-r border-b border-gray-300 p-2 text-center">
          <input
            type="radio"
            name="objectSupplier"
            defaultChecked = {false}
            onClick={(e) => {handleSelectObject(e, infoObject)}}
            class="text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
        </td>
        <td class="border-r border-b border-gray-300 p-2">{infoObject.supplier_id}</td>
        <td class="border-r border-b border-gray-300 p-2">{infoObject.supplier_name}</td>
        <td class="border-r border-b border-gray-300 p-2">Nhà cung cấp</td>
        <td class="border-r border-b border-gray-300 p-2">{infoObject.supplier_phoneNumber}</td>
        <td class="border-r border-b border-gray-300 p-2">{infoObject.supplier_address}</td>
      </tr>
    </>
  )
}

export default RowObject
