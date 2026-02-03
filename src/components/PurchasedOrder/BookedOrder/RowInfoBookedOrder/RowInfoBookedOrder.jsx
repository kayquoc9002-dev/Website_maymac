import React from 'react'
import {formatCurrency} from '../../../../Helpers/formatCurrency'

function RowInfoBookedOrder({bookedOrder}) {
  return (
    <>
        {/* <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" checked={selectedId.includes(inforPartner.id)} onChange={() => {handleSelect(inforPartner.id)}}/>
        </td>
        <td class="border border-gray-300 px-2 py-1.5">27/01/2026</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          ABCD-PDH000025
        </td>
        <td class="border border-gray-300 px-2 py-1.5">testdemo</td>
        <td class="border border-gray-300 px-2 py-1.5">{inforPartner.partner_phoneNumber}</td>
        <td class="border border-gray-300 px-2 py-1.5">Anh Sang</td>
        <td class="border border-gray-300 px-2 py-1.5">1.080.000,00</td>
        <td class="border border-gray-300 px-2 py-1.5">Chưa thực hiện</td>
        <td class="border border-gray-300 px-2 py-1.5 text-center">
          Đặt hàng nhà cung cấp
        </td>
      </tr> */}
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400"/>
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{bookedOrder.order_date}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {bookedOrder.order_code}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{bookedOrder.orderer_name}</td>
        <td class="border border-gray-300 px-2 py-1.5">{bookedOrder.supplier.name}</td>
        <td class="border border-gray-300 px-2 py-1.5">{formatCurrency(bookedOrder.totalPrice)}</td>
        <td class="border border-gray-300 px-2 py-1.5">{bookedOrder.order_status}</td>
        <td class="border border-gray-300 px-2 py-1.5">
          {bookedOrder.order_note}
        </td>
      </tr>
      {/* <tr class="hover:bg-blue-50 bg-[#eef4ff]">
            <td class="border border-gray-300 p-1 text-center">
              <input type="checkbox" class="form-checkbox h-3 w-3 text-blue-600">
            </td>
            <td class="border border-gray-300 p-1 text-center">27/01/2026</td>
            <td class="border border-gray-300 p-1 text-left text-blue-600 cursor-pointer hover:underline">ABCD-PDH000025</td>
            <td class="border border-gray-300 p-1 text-left">testdemo</td>
            <td class="border border-gray-300 p-1 text-left">Anh Sang</td>
            <td class="border border-gray-300 p-1 text-right">1.080.000,00</td>
            <td class="border border-gray-300 p-1 text-left text-orange-500">Chưa thực hiện</td>
            <td class="border border-gray-300 p-1 text-left">Đặt hàng nhà cung cấp</td>
          </tr> */}
    </>
  )
}

export default RowInfoBookedOrder
