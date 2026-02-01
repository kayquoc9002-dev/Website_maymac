import React from "react";
import ProductItem from "../../ShoppingPage/ListProduct/ProductItem/ProductItem";
import ProductWarehouse from "./ProductWarehouse/ProductWarehouse";
import { useNavigate } from "react-router-dom";
function Test() {
  const navigate = useNavigate();
  const openImExportPage = () => {
    navigate("/test/importexport");
  }
  return (
    <>
      <div class="bg-gray-50 min-h-screen">
        <div class="min-h-screen bg-slate-50 font-sans text-slate-700">
          {/* <!-- Header --> */}
          <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
              {/* <!-- Logo --> */}
              <div class="flex items-center justify-between gap-3 min-w-fit">
                <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
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
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
                <div class="flex flex-col">
                  <span class="font-black text-slate-800 text-lg leading-tight tracking-tight">
                    FASHION ERP
                  </span>
                  <span class="text-[10px] font-bold text-slate-400 tracking-wider">
                    GARMENT MANAGEMENT
                  </span>
                </div>
              </div>

              {/* <!-- Search --> */}
              <div class="hidden md:block ml-50">
                <div class="relative ">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      class="h-5 w-5 text-slate-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    class="block w-120 pl-10 pr-10 py-2.5 border-none rounded-full bg-slate-100 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Tìm kiếm mã hàng, tên sản phẩm..."
                  />
                </div>
              </div>

              {/* Import/export button */}
              <button onClick={openImExportPage} className="font-bold rounded-full shadow-sm border border-slate-100  cursor-pointer bg-blue-600 p-3 px-7 text-white uppercase hover:bg-white  hover:text-blue-600">
                  Nhập/Xuất
              </button>

            </div>
          </header>

          {/* Select Warehouse */}
          <div class="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-col-3 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:bg-blue-600 cursor-pointer">
                <div className=" font-bold text-slate-400 uppercase">
                  Kho nguyên liệu
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100  hover:bg-blue-600 cursor-pointer">
                <div className=" font-bold text-slate-400 uppercase">
                  Kho thành phẩm
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100  hover:bg-blue-600 cursor-pointer">
                <div className=" font-bold text-slate-400 uppercase">
                  Kho hàng chờ gia công
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Main Content --> */}
          <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            {/* <!-- Stats Cards --> */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {/* <!-- Card 1 --> */}
              <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <p class="text-xs font-bold text-slate-400 uppercase mb-1">
                  Mã hàng đang bán
                </p>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-black text-blue-600">3</span>
                  <span class="text-xs font-bold text-slate-400">MÃ SKU</span>
                </div>
              </div>
              {/* <!-- Card 2 --> */}
              <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <p class="text-xs font-bold text-slate-400 uppercase mb-1">
                  Tổng tồn kho
                </p>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-black text-emerald-500">82</span>
                  <span class="text-xs font-bold text-slate-400">SẢN PHẨM</span>
                </div>
              </div>
              {/* <!-- Card 3 --> */}
              <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <p class="text-xs font-bold text-slate-400 uppercase mb-1">
                  Biến thể sắp hết
                </p>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-black text-orange-400">3</span>
                  <span class="text-xs font-bold text-slate-400">SIZE/MÀU</span>
                </div>
              </div>
              {/* <!-- Card 4 --> */}
              <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <p class="text-xs font-bold text-slate-400 uppercase mb-1">
                  Biến thể hết hàng
                </p>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-black text-red-500">2</span>
                  <span class="text-xs font-bold text-slate-400">SIZE/MÀU</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-8">
              {/* <!-- Sidebar --> */}
              <aside class="w-full lg:w-64 flex-shrink-0">
                <h3 class="text-xs font-bold text-slate-400 uppercase mb-4 px-2">
                  Danh mục hàng
                </h3>
                <nav class="space-y-2">
                  <a
                    href="#"
                    class="block w-full text-left px-4 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-md shadow-blue-200"
                  >
                    Tất cả hàng hóa
                  </a>
                  <a
                    href="#"
                    class="block w-full text-left px-4 py-3 rounded-xl bg-white text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Áo
                  </a>
                  <a
                    href="#"
                    class="block w-full text-left px-4 py-3 rounded-xl bg-white text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Quần
                  </a>
                  <a
                    href="#"
                    class="block w-full text-left px-4 py-3 rounded-xl bg-white text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Váy/Đầm
                  </a>
                  <a
                    href="#"
                    class="block w-full text-left px-4 py-3 rounded-xl bg-white text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Phụ kiện
                  </a>
                  <a
                    href="#"
                    class="block w-full text-left px-4 py-3 rounded-xl bg-white text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Áo Khoác
                  </a>
                </nav>
              </aside>
              <ProductWarehouse />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Test;
