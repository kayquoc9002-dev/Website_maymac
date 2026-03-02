import React from 'react'

function RowGood({infoGoodCatalog,selectedGoodId, handleChangeSelectedGood}) {
  return (
    <>
        <tr class="hover:bg-gray-50">
                <td class="border border-gray-300 p-2 text-center">
                  <div class="flex items-center justify-center gap-2">
                    <input type="checkbox" class="rounded border-gray-400" checked={selectedGoodId == infoGoodCatalog.id} onChange={() => {handleChangeSelectedGood(infoGoodCatalog.id)}}/>
                  </div>
                </td>
                <td class="border border-gray-300 p-2 font-medium">{infoGoodCatalog.good_sku}</td>
                <td class="border border-gray-300 p-2 font-bold text-gray-800">
                  {infoGoodCatalog.good_name}
                </td>
                <td class="border border-gray-300 p-2 font-medium"></td>
        </tr>
    </>
  )
}

export default RowGood;
