import React from "react";
import Sidebar from "../Catalog/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import { useTransactionStore } from "../../Helpers/cartStore";
import { cashBookService } from "../../Helpers/functionsSupabase";
import { formatCurrencyNoUnit } from "../../Helpers/formatCurrency";
import Stats from "./Stats";
function CashBook() {
  // Dữ liệu mẫu cho doanh nghiệp may mặc
  const { transactionItems, setTransactionItems } = useTransactionStore();
  useEffect(() => {
    const getData = async () => {
      // const result = await fetchData();
      try {
        const result = await cashBookService.getAll();
        const result2 = await cashBookService.getReceivables();
        const result3 = await cashBookService.getPayables();
        setTransactionItems([...result, ...result2, ...result3]);
      } catch (error) {
        console.log("Lỗi rồi!", error);
      }
    };
    getData();
  }, []);
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     date: "20-10-2023 08:30",
  //     code: "PT0001",
  //     type: "Thu",
  //     category: "Thu tiền đơn hàng",
  //     partner: "Đại lý Thời trang Win",
  //     amount: 55000000,
  //     method: "Chuyển khoản",
  //     status: "Đã xác nhận",
  //     note: "Thanh toán đơn hàng 500 áo sơ mi",
  //   },
  //   {
  //     id: 2,
  //     date: "20-10-2023 10:15",
  //     code: "PC0001",
  //     type: "Chi",
  //     category: "Nhập nguyên liệu",
  //     partner: "Xưởng dệt Hòa Phát",
  //     amount: 32000000,
  //     method: "Chuyển khoản",
  //     status: "Đã xác nhận",
  //     note: "Nhập 200 cuộn vải lanh",
  //   },
  //   {
  //     id: 3,
  //     date: "21-10-2023 14:00",
  //     code: "PC0002",
  //     type: "Chi",
  //     category: "Trả lương công nhân",
  //     partner: "Tổ may 1",
  //     amount: 15000000,
  //     method: "Tiền mặt",
  //     status: "Đã chi",
  //     note: "Lương tăng ca tuần 2 tháng 10",
  //   },
  //   {
  //     id: 4,
  //     date: "21-10-2023 16:45",
  //     code: "PT0002",
  //     type: "Thu",
  //     category: "Thu tiền gia công",
  //     partner: "Công ty May 10",
  //     amount: 12500000,
  //     method: "Chuyển khoản",
  //     status: "Đã xác nhận",
  //     note: "Phí gia công lô quần tây xuất khẩu",
  //   },
  //   {
  //     id: 5,
  //     date: "22-10-2023 09:00",
  //     code: "PC0003",
  //     type: "Chi",
  //     category: "Bảo trì máy móc",
  //     partner: "Cửa hàng Phụ tùng Kỹ thuật",
  //     amount: 2500000,
  //     method: "Tiền mặt",
  //     status: "Đã chi",
  //     note: "Thay dầu và sửa máy may công nghiệp",
  //   },
  // ]);

  // useEffect(() => {
  //   const getData = async () => {
  //     // const result = await fetchData();
  //     try {
  //       const result = await cashBookService.getAll();
  //       // console.log(result);
  //       setTransactionItems(result);
  //     } catch (error) {
  //       console.log("Lỗi rồi!", error);
  //     }
  //   };
  //   getData();
  // }, []);
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="flex w-screen">
          {/* --- SIDEBAR (Giữ nguyên component của bạn) --- */}
          <Sidebar />

          <div className="flex-1 w-[100px] flex flex-col h-screen bg-gray-50 font-sans text-sm overflow-hidden">
            {/* --- TOP HEADER (Đúng chuẩn mẫu: h-14, trắng, border-b) --- */}
            <header className="flex items-center justify-between bg-white px-4 py-2 border-b border-gray-200 h-14 shrink-0">
              <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                Sổ quỹ thu chi
              </h1>
              <div className="flex items-center gap-4">
                {/* Company Info */}
                <div className="hidden md:flex items-center border border-gray-300 rounded px-2 py-1 bg-gray-50 uppercase font-semibold text-[11px]">
                  <span className="text-gray-600 mr-2">
                    CÔNG TY MAY MẶC THÀNH PHÁT
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

                {/* User Profile */}
                <div className="flex items-center gap-2 cursor-pointer border-l pl-4">
                  <div className="relative">
                    <img
                      src="https://i.pravatar.cc/150?u=account"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1 rounded-full">
                      5
                    </span>
                  </div>
                  <span className="font-medium text-gray-700 hidden sm:block">
                    ketoan_01
                  </span>
                </div>
              </div>
            </header>

            {/* --- MAIN CONTENT AREA (Nền Gray-300 để làm nổi bật các Panel trắng) --- */}
            <div className="p-2 flex-1 flex flex-col overflow-hidden bg-gray-300">
              {/* --- TOOLBAR (Màu Navy #283593 đặc trưng) --- */}
              <div className="bg-[#283593] text-white flex items-center px-2 py-1 gap-1 overflow-x-auto shrink-0 shadow-md">
                <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-green-600 rounded transition bg-green-700 font-medium">
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
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <span>Lập Phiếu Thu</span>
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-red-600 rounded transition bg-red-700 font-medium">
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
                      d="M20 12H4"
                    ></path>
                  </svg>
                  <span>Lập Phiếu Chi</span>
                </button>
                <div className="w-px h-5 bg-white/20 mx-1"></div>
                <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-white/10 rounded transition">
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
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    ></path>
                  </svg>
                  <span>In Sổ Quỹ</span>
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-white/10 rounded transition">
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <span>Xuất Excel</span>
                </button>
              </div>

              {/* --- THỐNG KÊ NHANH (Nằm trên nền xám) --- */}
              {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 mb-2">
                <div className="bg-white p-3 border border-gray-300 flex flex-col shadow-sm">
                  <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">
                    Tổng thu (Tháng)
                  </span>
                  <span className="text-green-600 text-lg font-bold">
                    67,500,000đ
                  </span>
                </div>
                <div className="bg-white p-3 border border-gray-300 flex flex-col shadow-sm">
                  <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">
                    Tổng chi (Tháng)
                  </span>
                  <span className="text-red-600 text-lg font-bold">
                    49,500,000đ
                  </span>
                </div>
                <div className="bg-white p-3 border border-gray-300 flex flex-col shadow-sm">
                  <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">
                    Tồn quỹ hiện tại
                  </span>
                  <span className="text-blue-700 text-lg font-bold">
                    18,000,000đ
                  </span>
                </div>
                <div className="bg-blue-50 p-3 border border-blue-200 flex flex-col shadow-sm">
                  <span className="text-blue-600 text-[10px] uppercase font-bold italic">
                    Dự kiến thu nợ
                  </span>
                  <span className="text-blue-800 text-lg font-bold">
                    120,000,000đ
                  </span>
                </div>
              </div> */}
              <Stats type="" />

              {/* --- TABLE AREA (Trắng, Border, Sticky Header) --- */}
              <div className="flex-1 flex flex-col overflow-hidden bg-white border border-gray-300 shadow-sm">
                <div className="flex-1 overflow-auto relative">
                  <table className="border-collapse w-full min-w-[1200px]">
                    <thead className="bg-[#f0f0f0] sticky top-0 z-10">
                      {/* Header Title Row */}
                      <tr>
                        <th className="w-40 border border-gray-300 px-2 py-2 text-center font-bold text-gray-700 uppercase text-[11px]">
                          Ngày giao dịch
                        </th>
                        <th className="w-40 border border-gray-300 px-2 py-2 text-center font-bold text-gray-700 uppercase text-[11px]">
                          Số chứng từ
                        </th>
                        <th className="w-40 border border-gray-300 px-2 py-2 text-center font-bold text-gray-700 uppercase text-[11px]">
                          Loại
                        </th>
                        <th className="w-60 border border-gray-300 px-2 py-2 text-center font-bold text-gray-700 uppercase text-[11px]">
                          Hạng mục
                        </th>
                        <th className="min-w-[150px] border border-gray-300 px-2 py-2 text-center font-bold text-gray-700 uppercase text-[11px]">
                          Đối tượng
                        </th>
                        <th className="w-36 border border-gray-300 px-2 py-2 text-center font-bold text-gray-700 uppercase text-[11px]">
                          Giá trị (VNĐ)
                        </th>
                        <th className="w-32 border border-gray-300 px-2 py-2 text-center font-bold text-gray-700 uppercase text-[11px]">
                          PT Thanh toán
                        </th>
                        {/* <th className="w-32 border border-gray-300 px-2 py-2 text-center font-bold text-gray-700 uppercase text-[11px]">Trạng thái</th> */}
                        <th className="w-48 border border-gray-300 px-2 py-2 text-center font-bold text-gray-700 uppercase text-[11px]">
                          Ghi chú
                        </th>
                        <th className="w-10 border border-gray-300 p-2 text-center bg-[#f0f0f0]">
                          V
                        </th>
                      </tr>
                      {/* Filter Row */}
                      <tr className="bg-[#f0f0f0]">
                        <th className="border border-gray-300 p-1"></th>

                        <th className="border border-gray-300 p-1">
                          <input
                            type="text"
                            className="w-full h-7 px-1 outline-none border border-gray-300 text-[11px] font-normal"
                            placeholder="Lọc mã..."
                          />
                        </th>
                        <th className="border border-gray-300 p-1">
                          <select className="w-full h-7 outline-none border border-gray-300 text-[11px] font-normal">
                            <option>Tất cả</option>
                            <option>Thu</option>
                            <option>Chi</option>
                          </select>
                        </th>
                        <th className="border border-gray-300 p-1">
                          <input
                            type="text"
                            className="w-full h-7 px-1 outline-none border border-gray-300 text-[11px] font-normal"
                          />
                        </th>
                        <th className="border border-gray-300 p-1">
                          <input
                            type="text"
                            className="w-full h-7 px-1 outline-none border border-gray-300 text-[11px] font-normal"
                          />
                        </th>
                        <th className="border border-gray-300 p-1">
                          <div className="flex bg-white h-7 items-center border border-gray-300">
                            <span className="px-1 text-gray-400">≥</span>
                            <input
                              type="text"
                              className="w-full px-1 outline-none text-[11px] font-normal text-right"
                            />
                          </div>
                        </th>
                        <th className="border border-gray-300 p-1">
                          <select className="w-full h-7 outline-none border border-gray-300 text-[11px] font-normal">
                            <option>Tất cả</option>
                          </select>
                        </th>
                        <th className="border border-gray-300 p-1">
                          <select className="w-full h-7 outline-none border border-gray-300 text-[11px] font-normal">
                            <option>Đã xác nhận</option>
                          </select>
                        </th>
                        <th className="w-10 border border-gray-300 p-2 text-center bg-[#f0f0f0]">
                          V
                        </th>
                        {/* <th className="border border-gray-300 p-1">
                          <input
                            type="text"
                            className="w-full h-7 px-1 outline-none border border-gray-300 text-[11px] font-normal"
                          />
                        </th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white text-gray-800">
                      {/* {data.map((item, idx) => (
                        <tr
                          key={item.id}
                          className={`hover:bg-blue-50 transition-colors border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                          <td className="border-r border-gray-300 p-2 text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="border-r border-gray-300 px-2 py-1.5 text-center text-[11px]">
                            {item.date}
                          </td>
                          <td className="border-r border-gray-300 px-2 py-1.5 font-bold text-blue-700">
                            {item.code}
                          </td>
                          <td className="border-r border-gray-300 px-2 py-1.5 text-center">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${item.type === "Thu" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                            >
                              {item.type}
                            </span>
                          </td>
                          <td className="border-r border-gray-300 px-2 py-1.5">
                            {item.category}
                          </td>
                          <td className="border-r border-gray-300 px-2 py-1.5 font-medium">
                            {item.partner}
                          </td>
                          <td
                            className={`border-r border-gray-300 px-2 py-1.5 text-right font-bold ${item.type === "Thu" ? "text-green-600" : "text-red-600"}`}
                          >
                            {item.amount.toLocaleString()}
                          </td>
                          <td className="border-r border-gray-300 px-2 py-1.5 text-center">
                            {item.method}
                          </td>
                          <td className="border-r border-gray-300 px-2 py-1.5 text-center italic text-gray-600 text-[11px]">
                            {item.status}
                          </td>
                          <td className="px-2 py-1.5 text-gray-500 italic text-[11px]">
                            {item.note}
                          </td>
                        </tr>
                      ))} */}

                      {transactionItems ? (
                        transactionItems.map((item, idx) => {
                          if (
                            item.transaction_type == "INCOME" ||
                            item.transaction_type == "EXPENSE"
                          ) {
                            return (
                              <tr
                                key={item.id}
                                className={`hover:bg-blue-50 transition-colors border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                              >
                                <td className="border-r border-gray-300 px-2 py-1.5 text-center text-[12px]">
                                  {item.transaction_date || ""}
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5 font-bold text-blue-700">
                                  {item.transaction_code || ""}
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5 text-center">
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${item.transaction_type === "INCOME" ? "bg-green-100 text-green-700" : item.transaction_type === "EXPENSE" ? "bg-red-100 text-red-700" : ""}`}
                                  >
                                    {item.transaction_type === "INCOME"
                                      ? "Thu"
                                      : item.transaction_type === "EXPENSE"
                                        ? "Chi"
                                        : ""}
                                  </span>
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5">
                                  {/* {item.category} */}
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5 font-medium">
                                  {item.partner_name || ""}
                                </td>
                                <td
                                  className={`border-r border-gray-300 px-2 py-1.5 text-right font-bold ${item.transaction_type === "INCOME" ? "text-green-600" : item.transaction_type === "EXPENSE" ? "text-red-600" : ""}`}
                                >
                                  {item.amount
                                    ? item.amount.toLocaleString()
                                    : ""}
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5 text-center">
                                  {item.payment_method
                                    ? item.payment_method === "PARTIAL"
                                      ? "Đặt cọc"
                                      : "Tất toán"
                                    : ""}
                                </td>
                                {/* <td className="border-r border-gray-300 px-2 py-1.5 text-center italic text-gray-600 text-[11px]">{item.status}</td> */}
                                <td className="px-2 py-1.5 text-gray-500 italic text-[11px]">
                                  {item.note || ""}
                                </td>
                                <th className="w-10 border border-gray-300 p-2 text-center bg-[#f0f0f0]">
                                  V
                                </th>
                              </tr>
                            );
                          } else
                            return (
                              <tr
                                // key={item.id}
                                className={`hover:bg-blue-50 transition-colors border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                              >
                                <td className="border-r border-gray-300 px-2 py-1.5 text-center text-[12px]">
                                  {item.transaction_date || ""}
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5 font-bold text-blue-700">
                                  {item.co_code || ""}
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5 text-center">
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700`}
                                  >
                                    Dự kiến thu
                                  </span>
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5">
                                  {/* {item.category} */}
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5 font-medium">
                                  {item.partner_name || ""}
                                </td>
                                <td
                                  className={`border-r border-gray-300 px-2 py-1.5 text-right font-bold bg-green-100 text-green-600`}
                                >
                                  {item.receivable_amount
                                    ? formatCurrencyNoUnit(
                                        item.receivable_amount,
                                      )
                                    : ""}
                                </td>
                                <td className="border-r border-gray-300 px-2 py-1.5 text-center">
                                  {item.payment_method
                                    ? item.payment_method === "PARTIAL"
                                      ? "Đặt cọc"
                                      : "Tất toán"
                                    : ""}
                                </td>
                                {/* <td className="border-r border-gray-300 px-2 py-1.5 text-center italic text-gray-600 text-[11px]">{item.status}</td> */}
                                <td className="px-2 py-1.5 text-gray-500 italic text-[11px]">
                                  {item.note || ""}
                                </td>
                                <th className="w-10 border border-gray-300 p-2 text-center bg-[#f0f0f0]">
                                  V
                                </th>
                              </tr>
                            );
                        })
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* --- PAGINATION (H-10, trắng) --- */}
                <footer className="h-10 bg-white border-t border-gray-300 flex items-center justify-between px-4 shrink-0 text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <button className="p-1 border rounded hover:bg-gray-100 disabled:opacity-50">
                        «
                      </button>
                      <button className="p-1 border rounded hover:bg-gray-100">
                        ‹
                      </button>
                      <span className="mx-2 text-gray-600">
                        Trang{" "}
                        <input
                          type="text"
                          defaultValue="1"
                          className="w-8 h-6 border text-center mx-1 outline-none font-bold"
                        />{" "}
                        / 10
                      </span>
                      <button className="p-1 border rounded hover:bg-gray-100">
                        ›
                      </button>
                      <button className="p-1 border rounded hover:bg-gray-100">
                        »
                      </button>
                    </div>
                    <select className="h-6 border rounded px-1 outline-none bg-gray-50">
                      <option>50 dòng/trang</option>
                    </select>
                  </div>
                  <div className="text-gray-500 font-medium italic">
                    Hiển thị 1 - 5 trên 480 giao dịch
                  </div>
                </footer>
              </div>
            </div>
          </div>

          {/* Floating Action Buttons */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            <button
              title="Hỗ trợ kỹ thuật"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CashBook;
