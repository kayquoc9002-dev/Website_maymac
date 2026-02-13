import React from "react";

function RowInfoSupplier({inforSupplier, selectedId, handleSelect}) {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" checked={selectedId.includes(inforSupplier.id)} onChange={() => {handleSelect(inforSupplier.id)}}/>
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{inforSupplier.supplier_id}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {inforSupplier.supplier_name}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{inforSupplier.supplier_type}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforSupplier.supplier_group}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforSupplier.supplier_phoneNumber}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforSupplier.supplier_address}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforSupplier.supplier_status}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">
          <input type="checkbox" class="rounded border-gray-400" checked={inforSupplier.supplier_isCustomer} readOnly/>
        </td>
      </tr>
    </>
  );
}

export default RowInfoSupplier;
