import React from "react";

function RowTransaction({code, type, color, size, warehouse, method, quatity, note}) {
  return (
    <tr class="hover:bg-gray-50 transition-colors">
      {/* <!-- Thời gian --> */}
      <td class="px-4 py-4 whitespace-nowrap text-gray-600">15:05 21-01</td>

      {/* <!-- Mã lô --> */}
      <td class="px-4 py-4 whitespace-nowrap">
        <span class="text-blue-700 font-bold cursor-pointer hover:underline">
          {code}
        </span>
      </td>

      {/* <!-- Loại hàng --> */}
      <td class="px-4 py-4 whitespace-nowrap text-gray-700">{type}</td>

      {/* <!-- Thuộc tính --> */}
      <td class="px-4 py-4 whitespace-nowrap">
        <div class="flex flex-col text-gray-700">
          <div>
            <span class="text-gray-500 text-xs">Màu:</span>{" "}
            <span class="font-medium">{color}</span>
          </div>
          <div>
            <span class="text-gray-500 text-xs">Size:</span>{" "}
            <span class="font-medium">{size}</span>
          </div>
        </div>
      </td>

      {/* <!-- Kho --> */}
      <td class="px-4 py-4 whitespace-nowrap text-gray-600">{warehouse}</td>

      {/* <!-- Loại (Badge) --> */}
      <td class="px-4 py-4 whitespace-nowrap text-center">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
          {method}
        </span>
      </td>

      {/* <!-- Số lượng --> */}
      <td class="px-4 py-4 whitespace-nowrap text-center font-bold text-gray-900">
        {quatity}
      </td>

      {/* <!-- Xóa (Icon) --> */}
      {/* <td class="px-4 py-4 whitespace-nowrap text-center">
        <button class="text-gray-400 hover:text-red-500 transition-colors focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trash-2"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </td> */}
      <td class="px-4 py-4 whitespace-nowrap text-center text-gray-500 text-xs">
        {note}
      </td>
    </tr>
  );
}

export default RowTransaction;
