import React from "react";

function RowSupplier({infoSupplier, handleSelectSupplier, listId}) {
  
  return (
    <>
      <tr class="bg-blue-100 hover:bg-blue-200">
        <td class="border-r border-b border-gray-300 p-2 text-center">
          <input
            type="checkbox"
            defaultChecked = {false}
            checked={listId.includes(infoSupplier.id)}
            onClick={(e) => {handleSelectSupplier(e, infoSupplier)}}
            class="text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
        </td>
        <td class="border-r border-b border-gray-300 p-2">{infoSupplier.supplier_id}</td>
        <td class="border-r border-b border-gray-300 p-2">{infoSupplier.supplier_name}</td>
        <td class="border-r border-b border-gray-300 p-2">Nhà cung cấp fuck</td>
        <td class="border-r border-b border-gray-300 p-2">{infoSupplier.supplier_phoneNumber}</td>
        <td class="border-b border-gray-300 p-2"></td>
      </tr>
    </>
  );
}

export default RowSupplier;
