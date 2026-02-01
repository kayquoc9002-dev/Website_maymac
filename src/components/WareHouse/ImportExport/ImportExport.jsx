import React from "react";
import FormWarehouse from "./FormWarehouse/FormWarehouse";
import { useState } from "react";
import fetchData from "../../../Helpers/fetchData";
import { useEffect } from "react";
import RowTransaction from "./FormWarehouse/RowTransaction/RowTransaction";
function ImportExport() {
  const [listTransactions, setListTransactions] = useState([]);
  console.log(listTransactions);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData("http://localhost:3000/transaction");
      setListTransactions(data);
    }
    getData();
  }, [])
  
  return (
    <>
      <div class="bg-gray-50 min-h-screen">
        <div class="min-h-screen bg-gray-50 font-sans text-gray-800">
          {/* <!-- Header --> */}
          <header class="bg-white border-b border-gray-200 sticky top-0 z-30">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex justify-between items-center h-16">
                {/* <!-- Logo Section --> */}
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-box"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" x2="12" y1="22.08" y2="12" />
                    </svg>
                  </div>
                  <div>
                    <h1 class="text-lg font-bold text-gray-900 leading-tight">
                      QUẢN LÝ NHẬP XUẤT
                    </h1>
                    <p class="text-xs text-gray-500">
                      Hệ thống theo dõi vật tư thông minh
                    </p>
                  </div>
                </div>

                {/* <!-- Search Bar --> */}
                <div class="hidden md:block">
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9CA3AF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      class="bg-gray-100 text-sm rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                      placeholder="Tìm kiếm nhanh..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* <!-- Main Content --> */}
          <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* <!-- Stats Cards --> */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* <!-- Card 1: Import --> */}
              <div class="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-5 shadow-sm">
                <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    TỔNG NHẬP
                  </p>
                  <p class="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>

              {/* <!-- Card 2: Export --> */}
              <div class="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-5 shadow-sm">
                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    TỔNG XUẤT
                  </p>
                  <p class="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>

              {/* <!-- Card 3: Inventory (Blue) --> */}
              <div class="bg-blue-600 rounded-xl border border-blue-600 p-6 flex items-center gap-5 shadow-md text-white">
                <div class="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" x2="12" y1="22.08" y2="12" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-semibold text-blue-100 uppercase tracking-wide">
                    TỒN KHO THỰC TẾ
                  </p>
                  <p class="text-2xl font-bold">0</p>
                </div>
              </div>
            </div>

            {/* <!-- Form Section --> */}
            <FormWarehouse setListTransactions={setListTransactions}/>

            {/* <!-- History Section --> */}
            <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {/* <!-- Header --> */}
              <div class="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-3">
                  <div class="w-1 h-6 bg-blue-600 rounded-full"></div>
                  <h3 class="font-bold text-gray-900">Lịch Sử Giao Dịch</h3>
                  <span class="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded font-medium">
                    0 BẢN GHI
                  </span>
                </div>

                <div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                  {/* <!-- Filter Tabs --> */}
                  <div class="bg-gray-100 p-1 rounded-lg flex text-xs font-medium w-full sm:w-auto">
                    <button class="px-3 py-1.5 bg-white text-blue-600 shadow-sm rounded-md flex-1 sm:flex-none text-center">
                      Tất cả
                    </button>
                    <button class="px-3 py-1.5 text-gray-500 hover:text-gray-700 flex-1 sm:flex-none text-center">
                      Ngày
                    </button>
                    <button class="px-3 py-1.5 text-gray-500 hover:text-gray-700 flex-1 sm:flex-none text-center">
                      Tuần
                    </button>
                    <button class="px-3 py-1.5 text-gray-500 hover:text-gray-700 flex-1 sm:flex-none text-center">
                      Tháng
                    </button>
                    <button class="px-3 py-1.5 text-gray-500 hover:text-gray-700 flex-1 sm:flex-none text-center">
                      Năm
                    </button>
                  </div>

                  {/* <!-- Export Button --> */}
                  <button class="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors w-full sm:w-auto justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Xuất CSV
                  </button>
                </div>
              </div>

              {/* <!-- Table --> */}
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-gray-50 border-b border-gray-200">
                      <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thời gian
                      </th>
                      <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mã lô
                      </th>
                      <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Loại hàng
                      </th>
                      <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thuộc tính
                      </th>
                      <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kho
                      </th>
                      <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Loại
                      </th>
                      <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
                        Số lượng
                      </th>
                      <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                        Ghi chú
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    {listTransactions.map((item) => (
                        <RowTransaction code={item.code} type={item.code} color={item.color} size={item.size} warehouse={item.warehouse} method={item.method} quatity={item.quatity} note={item.note}/>
                    ))}
                    {/* <!-- Empty State --> */}
                    {listTransactions.length == 0 && (
                      <tr>
                        <td
                          colspan="8"
                          class="px-6 py-12 text-center text-gray-400 italic text-sm"
                        >
                          Chưa có giao dịch nào được ghi nhận.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ImportExport;
