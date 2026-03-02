import React from "react";

function RowGood({selectedAll, infoRequest, selectedPRI, handleChangeSelectedPRI }) {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <div class="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              class="rounded border-gray-400"
              checked={selectedAll || selectedPRI.includes(infoRequest.id)}
              // checked={selectedPRId == infoRequest.id}
              onChange={() => {
                handleChangeSelectedPRI(infoRequest.id, infoRequest);
              }}
            />
          </div>
        </td>
        <td class="border border-gray-300 p-2 font-medium">
          {infoRequest.pr_code}
        </td>
        <td class="border border-gray-300 p-2 font-medium">
          {infoRequest.good_name}
        </td>
        <td class="border border-gray-300 p-2 font-medium text-center">
         {infoRequest.variant_color} - {infoRequest.variant_size} 
        </td>
        <td class="border border-gray-300 p-2 font-bold text-gray-800">
          {infoRequest.request_warehouse}
        </td>
        <td class="border border-gray-300 p-2">{infoRequest.supplier_name}</td>
        <td class="border border-gray-300 p-2">{infoRequest.requested_qty}</td>
        <td class="border border-gray-300 p-2">{infoRequest.good_unit}</td>
        <td class="border border-gray-300 p-2">{infoRequest.recorded_date}-{infoRequest.recorded_time}</td>
      </tr>
    </>
  );
}

export default RowGood;
