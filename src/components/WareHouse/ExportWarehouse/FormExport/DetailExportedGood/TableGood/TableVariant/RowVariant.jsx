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
                <td class="border border-gray-300 p-2 font-medium">{infoGoodVariant.batches.batch_code}</td>
                <td class="border border-gray-300 p-2 font-medium">{infoGoodVariant.variants.variant_id}</td>
                <td class="border border-gray-300 p-2 font-bold text-gray-800 text-center">
                  {infoGoodVariant.variants.variant_size}
                </td>
                <td class="border border-gray-300 p-2 font-bold text-gray-800 text-center">
                  {infoGoodVariant.variants.variant_color}
                </td>
                <td class="border border-gray-300 p-2 font-medium text-center">{infoGoodVariant.quantity}</td>
                 <td class="border border-gray-300 p-2 font-medium text-center">{infoGoodVariant.batches.warehouse}</td>
        </tr>
    </>
  )
}

export default RowVariant;
