import React from 'react'

function RowVariant({infoGoodVariant, selectedGoodVariant, handleChangeSelectedVariant}) {
  return (
    <>
        <tr class="hover:bg-gray-50">
                <td class="border border-gray-300 p-2 text-center">
                  <div class="flex items-center justify-center gap-2">
                    <input type="checkbox" class="rounded border-gray-400" checked={selectedGoodVariant.current.includes(infoGoodVariant.id)} onChange={() => {handleChangeSelectedVariant(infoGoodVariant.id)}}/>
                  </div>
                </td>
                <td class="border border-gray-300 p-2 font-medium">{infoGoodVariant.variant_id}</td>
                <td class="border border-gray-300 p-2 font-bold text-gray-800">
                  {infoGoodVariant.variant_size}
                </td>
                <td class="border border-gray-300 p-2 font-bold text-gray-800">
                  {infoGoodVariant.variant_color}
                </td>
        </tr>
    </>
  )
}

export default RowVariant;
