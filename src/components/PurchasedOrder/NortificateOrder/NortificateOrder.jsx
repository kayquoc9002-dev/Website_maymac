import React from 'react'

function NortificateOrder() {
  return (
    <div>
      <div class="bg-white w-full max-w-6xl shadow-xl rounded-sm flex flex-col border border-gray-300 z-10">
        
        {/* <!-- Modal Header --> */}
        <div class="flex justify-between items-center bg-gray-100 px-4 py-2 border-b border-gray-300">
            <h2 class="font-bold text-gray-800 text-base">Chọn phiếu báo hàng</h2>
            <div class="flex items-center gap-2">
                <button class="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                </button>
                <button class="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>

        {/* <!-- Filter Bar --> */}
        <div class="p-3 flex flex-wrap items-center gap-3 text-sm border-b border-gray-200">
            <div class="relative flex-grow max-w-md">
                <input type="text" placeholder="Chọn nhà cung cấp" class="w-full border border-blue-500 rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                <span class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
            </div>

            <div class="relative">
                <select class="border border-gray-300 rounded px-2 py-1.5 pr-8 bg-white focus:outline-none focus:border-blue-500">
                    <option>Tháng này</option>
                </select>
            </div>

            <div class="flex items-center gap-2">
                <span class="text-gray-600">Từ ngày</span>
                <div class="relative">
                    <input type="text" value="01/01/2026" class="border border-gray-300 rounded px-2 py-1.5 w-28 text-center focus:outline-none focus:border-blue-500"/>
                    <span class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </span>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <span class="text-gray-600">Đến ngày</span>
                <div class="relative">
                    <input type="text" value="31/01/2026" class="border border-gray-300 rounded px-2 py-1.5 w-28 text-center focus:outline-none focus:border-blue-500"/>
                    <span class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </span>
                </div>
            </div>

            <button class="flex items-center gap-1 border border-blue-900 text-blue-900 px-3 py-1.5 rounded font-medium hover:bg-blue-50 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                Lấy dữ liệu
            </button>
        </div>

        {/* <!-- Table Area --> */}
        <div class="flex-grow overflow-x-auto min-h-[400px] flex flex-col">
            <table class="w-full border-collapse min-w-[1000px]">
                <thead>
                    {/* <!-- Header Titles --> */}
                    <tr class="bg-gray-100 text-gray-700 text-xs font-bold">
                        <th class="border border-gray-300 p-2 w-10 text-center">
                            <input type="checkbox" class="rounded border-gray-400"/>
                        </th>
                        <th class="border border-gray-300 p-2 w-32">Ngày báo hàng</th>
                        <th class="border border-gray-300 p-2 w-32">Số phiếu</th>
                        <th class="border border-gray-300 p-2 w-40">Người đề nghị</th>
                        <th class="border border-gray-300 p-2 w-40">Nhà cung cấp</th>
                        <th class="border border-gray-300 p-2 w-32">SKU mẫu mã</th>
                        <th class="border border-gray-300 p-2 w-32">Mã SKU</th>
                        <th class="border border-gray-300 p-2 w-48">Tên hàng hóa</th>
                        <th class="border border-gray-300 p-2 w-20">ĐVT</th>
                    </tr>
                    {/* <!-- Filter Inputs Row --> */}
                    <tr class="bg-white">
                        <th class="border border-gray-300 p-1"></th>
                        <th class="border border-gray-300 p-1">
                            <div class="flex items-center border border-gray-300 rounded bg-white px-1">
                                <span class="text-gray-500 text-xs mr-1">=</span>
                                <input type="text" class="w-full text-xs py-1 outline-none"/>
                                <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            </div>
                        </th>
                        <th class="border border-gray-300 p-1">
                            <div class="flex items-center border border-gray-300 rounded bg-white px-1">
                                <span class="text-gray-500 text-xs mr-1">*</span>
                                <input type="text" class="w-full text-xs py-1 outline-none"/>
                            </div>
                        </th>
                        <th class="border border-gray-300 p-1">
                            <div class="flex items-center border border-gray-300 rounded bg-white px-1">
                                <span class="text-gray-500 text-xs mr-1">*</span>
                                <input type="text" class="w-full text-xs py-1 outline-none"/>
                            </div>
                        </th>
                        <th class="border border-gray-300 p-1">
                            <div class="flex items-center border border-gray-300 rounded bg-white px-1">
                                <span class="text-gray-500 text-xs mr-1">*</span>
                                <input type="text" class="w-full text-xs py-1 outline-none"/>
                            </div>
                        </th>
                        <th class="border border-gray-300 p-1">
                            <div class="flex items-center border border-gray-300 rounded bg-white px-1">
                                <span class="text-gray-500 text-xs mr-1">*</span>
                                <input type="text" class="w-full text-xs py-1 outline-none"/>
                            </div>
                        </th>
                        <th class="border border-gray-300 p-1">
                            <div class="flex items-center border border-gray-300 rounded bg-white px-1">
                                <span class="text-gray-500 text-xs mr-1">*</span>
                                <input type="text" class="w-full text-xs py-1 outline-none"/>
                            </div>
                        </th>
                        <th class="border border-gray-300 p-1">
                            <div class="flex items-center border border-gray-300 rounded bg-white px-1">
                                <span class="text-gray-500 text-xs mr-1">*</span>
                                <input type="text" class="w-full text-xs py-1 outline-none"/>
                            </div>
                        </th>
                        <th class="border border-gray-300 p-1">
                            <div class="flex items-center border border-gray-300 rounded bg-white px-1">
                                <span class="text-gray-500 text-xs mr-1">*</span>
                                <input type="text" class="w-full text-xs py-1 outline-none"/>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- Empty State Row --> */}
                    <tr>
                        <td colspan="9" class="h-64 text-center align-middle">
                            <div class="flex flex-col items-center justify-center h-full">
                                <div class="text-gray-300 mb-4">
                                    {/* <!-- Custom Envelope/Box Icon --> */}
                                    <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20 L50 45 L90 20" stroke="#D1D5DB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10 20 L10 70 Q10 75 15 75 L85 75 Q90 75 90 70 L90 20" stroke="#D1D5DB" stroke-width="4" stroke-linejoin="round"/>
                                        <path d="M10 20 L50 5 L90 20" stroke="#D1D5DB" stroke-width="4" stroke-linejoin="round"/>
                                        <path d="M35 40 L50 50 L65 40" stroke="#D1D5DB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <span class="text-gray-500 font-bold text-sm">KHÔNG CÓ DỮ LIỆU</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='w-full px-1'>
            <div class="overflow-x-auto  border border-gray-300 ">
        <table class="w-full min-w-[600px]  border-collapse  text-xs">
          <thead>
            <tr class="bg-gray-100 text-gray-700 font-bold">
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Mã SKU</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Tên hàng hóa</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Số lô</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Serial/IMEI</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Kho</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Đơn vị tính</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Số lượng</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Đơn giá</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Thành tiền</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">%CK</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Tiền CK</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Thuế suất</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Tiền thuế</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Tiền thanh toán</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Row 1 --> */}
            <tr class="bg-white">
              <td class="border border-gray-300 p-0 relative">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
            <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
            </tr>
            
            {/* <!-- Empty Rows for visual height --> */}
            {/* <tr class="h-8 border border-gray-300">
              <td colspan="6"></td>
            </tr>
            <tr class="h-8 border border-gray-300">
              <td colspan="6"></td>
            </tr>
            <tr class="h-8 border border-gray-300">
              <td colspan="6"></td>
            </tr> */}
          </tbody>
        </table>
      </div>
        </div>

        {/* <!-- Pagination Bar --> */}
        <div class="flex justify-between items-center p-2 border-t border-gray-300 bg-white text-sm text-gray-600">
            <div class="flex items-center gap-2">
                <div class="flex border border-gray-300 rounded overflow-hidden">
                    <button class="px-2 py-1 hover:bg-gray-100 border-r border-gray-300 text-gray-400">«</button>
                    <button class="px-2 py-1 hover:bg-gray-100 border-r border-gray-300 text-gray-400">‹</button>
                    <div class="flex items-center px-2 bg-white">
                        <span>Trang</span>
                        <input type="text" value="0" class="w-8 text-center mx-1 border border-gray-300 rounded text-xs py-0.5"/>
                        <span>trên 0</span>
                    </div>
                    <button class="px-2 py-1 hover:bg-gray-100 border-l border-gray-300 text-gray-400">›</button>
                    <button class="px-2 py-1 hover:bg-gray-100 border-l border-gray-300 text-gray-400">»</button>
                    <button class="px-2 py-1 hover:bg-gray-100 border-l border-gray-300 text-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                    </button>
                </div>
                <select class="border border-gray-300 rounded px-1 py-1 text-xs">
                    <option>50</option>
                </select>
            </div>
            <div class="text-gray-500">
                Không có dữ liệu
            </div>
        </div>

        {/* <!-- Footer Actions --> */}
        <div class="flex justify-end items-center gap-4 p-3 border-t border-gray-300 bg-white">
            <button class="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Đồng ý
            </button>
            <button class="flex items-center gap-2 text-blue-900 px-4 py-2 rounded text-sm font-bold hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                Hủy bỏ
            </button>
        </div>

    </div>
    </div>
  )
}

export default NortificateOrder
