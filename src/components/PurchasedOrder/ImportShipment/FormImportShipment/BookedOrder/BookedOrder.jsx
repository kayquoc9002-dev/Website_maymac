import Row from "./Row";
import {orderService} from '../../../../../Helpers/functionsSupabase'
import { useState, useEffect } from "react";
function BookedOrder({openTableOrder, handleSelect  }) {

    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    useEffect(() => {
    const getData = async () => {
      // const result = await fetchData(purchaseOrder);
      try{
        const result = await orderService.getAll();
        setData(result);
      } catch(error){
        console.log("Lỗi!", error);
      }
      
    }
    getData();
   }, [])
  return (
    <>
          {/* <!-- Header --> */}
          <div className="bg-white w-full max-w-6xl shadow-xl rounded-sm flex flex-col border border-gray-300 z-10 overflow-y-auto h-[80vh]">
          <div class="bg-gray-100 px-4 py-2 flex justify-between items-center border-b border-gray-300">
            <h2 class="font-bold text-base text-gray-800">Chọn phiếu đặt hàng</h2>
            <div class="flex space-x-2 text-gray-400">
              <button class="hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </button>
              <button onClick={openTableOrder} class="hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Filters Section --> */}
          <div class="p-4 space-y-3 border-b border-gray-300">
            <div class="flex flex-wrap items-center gap-4 text-sm">
              {/* <!-- Filter Group 1 --> */}
              <div class="flex items-center gap-2">
                <label class="whitespace-nowrap font-medium">
                  Nhóm hàng hóa
                </label>
                <div class="relative">
                  <select class="border border-blue-400 rounded px-2 py-1.5 w-48 text-blue-700 font-medium bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none pr-8">
                    <option>Tất cả</option>
                    <option>Điện tử</option>
                    <option>Gia dụng</option>
                  </select>
                  <div class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
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
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Filter Group 2 --> */}
              <div class="flex items-center gap-2">
                <label class="whitespace-nowrap font-medium">
                  Nhà cung cấp
                </label>
                <div class="flex items-center border border-gray-300 rounded overflow-hidden">
                  <select class="px-2 py-1.5 w-40 bg-white focus:outline-none appearance-none text-gray-600">
                    <option>Tất cả</option>
                  </select>
                  <button class="px-2 py-1.5 bg-gray-50 border-l border-gray-300 text-gray-500 hover:bg-gray-100">
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
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Search Input --> */}
              <div class="flex-grow flex gap-2">
                <input
                  type="text"
                  placeholder="Nhập mã SKU, tên hàng hóa"
                  class="border border-gray-300 rounded px-3 py-1.5 flex-grow focus:outline-none focus:border-blue-500"
                />
                <button class="bg-[#2A3255] hover:bg-[#1e2440] text-white px-4 py-1.5 rounded flex items-center gap-2 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Tìm kiếm
                </button>
              </div>
            </div>

            <div class="text-blue-600 text-sm italic">
              0 mẫu mã (0 hàng hóa) đã chọn
            </div>
          </div>

          {/* <!-- Table Section --> */}
          <div class="flex-grow overflow-auto bg-white relative px-1">
            <table class="w-full border-collapse text-sm">
              <thead class="bg-gray-100 sticky top-0 z-10 shadow-sm">
                <tr>
                  <th class="border border-gray-300 p-2 w-10 text-center">
                    <input type="checkbox" class="rounded border-gray-400" />
                  </th>
                  <th class="border border-gray-300 p-2 text-left font-semibold text-gray-700 w-50">
                    Mã phiếu đặt
                  </th>
                  <th class="border border-gray-300 p-2 text-left font-semibold text-gray-700 w-34">
                    Ngày đặt
                  </th>
                  <th class="border border-gray-300 p-2 text-left font-semibold text-gray-700 w-40">
                    Người đặt
                  </th>
                  <th class="border border-gray-300 p-2 text-left font-semibold text-gray-700 ">
                    Nhà cung cấp
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {data.map(item => (
                    <Row order={item} selectedId={selectedId} setSelectedId={setSelectedId}/>
                ))}
              </tbody>
            </table>
          </div>

          {/* <!-- Pagination --> */}
          <div class="bg-white p-2 border-t border-gray-300 flex items-center gap-1 text-sm">
            <button class="p-1 border border-gray-300 rounded hover:bg-gray-100 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            </button>
            <button class="p-1 border border-gray-300 rounded hover:bg-gray-100 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <span class="ml-2">Trang</span>
            <input
              type="text"
              value="1"
              class="w-10 text-center border border-gray-300 rounded py-0.5"
            />
            <span class="mr-2">trên 436</span>

            <button class="p-1 border border-gray-300 rounded hover:bg-gray-100 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <button class="p-1 border border-gray-300 rounded hover:bg-gray-100 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </button>
            <button class="p-1 border border-gray-300 rounded hover:bg-gray-100 text-blue-600 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3" />
              </svg>
            </button>

            <select class="ml-2 border border-gray-300 rounded py-0.5 px-1 bg-white">
              <option>50</option>
              <option>100</option>
            </select>
          </div>

          {/* <!-- Footer --> */}
          <div class="bg-white p-4 border-t border-gray-300 flex justify-end items-center gap-3">
            <button class="px-4 py-2 border border-gray-300 rounded text-gray-600 font-medium hover:bg-gray-50 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Xuất khẩu
            </button>
            <button onClick={() => {handleSelect(selectedId), openTableOrder()}} disabled={selectedId == ""} class="px-6 py-2 bg-[#2A3255] hover:bg-[#1e2440] text-white rounded font-medium flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Chọn
            </button>
            <button class="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Hủy bỏ
            </button>
          </div>
          </div>
    </>
  );
}

export default BookedOrder;
