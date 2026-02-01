import React from 'react'

function RowInfoGood({infoGood}) {
  return (
    <>
    <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" />
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{infoGood.good_sku}</td>
        <td class="border border-gray-300 px-2 py-1.5">{infoGood.good_barcode}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {infoGood.good_name}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">Đèn vách</td>
        <td class="border border-gray-300 px-2 py-1.5">{infoGood.good_unit}</td>
        <td class="border border-gray-300 px-2 py-1.5">{infoGood.good_brand}</td>
        <td class="border border-gray-300 px-2 py-1.5">{infoGood.good_price}</td>
        <td class="border border-gray-300 px-2 py-1.5">0,00</td>
        <td class="border border-gray-300 px-2 py-1.5">Có</td>
        <td class="border border-gray-300 px-2 py-1.5">Hàng hóa</td>
        <td class="border border-gray-300 px-2 py-1.5">Lô/Hạn sử dụng</td>
        <td class="border border-gray-300 px-2 py-1.5">Đang kinh doanh</td>
      </tr>
    </>
  )
}

export default RowInfoGood
