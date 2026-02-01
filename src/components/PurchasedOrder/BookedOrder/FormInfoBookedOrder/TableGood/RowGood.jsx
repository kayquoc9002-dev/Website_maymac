import React from "react";

function RowGood() {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <div class="flex items-center justify-center gap-2">
            <span class="text-gray-400 cursor-pointer text-lg leading-none">
              +
            </span>
            <input type="checkbox" class="rounded border-gray-400" />
          </div>
        </td>
        <td class="border border-gray-300 p-2 font-medium">****</td>
        <td class="border border-gray-300 p-2 font-bold text-gray-800">
          Rượu Champagne Veuve Clicquot Brut Yellow - Vàng
        </td>
        <td class="border border-gray-300 p-2"></td>
        <td class="border border-gray-300 p-2 font-bold">chai</td>
        <td class="border border-gray-300 p-2"></td>
      </tr>
    </>
  );
}

export default RowGood;
