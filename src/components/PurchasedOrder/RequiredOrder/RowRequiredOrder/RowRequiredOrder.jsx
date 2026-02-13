import React from 'react'

function RowRequiredOrder({bookedOrder, selectedId, handleSelect}) {
  return (
    <>
        
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" checked={selectedId.includes(bookedOrder.id)} onChange={() => {handleSelect(bookedOrder.id)}}/>
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{bookedOrder.order_date}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {bookedOrder.order_code}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{bookedOrder.orderer_name}</td>
        <td class="border border-gray-300 px-2 py-1.5">{bookedOrder.supplier_name}</td>
        <td class="border border-gray-300 px-2 py-1.5">{formatCurrency(bookedOrder.totalPrice)}</td>
        <td class="border border-gray-300 px-2 py-1.5">{bookedOrder.order_status}</td>
        <td class="border border-gray-300 px-2 py-1.5">
          {bookedOrder.order_note}
        </td>
      </tr>
    </>
  )
}

export default RowRequiredOrder;
