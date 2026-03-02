import React from 'react';
import Sidebar from '../Catalog/Sidebar/Sidebar';
const OverviewPage = () => {
  return (
    <div className="flex h-screen bg-[#f0f2f5] font-sans text-slate-700 overflow-hidden">
      {/* --- SIDEBAR --- */}
      <Sidebar />

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f0f2f5] p-3 custom-scrollbar">
          
          {/* Top Row: Activity & Invoice Status */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3">
            <ActivityCard />
            <InvoiceStatusCard />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <RevenueChartCard />
            <CashFlowChartCard />
          </div>

          {/* Bottom Row Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
            <EmptyChartCard title="Tỉ trọng doanh thu hàng hóa" />
            <EmptyChartCard title="Doanh thu theo thời gian" subtitle="Số tiền (triệu)" />
          </div>
        </main>
      </div>

      {/* Injected Styles for Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1a2234; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #4b5563; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #6b7280; }
      `}</style>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

// const Sidebar = () => {
//   const menuItems = [
//     { name: 'Tổng quan', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z', active: true },
//     { name: 'Báo cáo', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
//     { name: 'Đơn hàng', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
//     { name: 'Mua hàng', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z', badge: 2 },
//     { name: 'Kho', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
//     { name: 'Quỹ tiền', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
//     { name: 'Chi phí', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
//     { name: 'Danh mục', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
//     { name: 'Thiết lập', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
//   ];

//   return (
//     <aside className="w-64 bg-[#242f46] text-slate-300 flex-shrink-0 hidden md:flex flex-col">
//       <div className="h-14 flex items-center px-4 bg-[#1a2234] text-white font-bold text-xl">
//         <span className="text-blue-400 mr-1">MISA</span>eShop
//       </div>
//       <nav className="flex-1 overflow-y-auto py-2 text-sm custom-scrollbar">
//         {menuItems.map((item, idx) => (
//           <a key={idx} href="#" className={`flex items-center justify-between px-4 py-3 transition-colors ${item.active ? 'bg-[#151b2b] text-white border-l-4 border-blue-500' : 'hover:bg-[#323d56] hover:text-white'}`}>
//             <div className="flex items-center">
//               <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//               </svg>
//               {item.name}
//             </div>
//             {item.badge && <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">{item.badge}</span>}
//           </a>
//         ))}
//       </nav>
//     </aside>
//   );
// };

const Header = () => (
  <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
    <div className="flex items-center">
      <h1 className="text-lg font-bold text-gray-800">Tổng quan</h1>
    </div>
    <div className="flex items-center space-x-4">
      <div className="hidden md:flex items-center border border-gray-300 rounded px-2 py-1 text-sm text-gray-600 cursor-pointer">
        <span className="truncate max-w-[150px]">CÔNG TY TNHH TM DV PHƯ...</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div className="flex items-center cursor-pointer">
        <img src="https://picsum.photos/id/64/100/100" alt="User" className="w-8 h-8 rounded-full object-cover" />
        <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:block">testdemo</span>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-1 rounded bg-blue-900 text-white"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></button>
        <button className="p-1 relative">
            <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
      </div>
    </div>
  </header>
);

const ActivityCard = () => (
  <div className="lg:col-span-9 bg-white rounded shadow-sm border border-gray-200">
    <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
      <h2 className="text-xs font-semibold text-gray-600 uppercase">Hoạt động trong ngày 25/02/2026</h2>
      <button className="text-gray-400">🔄</button>
    </div>
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x divide-gray-100">
      <div className="space-y-3">
        <div className="flex justify-between items-center font-bold text-gray-800"><span>Tiền thu trong ngày</span><span>124.960</span></div>
        <div className="flex justify-between items-center text-sm text-blue-600"><span>Bán hàng</span><span>124.960</span></div>
        <div className="flex justify-between items-center text-sm text-gray-600"><span>Thu nợ/Thu COD</span><span>0</span></div>
      </div>
      <div className="space-y-3 md:pl-6">
        <div className="flex justify-between items-center font-bold text-gray-800"><span>Doanh thu ước tính</span><span>333.960</span></div>
        <div className="flex justify-between items-center text-sm text-gray-600"><span>Hóa đơn hoàn thành</span><span className="font-bold">124.960</span></div>
      </div>
      <div className="space-y-3 md:pl-6">
        <div className="flex justify-between items-center font-bold text-gray-800"><span>Hóa đơn</span><span>333.960</span></div>
        <div className="flex justify-between items-center text-sm text-gray-600"><span>Tại cửa hàng</span><span className="font-bold">124.960</span></div>
      </div>
    </div>
  </div>
);

const InvoiceStatusCard = () => (
  <div className="lg:col-span-3 bg-white rounded shadow-sm border border-gray-200 flex flex-col">
    <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
      <h2 className="text-xs font-semibold text-gray-600">Phát hành HĐĐT</h2>
    </div>
    <div className="p-4 flex-1">
       <div className="border-t-2 border-blue-800 pt-2">
           <div className="space-y-3 text-sm">
               <div className="flex justify-between"><span>Chưa phát hành</span><span className="font-medium">24</span></div>
               <div className="flex justify-between text-blue-600"><span>Đã phát hành</span><span className="font-medium">59</span></div>
           </div>
       </div>
    </div>
  </div>
);

const RevenueChartCard = () => (
  <div className="bg-white rounded shadow-sm border border-gray-200 p-4">
    <h2 className="text-xs font-semibold text-gray-600 mb-4">Doanh thu, chi phí, lợi nhuận</h2>
    <div className="flex space-x-4 mb-4 text-[10px] font-bold">
        <div className="bg-gray-50 px-2 py-1 rounded border">DOANH THU: 101.8M</div>
        <div className="bg-gray-50 px-2 py-1 rounded border">LỢI NHUẬN: 100.4M</div>
    </div>
    <div className="relative h-48 border-l border-b border-gray-200 flex items-end justify-center space-x-2 pb-1">
        <div className="w-12 bg-blue-500 h-[80%]"></div>
        <div className="w-12 bg-orange-500 h-[2%]"></div>
        <div className="w-12 bg-green-500 h-[78%]"></div>
    </div>
  </div>
);

const CashFlowChartCard = () => (
  <div className="bg-white rounded shadow-sm border border-gray-200 p-4">
    <h2 className="text-xs font-semibold text-gray-600 mb-4">Tình hình thu chi theo thời gian</h2>
    <div className="relative h-48 border-l border-b border-gray-200">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <polyline points="0,150 50,100 100,160 150,80 200,140 250,130 300,130 350,130" fill="none" stroke="#107c10" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 flex items-end justify-between px-4 pb-2">
            {[10, 40, 5, 80, 20, 15, 15].map((h, i) => (
                <div key={i} className="w-2 bg-blue-400 opacity-50" style={{ height: `${h}%` }}></div>
            ))}
        </div>
    </div>
  </div>
);

const EmptyChartCard = ({ title, subtitle }) => (
    <div className="bg-white rounded shadow-sm border border-gray-200 p-4 h-32 flex flex-col justify-between">
       <h2 className="text-xs font-semibold text-gray-600">{title}</h2>
       {subtitle && <p className="text-[10px] font-bold text-gray-400">{subtitle}</p>}
    </div>
);

export default OverviewPage;