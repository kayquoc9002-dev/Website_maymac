import React from "react";

function Cartegory() {
  return (
    <>
      <div class="bg-gray-50">
        <div class="bg-[#f5f5f5] p-4 flex items-center justify-center font-sans">
          {/* <!-- Main Component Container --> */}
          <div class="w-full max-w-[1200px] bg-white rounded-sm shadow-sm relative">
            {/* <!-- Header --> */}
            <div class="px-5 py-4 border-b border-gray-100">
              <h2 class="text-gray-500 font-medium text-base uppercase tracking-wide">
                DANH MỤC
              </h2>
            </div>

            {/* <!-- Grid Container --> */}
            {/* <!-- Responsive: 2 cols mobile, 5 cols tablet, 10 cols desktop to match image --> */}
            <div class="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 relative">
              {/* <!-- Navigation Arrow (Floating) --> */}
              <button class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-white rounded-full shadow-[0_1px_12px_0_rgba(0,0,0,0.12)] w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer border border-gray-100">
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
                  class="text-gray-500"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              {/* <!-- Row 1 Items --> */}
              {/* <!-- Item 1 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/1059/200/200"
                    alt="Thời Trang Nam"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Thời Trang Nam
                </span>
              </div>

              {/* <!-- Item 2 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/1/200/200"
                    alt="Điện Thoại"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Điện Thoại & Phụ Kiện
                </span>
              </div>

              {/* <!-- Item 3 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/2/200/200"
                    alt="Thiết Bị Điện Tử"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Thiết Bị Điện Tử
                </span>
              </div>

              {/* <!-- Item 4 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/3/200/200"
                    alt="Laptop"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Máy Tính & Laptop
                </span>
              </div>

              {/* <!-- Item 5 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/250/200/200"
                    alt="Camera"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Máy Ảnh & Máy Quay Phim
                </span>
              </div>

              {/* <!-- Item 6 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/175/200/200"
                    alt="Đồng Hồ"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Đồng Hồ
                </span>
              </div>

              {/* <!-- Item 7 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/21/200/200"
                    alt="Giày Nam"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Giày Dép Nam
                </span>
              </div>

              {/* <!-- Item 8 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/30/200/200"
                    alt="Gia Dụng"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Thiết Bị Điện Gia Dụng
                </span>
              </div>

              {/* <!-- Item 9 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/76/200/200"
                    alt="Thể Thao"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Thể Thao & Du Lịch
                </span>
              </div>

              {/* <!-- Item 10 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-b border-gray-100 lg:border-r-0 border-r hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/111/200/200"
                    alt="Xe"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Ô Tô & Xe Máy & Xe Đạp
                </span>
              </div>

              {/* <!-- Row 2 Items --> */}
              {/* <!-- Item 11 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b lg:border-b-0 border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/325/200/200"
                    alt="Thời Trang Nữ"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Thời Trang Nữ
                </span>
              </div>

              {/* <!-- Item 12 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b lg:border-b-0 border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/338/200/200"
                    alt="Mẹ & Bé"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Mẹ & Bé
                </span>
              </div>

              {/* <!-- Item 13 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b lg:border-b-0 border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/439/200/200"
                    alt="Nhà Cửa"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Nhà Cửa & Đời Sống
                </span>
              </div>

              {/* <!-- Item 14 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b lg:border-b-0 border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/64/200/200"
                    alt="Sắc Đẹp"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Sắc Đẹp
                </span>
              </div>

              {/* <!-- Item 15 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b lg:border-b-0 border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/96/200/200"
                    alt="Sức Khỏe"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Sức Khỏe
                </span>
              </div>

              {/* <!-- Item 16 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b lg:border-b-0 border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/103/200/200"
                    alt="Giày Nữ"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Giày Dép Nữ
                </span>
              </div>

              {/* <!-- Item 17 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b lg:border-b-0 border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/106/200/200"
                    alt="Túi Ví"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Túi Ví Nữ
                </span>
              </div>

              {/* <!-- Item 18 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b lg:border-b-0 border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/152/200/200"
                    alt="Trang Sức"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Phụ Kiện & Trang Sức Nữ
                </span>
              </div>

              {/* <!-- Item 19 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-r border-b lg:border-b-0 border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/225/200/200"
                    alt="Bách Hóa"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Bách Hóa Online
                </span>
              </div>

              {/* <!-- Item 20 --> */}
              <div class="group flex flex-col items-center justify-start pt-4 pb-2 px-2 h-[150px] border-b lg:border-b-0 lg:border-r-0 border-r border-gray-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:z-10 transition-shadow cursor-pointer bg-white">
                <div class="w-[70%] aspect-square mb-2">
                  <img
                    src="https://picsum.photos/id/367/200/200"
                    alt="Sách"
                    class="w-full h-full object-cover rounded-full bg-gray-50"
                  />
                </div>
                <span class="text-[13px] text-center text-gray-800 leading-4">
                  Nhà Sách Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartegory;
