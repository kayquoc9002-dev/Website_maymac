import React from "react";
import { useState, useRef, useEffect } from "react";
import { MdLibraryAdd } from "react-icons/md";
import RowSelectedSupplier from "./RowSelectedSupplier/RowSelectedSupplier";
function TableSelectedSupplier() {
  
  return (
    <>
      {/* <!-- Tabs Navigation --> */}
      <div class="flex border-b border-gray-300 relative">
        <button class="px-4 py-3 text-sm font-semibold text-gray-500 hover:text-gray-700 focus:outline-none">
          Đơn vị chuyển đổi
        </button>
        <button class="px-4 py-3 text-sm font-semibold text-blue-700 border-b-2 border-blue-600 focus:outline-none">
          Nhà cung cấp
        </button>
      </div>

      {/* <!-- Table Container --> */}
      <div class="w-full overflow-x-auto border-l border-r border-b border-gray-300">
        <table class="w-full border-collapse min-w-[900px] h-[100px]">
          <thead>
            {/* <!-- Header Row 1: Column Titles --> */}
            <tr class="bg-gray-100 text-gray-800 text-sm font-semibold">
              <th class="border-t border-b border-r border-gray-300 h-9 w-12 mx-auto text-center ">
                <MdLibraryAdd class="w-6 h-6 text-gray-900 hover:text-gray-600 inline-block"/>
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-1/4 text-center">
                Mã nhà cung cấp
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-1/3 text-center">
                Tên nhà cung cấp
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-1/3 text-center">
                Địa chỉ
              </th>
              <th class="border-t border-b border-gray-300 py-3 w-7"></th>
            </tr>
          </thead>

          {/* <!-- Table Body --> */}
          <tbody class="text-sm">
            <RowSelectedSupplier />
            {/* <!-- Empty Filler Row to match height in image --> */}
            <tr class="h-48">
              <td class="border-r border-gray-300"></td>
              <td class="border-r border-gray-300"></td>
              <td class="border-r border-gray-300"></td>
              <td class="border-r border-gray-300"></td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  );
}

export default TableSelectedSupplier;
