import React, { use } from "react";
import { useState, useRef } from "react";
import ToggleSwitch from "./ToggleSwitch";
import ProductCard from "./ListProduct/ProductCard";
import TableRow from "./ProductCart/TableRow";
import Sidebar from "../Catalog/Sidebar/Sidebar";
import ListProduct from "./ListProduct/ListProduct";
import DetailProduct from "./ListProduct/DetailProduct/DetailProduct";
import ProductCart from "./ProductCart/ProductCart";
import Bill from "./Bill/Bill";
import { RiShoppingBasketFill } from "react-icons/ri";
function SellPage() {

  const [activeTab, setActiveTab] = useState(1);
  const [count, setCount] = useState(1);
  const order_note = useRef("");
  const [keyReset, setKeyReset] = useState(0);
  return (
    <>

      <div className="bg-gray-50 min-h-screen">
        <div className="flex w-screen">
          {/* --- SIDEBAR (Theo mẫu thiết kế 1) --- */}
          <Sidebar />

          <div className="flex-1 w-[100px] flex flex-col h-screen bg-gray-50 font-sans text-sm">
            {/* --- TOP HEADER (Theo mẫu thiết kế 1: Trắng, Border b) --- */}
            <header className="flex items-center justify-between bg-white px-4 py-2 border-b border-gray-200 h-14 shrink-0">
              <h1 className="text-xl font-bold text-gray-800">Bán hàng</h1>
              <div className="flex items-center gap-4">
                {/* <!-- Company Dropdown --> */}
                <div class="hidden md:flex items-center border border-gray-300 rounded px-2 py-1 bg-gray-50">
                  <span class="text-gray-600 mr-2">CÔNG TY TNHH TM DV PHÚ</span>
                  <svg
                    class="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>

                {/* <!-- User Profile --> */}
                <div class="flex items-center gap-2 cursor-pointer">
                  <div class="relative">
                    <img
                      src="https://picsum.photos/id/64/200/200"
                      alt="Avatar"
                      class="w-8 h-8 rounded-full object-cover border border-gray-300"
                    />
                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1 rounded-full">
                      2
                    </span>
                  </div>
                  <span class="font-medium text-gray-700 hidden sm:block">
                    testdemo
                  </span>
                  <svg
                    class="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>

                {/* <!-- Action Icons --> */}
                <div class="flex items-center gap-3 text-gray-500">
                  <button class="hover:text-yellow-500">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      ></path>
                    </svg>
                  </button>
                  <button class="hover:text-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                  </button>
                  <button class="hover:text-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </button>
                  <button class="hover:text-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </header>

            {/* --- MAIN BODY AREA (Nền xám Gray-300 như mẫu 1) --- */}
            <div className="p-2 flex-1 flex flex-col overflow-hidden bg-gray-300">
              {/* --- TOOLBAR / TABS (Theo mẫu thiết kế 1: Xanh Navy #283593) --- */}
              <div className="bg-[#283593] text-white flex items-center px-2 py-1 gap-1 overflow-x-auto shrink-0 shadow-md">
                {/* Render Tabs của POS vào đây */}
                <div className="flex items-center h-9">
                  <div
                    className={`relative flex items-center gap-2 px-4 h-full cursor-pointer transition ${activeTab === 1 ? "bg-white text-blue-900 font-bold" : "hover:bg-white/10"}`}
                  >
                    <span className="text-[18px]">Giỏ hàng</span>
                    <div className="">
                      <RiShoppingBasketFill className="w-6 h-6" />
                      
                    </div>
                    <span class=" absolute top-1 right-2 bg-red-500 text-white text-[10px] font-bold px-1 rounded-full">
                        {count}
                      </span>
                  </div>
                  {/* <div className="w-px h-6 bg-white/20 mx-1"></div>
                  <button className="p-2 hover:bg-white/10 rounded">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button> */}
                </div>

                <div className="ml-auto flex items-center gap-2 text-xs">
                  <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-white/10 rounded transition border border-white/20">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>HĐ lưu tạm (1)</span>
                  </button>
                </div>
              </div>

              {/* --- NỘI DUNG CHÍNH (Chia 2 cột) --- */}
              <div className="flex-1 flex gap-2 mt-2 overflow-hidden">
                {/* CỘT TRÁI: Tìm kiếm, Bảng hàng hóa, Catalog */}
                <div className="flex-1 flex flex-col bg-white border border-gray-300 shadow-sm overflow-hidden">
                  {/* Search Bar (Giữ logic cũ nhưng dùng style mẫu 1) */}

                  {/* <div className="p-2 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        className="w-full pl-8 pr-4 py-1.5 border border-gray-300 rounded text-sm outline-none focus:border-blue-500"
                        placeholder="(F3) Tìm hàng hóa, mã vạch..."
                      />
                      <svg
                        className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center border border-gray-300 rounded px-2 py-1.5 bg-white">
                      <span className="text-gray-500 mr-1 text-xs font-bold">
                        SL
                      </span>
                      <input
                        type="text"
                        defaultValue="1,00"
                        className="w-12 text-right outline-none text-sm font-bold"
                      />
                    </div>

                    <ToggleSwitch id="separate-line" label="Tách dòng" />
                  </div> */}

                  {/* Bảng hàng hóa (Style header mẫu 1: bg-[#f0f0f0]) */}
                  <ProductCart setCount={setCount}/>

                  {/* Catalog / Tư vấn bán hàng */}
                  <ListProduct setKeyReset={setKeyReset}/>
                </div>

                {/* CỘT PHẢI: Thanh toán (Style Card trắng mẫu 1) */}
                <Bill order_note={order_note} keyReset={keyReset} />
              </div>
            </div>
          </div>
        </div>

        {/* --- INJECTED CSS --- */}
        <style>{`
        .toggle-checkbox:checked { right: 0; border-color: #283593; }
        .toggle-checkbox:checked + .toggle-label { background-color: #283593; }
        .toggle-checkbox { transition: all 0.2s ease-in-out; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #64748b; }
      `}</style>
      </div>
    </>
  );
}

export default SellPage;
