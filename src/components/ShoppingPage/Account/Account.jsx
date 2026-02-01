// import OrderRow from "./OrderTable/OrderRow";
import { useCartStore } from "../../../cartStore.js";
import Header from "../Header/Header.jsx";
function Account() {
  const { cartItems } = useCartStore(); 
//   const data = cartItems.Orders;
    function handleLogout(){
        localStorage.clear();
        window.location.href = '/';
    }
  return (
    <>
      <Header />
      <div class="bg-gray-50 min-h-screen ">
        <div class="bg-[#f5f5f5] min-h-screen font-sans text-gray-800 ">
          {/* <!-- Main Container --> */}
          <div class="max-w-7xl mx-auto pt-5 pb-10 px-4 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* <!-- Left Sidebar --> */}
            <div class="hidden md:block md:col-span-2">
              {/* <!-- User Profile --> */}
              <div class="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
                <div class="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                  <img
                    src="https://picsum.photos/id/1025/200/200"
                    alt="Avatar"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex flex-col">
                  <span class="font-semibold text-sm truncate w-24">
                    duyquc743
                  </span>
                  <a
                    href="#"
                    class="text-gray-500 text-xs flex items-center gap-1 hover:text-orange-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                    Sửa Hồ Sơ
                  </a>
                </div>
              </div>

              {/* <!-- Navigation Menu --> */}
              <ul class="space-y-4 text-sm">
                <li class="flex items-center gap-3 text-gray-700 hover:text-orange-500 cursor-pointer">
                  <svg
                    class="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>Thông Báo</span>
                </li>
                <li class="flex items-center gap-3 text-gray-700 hover:text-orange-500 cursor-pointer">
                  <svg
                    class="w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Tài Khoản Của Tôi</span>
                </li>
                <li class="flex items-center gap-3 text-orange-500 font-medium cursor-pointer">
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <span>Đơn Mua</span>
                </li>
                <li className=" hover:text-orange-500 cursor-pointer" onClick={() => {handleLogout()}}>
                    Đăng xuất
                </li>
              </ul>
            </div>

            {/* <!-- Right Content --> */}
            <div class="col-span-1 md:col-span-10">
              {/* <!-- Tabs --> */}
              <div class="bg-white shadow-sm rounded-t-sm overflow-x-auto">
                <div class="flex min-w-max border-b border-gray-200">
                  <div class="px-6 py-4 text-orange-500 border-b-2 border-orange-500 cursor-pointer font-medium text-sm whitespace-nowrap">
                    Tất cả
                  </div>
                  <div class="px-6 py-4 text-gray-800 hover:text-orange-500 cursor-pointer text-sm whitespace-nowrap">
                    Chờ thanh toán
                  </div>
                  <div class="px-6 py-4 text-gray-800 hover:text-orange-500 cursor-pointer text-sm whitespace-nowrap">
                    Vận chuyển
                  </div>
                  <div class="px-6 py-4 text-gray-800 hover:text-orange-500 cursor-pointer text-sm whitespace-nowrap">
                    Chờ giao hàng
                  </div>
                  <div class="px-6 py-4 text-gray-800 hover:text-orange-500 cursor-pointer text-sm whitespace-nowrap">
                    Hoàn thành
                  </div>
                  <div class="px-6 py-4 text-gray-800 hover:text-orange-500 cursor-pointer text-sm whitespace-nowrap">
                    Đã hủy
                  </div>
                  <div class="px-6 py-4 text-gray-800 hover:text-orange-500 cursor-pointer text-sm whitespace-nowrap">
                    Trả hàng/Hoàn tiền
                  </div>
                </div>
              </div>

              {/* <!-- Search Bar --> */}
              <div class="mt-3 relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-gray-400"
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
                </div>
                <input
                  type="text"
                  class="block w-full pl-10 pr-3 py-3 bg-[#eaeaea] border-none rounded-sm text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm"
                />
              </div>

              {/* <!-- Order Card --> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Account;
