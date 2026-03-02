// import OrderRow from "./OrderTable/OrderRow";
import { useCartStore } from "../../../Helpers/cartStore.js";
import Header from "../Header/Header.jsx";
import Sidebar from "../../Catalog/Sidebar/Sidebar.jsx";
function Account() {
  const { cartItems } = useCartStore();
  //   const data = cartItems.Orders;
  function handleLogout() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="flex w-screen">
          {/* --- SIDEBAR CHÍNH (Global) --- */}
          <Sidebar />

          <div className="flex-1 w-[100px] flex flex-col h-screen bg-gray-50 font-sans text-sm overflow-hidden">
            {/* --- TOP HEADER (Trắng, h-14) --- */}
            <header className="flex items-center justify-between bg-white px-4 py-2 border-b border-gray-200 h-14 shrink-0">
              <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                Hệ thống mua hàng
              </h1>
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center border border-gray-300 rounded px-2 py-1 bg-gray-50 uppercase font-semibold text-[11px]">
                  <span className="text-gray-600 mr-2">
                    CÔNG TY TNHH TM DV PHÚ
                  </span>
                  <svg
                    className="w-3 h-3 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2 cursor-pointer border-l pl-4">
                  <div className="relative">
                    <img
                      src="https://picsum.photos/id/1025/200/200"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full border border-gray-300 object-cover"
                    />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1 rounded-full">
                      2
                    </span>
                  </div>
                  <span className="font-medium text-gray-700">duyquc743</span>
                </div>
              </div>
            </header>

            {/* --- MAIN CONTENT AREA (Nền Gray-300) --- */}
            <div className="p-2 flex-1 flex flex-col overflow-hidden bg-gray-300">
              {/* --- TOOLBAR HỆ THỐNG (Navy Blue) --- */}
              {/* <div className="bg-[#283593] text-white flex items-center px-2 py-1.5 gap-2 shrink-0 shadow-md mb-2 rounded-sm">
                <button className="flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded transition text-xs font-bold uppercase">
                  <span className="text-lg">+</span> Tạo đơn mua mới
                </button>
                <div className="w-px h-4 bg-white/20 mx-1"></div>
                <button className="flex items-center gap-1 px-3 py-1 hover:bg-white/10 rounded transition text-xs font-bold uppercase">
                  📥 Xuất báo cáo
                </button>
              </div> */}

              <div className="flex-1 flex gap-2 overflow-hidden">
                {/* LEFT SIDEBAR (Thông tin tài khoản) */}
                <div className="hidden md:flex w-64 bg-white border border-gray-300 flex-col shrink-0 shadow-sm rounded-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://picsum.photos/id/1025/200/200"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border border-gray-200"
                      />
                      <div className="flex flex-col overflow-hidden">
                        <span className="font-bold text-sm truncate">
                          duyquc743
                        </span>
                        <span className="text-[10px] text-orange-500 font-bold uppercase">
                          Thành viên kim cương
                        </span>
                      </div>
                    </div>
                  </div>

                  <nav className="flex-1 py-2 overflow-y-auto">
                    <ul className="space-y-1 px-2 text-[13px] font-medium">
                      <li className="flex items-center gap-3 p-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition">
                        <span className="w-5">🔔</span> Thông Báo
                      </li>
                      <li className="flex items-center gap-3 p-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition">
                        <span className="w-5">👤</span> Hồ Sơ Của Tôi
                      </li>
                      <li className="flex items-center gap-3 p-2 text-blue-700 bg-blue-50 border-r-4 border-blue-700 font-bold">
                        <span className="w-5">📋</span> Đơn Mua
                      </li>
                    </ul>
                  </nav>

                  <div className="p-4 border-t border-gray-100">
                    <button
                      className="w-full py-2 border border-red-200 text-red-500 rounded hover:bg-red-50 transition text-xs font-bold uppercase"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </button>
                  </div>
                </div>

                {/* RIGHT PANEL: NƠI CHỨA ĐƠN HÀNG (Tất cả gộp vào đây) */}
                <div className="flex-1 bg-white border border-gray-300 shadow-sm flex flex-col rounded-sm overflow-hidden">
                  {/* 1. TABS TRẠNG THÁI (Nằm bên trong panel trắng) */}
                  <div className="border-b border-gray-200 shrink-0">
                    <div className="flex overflow-x-auto custom-scrollbar bg-white">
                      <div className="px-5 py-3 text-blue-700 font-bold border-b-2 border-blue-700 whitespace-nowrap text-[13px]">
                        Tất cả đơn
                      </div>
                      {[
                        "Chờ xác nhận",
                        "Chờ lấy hàng",
                        "Đang giao",
                        "Hoàn thành",
                        "Đã hủy",
                        "Trả hàng",
                      ].map((tab) => (
                        <div
                          key={tab}
                          className="px-5 py-3 text-gray-500 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer text-[13px] transition-colors"
                        >
                          {tab}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. SEARCH BAR (Tích hợp bên dưới tabs) */}
                  <div className="p-3 bg-gray-50 border-b border-gray-200 shrink-0">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors"
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
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-sm text-[13px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
                        placeholder="Tìm theo ID đơn hàng, tên Shop hoặc tên sản phẩm..."
                      />
                    </div>
                  </div>

                  {/* 3. ORDER LIST CONTENT (Phần danh sách có scroll) */}
                  <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-gray-50/50">
                    {/* Order Card Placeholder */}
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl opacity-50">
                        📦
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-500 text-sm">
                          Chưa có dữ liệu đơn hàng
                        </p>
                        <p className="text-xs">
                          Hãy thử thay đổi bộ lọc hoặc tìm kiếm theo từ khóa
                          khác
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Account;
