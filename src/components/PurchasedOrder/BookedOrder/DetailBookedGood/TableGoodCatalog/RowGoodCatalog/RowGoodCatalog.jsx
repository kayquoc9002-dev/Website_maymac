import React from 'react'

function RowGoodCatalog({infoGoodCatalog, handleChangeSelectedGood}) {
  return (
    <>
        <tr class="hover:bg-gray-50">
                <td class="border border-gray-300 p-2 text-center">
                  <div class="flex items-center justify-center gap-2">
                    <input type="checkbox" class="rounded border-gray-400" onChange={(e) => {handleChangeSelectedGood(infoGoodCatalog.id)}}/>
                  </div>
                </td>
                <td class="border border-gray-300 p-2 font-medium">{infoGoodCatalog.good_sku}</td>
                <td class="border border-gray-300 p-2 font-bold text-gray-800">
                  {infoGoodCatalog.good_name}
                </td>
                <td class="border border-gray-300 p-2"></td>
                <td class="border border-gray-300 p-2 font-bold">{infoGoodCatalog.good_unit}</td>
                <td class="border border-gray-300 p-2"></td>
        </tr>
    </>
  )
}

export default RowGoodCatalog
