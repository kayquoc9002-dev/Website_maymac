import React from "react";
import {formatCurrency} from '../../../../../../Helpers/formatCurrency'
function RowImportedGood({detailGood}) {
    // console.log(detailGood);
    const totalPrice = parseInt(detailGood.quatity, 10)*detailGood.good_price;
    const taxMount = totalPrice*(parseInt(detailGood.good_tax)/100);
    const finalPrice = totalPrice + taxMount;
  return (

    <>
      {/* <tr class="bg-white">
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8">
            <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
              *
            </div>
            <input type="text" class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
              *
            </div>
            <input type="text" class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
              *
            </div>
            <input type="text" class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
              *
            </div>
            <input type="text" class="w-full h-full px-1 outline-none" />
          </div>
        </td>
      </tr> */}
<tr className="bg-white">
    <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8"><input type="text" value={detailGood.good_sku} class="w-full h-full px-1 outline-none" /></div>
        </td>
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8">
            <input type="text" value={detailGood.good_name} class="w-full h-full px-1 outline-none" /></div>
        </td>
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8"></div>
        </td>
      <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text"  class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" value={detailGood.good_unit} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text"  value={detailGood.quatity} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" value={formatCurrency(detailGood.good_price)} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" value={formatCurrency(totalPrice)} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" value={detailGood.good_tax + "%"} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" value={formatCurrency(taxMount)} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" value={formatCurrency(finalPrice)} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" value={detailGood.good_note} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
</tr>
    </>
  );
}

export default RowImportedGood;
