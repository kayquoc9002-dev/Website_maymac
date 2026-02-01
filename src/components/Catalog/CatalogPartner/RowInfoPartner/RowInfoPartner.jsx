import React from "react";

function RowInfoPartner({inforPartner, selectedId, handleSelect}) {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" checked={selectedId.includes(inforPartner.id)} onChange={() => {handleSelect(inforPartner.id)}}/>
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{inforPartner.partner_id}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {inforPartner.partner_name}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{inforPartner.partner_phoneNumber}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforPartner.partner_group}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforPartner.partner_id}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforPartner.partner_address}</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforPartner.partner_status}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">
          <input type="checkbox" class="rounded border-gray-400" checked={inforPartner.partner_isCustomer}/>
        </td>
      </tr>
    </>
  );
}

export default RowInfoPartner;
