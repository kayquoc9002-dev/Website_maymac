import React from "react";

function RowInfoMaterial() {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" />
        </td>
        <td class="border border-gray-300 px-2 py-1.5">KYQ/KJ842...</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          Đèn Sportlight 10w 4000k KJ8421-10-W
        </td>
        <td class="border border-gray-300 px-2 py-1.5">Đèn vách</td>
        <td class="border border-gray-300 px-2 py-1.5">Cái</td>
        <td class="border border-gray-300 px-2 py-1.5">OEM</td>
        <td class="border border-gray-300 px-2 py-1.5">150.000,00</td>
        <td class="border border-gray-300 px-2 py-1.5">Lô/Hạn sử dụng</td>
        <td class="border border-gray-300 px-2 py-1.5">Đang kinh doanh</td>
      </tr>
    </>
  );
}

export default RowInfoMaterial;
