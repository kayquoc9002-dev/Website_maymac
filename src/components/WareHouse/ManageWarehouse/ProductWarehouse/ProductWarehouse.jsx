import React from "react";
import { useState } from "react";
function ProductWarehouse() {
  const [selected, setSelected] = useState(false);
  const openDetail = () => {
    setSelected(!selected);
  };
  return (
    <>
      {/* <!-- Content List --> */}
      <div class="flex-1 space-y-6">
        {/* <!-- Product Card 1 (Expanded) --> */}
        <div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden  hover:border-blue-300">
          {/* <!-- Card Header --> */}
          <div class="p-6 flex flex-col sm:flex-row gap-6" onClick={openDetail}>
            {/* <!-- Image --> */}
            <div class="w-24 h-24 sm:w-28 sm:h-28 bg-slate-100 rounded-xl flex-shrink-0 overflow-hidden border border-slate-200">
              <img
                src="https://picsum.photos/id/1059/200/200"
                alt="Product"
                class="w-full h-full object-cover"
              />
            </div>

            {/* <!-- Info --> */}
            <div class="flex-1">
              <div class="flex justify-between items-start">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <h2 class="text-lg font-black text-slate-800">
                      Áo Sơ Mi Oxford Cao Cấp
                    </h2>
                    <span class="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded">
                      ÁO
                    </span>
                  </div>
                  <p class="text-sm text-slate-500 mb-3">
                    Chất liệu vải Oxford 100% cotton, thoáng mát, form dáng
                    Slim-fit hiện đại.
                  </p>

                  <div class="flex gap-8">
                    <div>
                      <p class="text-[10px] font-bold text-slate-400 uppercase">
                        Tổng tồn
                      </p>
                      <p class="text-slate-800 font-bold">40 cái</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Actions --> */}
                <div class="flex items-center gap-3">
                  <span class="hidden sm:inline-block bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1.5 rounded-full">
                    CẦN NHẬP THÊM
                  </span>
                  <button class="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
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
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    </svg>
                  </button>
                  <button class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
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
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </button>
                  <button
                    onClick={openDetail}
                    class="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Variant Table Section --> */}
          {selected && (
            <div class="p-6 pt-0 ">
              <div class="p-4 bg-slate-100/50 rounded-lg">
                {/* border-t border-slate-100  */}
                <div class=" flex justify-between items-center mb-4">
                  <div class="flex items-center gap-2 text-blue-800 font-bold text-sm">
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
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    BẢNG THỐNG KÊ BIẾN THỂ (SIZE / MÀU)
                  </div>
                  <div class="flex gap-4 text-[10px] font-bold">
                    <div class="flex items-center gap-1.5 text-red-500">
                      <span class="w-2 h-2 rounded-full bg-red-500"></span> Hết
                      hàng
                    </div>
                    <div class="flex items-center gap-1.5 text-amber-500">
                      <span class="w-2 h-2 rounded-full bg-amber-500"></span>{" "}
                      Sắp hết
                    </div>
                  </div>
                </div>

                {/* <!-- Matrix Grid --> */}

                <div class="overflow-x-auto">
                  <div class="min-w-[600px]">
                    {/* <!-- Header Row --> */}
                    <div class="grid grid-cols-6 gap-2 mb-2">
                      <div class="text-[14px] font-bold text-slate-400 uppercase tracking-wider flex items-end pb-1">
                        Color / Size
                      </div>
                      <div class="bg-white rounded-lg py-2 text-center text-xs font-bold text-slate-700 shadow-sm">
                        S
                      </div>
                      <div class="bg-white rounded-lg py-2 text-center text-xs font-bold text-slate-700 shadow-sm">
                        M
                      </div>
                      <div class="bg-white rounded-lg py-2 text-center text-xs font-bold text-slate-700 shadow-sm">
                        L
                      </div>
                      <div class="bg-white rounded-lg py-2 text-center text-xs font-bold text-slate-700 shadow-sm">
                        XL
                      </div>
                      <div class="bg-white rounded-lg py-2 text-center text-xs font-bold text-slate-700 shadow-sm">
                        XXL
                      </div>
                    </div>

                    {/* <!-- Row 1: Trắng --> */}
                    <div class="grid grid-cols-6 gap-2 mb-2">
                      <div class="bg-white rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 flex items-center shadow-sm">
                        Trắng
                      </div>
                      <div class="bg-white rounded-lg flex items-center justify-center text-sm font-bold text-emerald-600 shadow-sm">
                        12
                      </div>
                      <div class="bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center text-sm font-bold text-amber-600 shadow-sm">
                        5
                      </div>
                      <div class="bg-red-50 border border-red-100 rounded-lg flex items-center justify-center text-sm font-bold text-red-600 shadow-sm">
                        0
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                    </div>

                    {/* <!-- Row 2: Đen --> */}
                    <div class="grid grid-cols-6 gap-2 mb-2">
                      <div class="bg-white rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 flex items-center shadow-sm">
                        Đen
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                    </div>

                    {/* <!-- Row 3: Xanh Navy --> */}
                    <div class="grid grid-cols-6 gap-2 mb-2">
                      <div class="bg-white rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 flex items-center shadow-sm">
                        Xanh Navy
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-white rounded-lg flex items-center justify-center text-sm font-bold text-emerald-600 shadow-sm">
                        8
                      </div>
                      <div class="bg-white rounded-lg flex items-center justify-center text-sm font-bold text-emerald-600 shadow-sm">
                        15
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                    </div>

                    {/* <!-- Row 4: Hồng Pastel --> */}
                    <div class="grid grid-cols-6 gap-2 mb-2">
                      <div class="bg-white rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 flex items-center shadow-sm">
                        Hồng Pastel
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                    </div>

                    {/* <!-- Row 5: Be --> */}
                    <div class="grid grid-cols-6 gap-2 mb-2">
                      <div class="bg-white rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 flex items-center shadow-sm">
                        Be
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                    </div>

                    {/* <!-- Row 6: Xám --> */}
                    <div class="grid grid-cols-6 gap-2">
                      <div class="bg-white rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 flex items-center shadow-sm">
                        Xám
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                      <div class="bg-slate-100/50 rounded-lg flex items-center justify-center text-sm text-slate-300">
                        -
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductWarehouse;
