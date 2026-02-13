import React from 'react'
import RowVariant from './RowVariant'
import { MdLibraryAdd } from "react-icons/md";
import { useState } from 'react';
import { generateId } from '../../../../../Helpers/generateId';
function TableVariant({goodVariants}) {
    // const [count, setCount] = useState(0);
    const [variants, setVariants] = useState([]);
    // console.log(variants);
  const addRow = () => {
    // console.log(goodVariants.current);
    setVariants([...variants, {id: generateId()}])
  };
  const deleteRow = (id) => {
    goodVariants.current = goodVariants.current.filter(item => item.id != id);
    setVariants(goodVariants.current);
  }
  return (
    <>
      {/* <!-- Tabs Navigation --> */}
      <div class="flex border-b border-gray-300 relative">
        <button class="px-4 py-3 text-sm font-semibold text-blue-700 border-b-2 border-blue-600 focus:outline-none">
          Biến thể
        </button>
      </div>

      {/* <!-- Table Container --> */}
      <div class="w-full overflow-x-auto border-l border-r border-b border-gray-300">
        <table class="w-full border-collapse min-w-[900px] h-[300px] overflow-y-auto">
          <thead>
            {/* <!-- Header Row 1: Column Titles --> */}
            <tr class="bg-gray-100 text-gray-800 text-sm font-semibold">
              <th class="border-t border-b border-r border-gray-300 h-9 w-[50px] mx-auto text-center "  onClick={() => {addRow()}}>
                <MdLibraryAdd class="w-6 h-6 text-gray-900 hover:text-gray-600 inline-block"/>
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-70 text-center">
                Mã biến thể
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-70 text-center">
                Kích thước
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-70 text-center">
                Màu sắc
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-70 text-center">
                Giá mua
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-40 text-center">
                Tồn kho
              </th>
              <th class="border-t border-b border-gray-300 py-3 w-[50px]"></th>
            </tr>
          </thead>

          {/* <!-- Table Body --> */}
          <tbody class="text-sm h-[200px] overflow-y-auto">
            {variants.map((item) => (
              <RowVariant key={item.id} id={item.id} goodVariants={goodVariants} deleteRow={deleteRow}/>
            ))}
            {/* <!-- Empty Filler Row to match height in image --> */}
            
          </tbody>
        </table>

      </div>
    </>
  )
}

export default TableVariant
