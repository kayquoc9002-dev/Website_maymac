import React from "react";

function RowInfoCustomer({handleSelect, inforCustomer, selectedId}){

  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" checked={selectedId.includes(inforCustomer.id)} onChange={() => {handleSelect(inforCustomer.id)}}/>
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_id}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {inforCustomer.customer_name}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_phoneNumber}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_email}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">
          <input type="checkbox" class="rounded border-gray-400" checked={inforCustomer.customer_isSupplier}/>
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_addressCity}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_addressDistrict}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_addressWard}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_addressDetail}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_birthday}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_group}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_note}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_staff}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_staff}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforCustomer.customer_status}</td>
      </tr>
    </>
  );
}

export default RowInfoCustomer;
