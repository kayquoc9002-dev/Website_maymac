import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImportShipment from "../../PurchasedOrder/ImportShipment/ImportShipment";
function Sidebar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  // const [selectedItem, setSelectedItem] = useState(false);

  const openPart = (item) => {
    if(selected == item){
      setSelected("");
    } else{
      setSelected(item);
    }
  }
  const openItem = (nameItem) => {
    navigate(nameItem);
  }
  // const openCatalogCustomer = () => {
  //   navigate("/catalog/customer");
  // };
  //   const openOpenWarehouse = () => {
  //   navigate("/test");
  // };
  //   const openBookedOrder = () => {
  //   navigate("/bookedorder");
  // };
  // const openOrderStatus = () => {
  //   navigate("/orderstatus");
  // };
  // const openImportShipment = () => {
  //   navigate("/importshipment");
  // };
  return (
    <>
      <aside class="w-52 flex-shrink-0 bg-[#0f1c3f] text-gray-300 flex flex-col transition-all duration-300">
        {/* <!-- Logo Area --> */}
        <div class="h-12 flex items-center justify-center bg-[#091026] text-white font-bold text-lg shadow-md">
          <span class="text-white">Doanh nhân</span>
          <span class="text-blue-400 italic">FPTU</span>
        </div>

        {/* <!-- Menu Items --> */}
        <nav class="flex-1 overflow-y-auto py-2 custom-scrollbar">
          <ul class="space-y-0.5">
            <li class="px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3">
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
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                ></path>
              </svg>
              <span>Tổng quan</span>
            </li>
            <li class="px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3">
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
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              <span>Báo cáo</span>
            </li>
            <li class="px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
              <span>Đơn hàng</span>
            </li>
            <button class= {"w-full px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3 " + (selected == "muahang" ? "border-l-4 border-blue-500 bg-[#1e2d55]" : "" )} onClick={() => {openPart("muahang")}}>
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <div class="flex justify-between w-full items-center">
                <span>Mua hàng</span>
                <span class="bg-orange-500 text-white text-[10px] px-1.5 rounded-sm">
                  2
                </span>
              </div>
            </button>
            {selected == "muahang" && (
              <div>
              <button class="w-full px-4 pl-13 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3 cursor-pointer" onClick={() => {openItem('/orderstatus')}}>
              Theo dõi hàng
            </button>
            <button class="w-full px-4 pl-13 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3" onClick={() => {openItem('/bookedorder')}}>
              Đặt hàng mua
            </button>
            <button class="w-full px-4 pl-13 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3" onClick={() => {openItem('/importshipment')}}>
              Nhập hàng
            </button>
            </div>
            )}
            <li class="px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3" onClick={() => {openItem('/test')}}>
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
              <span>Kho</span>
            </li>
            <li class="px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3">
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Quỹ tiền</span>
            </li>
            <li class="px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3">
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
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <span>Chi phí</span>
            </li>
            
            <button class={"w-full px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3 " + (selected == "danhmuc" ? "border-l-4 border-blue-500 bg-[#1e2d55]" : "" )} onClick={() => {openPart("danhmuc")}}>
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
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                ></path>
              </svg>
              <span class="text-white">Danh mục</span>
            </button>
            {selected == "danhmuc" && (
              <div>
              <button class=" w-full px-4 pl-13 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3 cursor-pointer" onClick={() => {openItem('/catalog/customer')}}>
              Khách hàng
            </button>
            <button class=" w-full px-4 pl-13 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3" onClick={() => {openItem('/catalog/good')}}>
              Hàng hóa
            </button>
            <button class=" w-full px-4 pl-13 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3" onClick={() => {openItem('/catalog/supplier')}}>
              Nhà cung cấp
            </button>
            <button class=" w-full px-4 pl-13 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3" onClick={() => {openItem('/catalog/partner')}}>
              Đơn vị gia công
            </button>
            </div>
            )}
            <li class="px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3">
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span>Ứng dụng</span>
            </li>
            <li class="px-4 py-2 hover:bg-[#1e2d55] cursor-pointer flex items-center gap-3">
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>Thiết lập</span>
            </li>
          </ul>
        </nav>

        {/* <!-- Bottom Sidebar --> */}
        <div class="p-2 border-t border-gray-700">
          <div class="flex items-center gap-2 px-2 py-1 hover:bg-[#1e2d55] cursor-pointer">
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
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              ></path>
            </svg>
            <span>Doanh nhân FU</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
