import React from "react";
import { useCartStore } from "../../../Helpers/cartStore";
import { useState } from "react";
import { formatCurrencyNoUnit } from "../../../Helpers/formatCurrency";
import Invoice from "../Invoice/Invoice";

function Bill({ order_note }) {
  const [selectInvoice, setSelectInvoice] = useState(false);
  const { cartItems, clearCart } = useCartStore();
  
  const tax = cartItems.reduce(
    (sumTax, item) =>
      sumTax + (item.good_total * item.good_tax) / (100 + item.good_tax),
    0,
  );
  const total = cartItems.reduce((sum, item) => sum + item.good_total, 0);

  const now = new Date();
  const [date] = useState(now.toLocaleDateString());

  const handleNoteChange = (e) => {
    // Xử lý thay đổi ghi chú ở đây, ví dụ: lưu vào state hoặc gửi lên server
    // console.log("Ghi chú đơn hàng:", e.target.value);
    order_note.current = e.target.value;
  };

  const openInvoice = () => {
    setSelectInvoice(!selectInvoice);
  };

  return (
    <>
      {selectInvoice && (
        <div className="fixed inset-0 z-20 flex justify-center items-center">
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300   ${
              selectInvoice
                ? "opacity-60 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            // {/* Overlay */}
          </div>
          <Invoice
            openInvoice={openInvoice}
            // updateSelectedGood={updateSelectedGood}
          />
        </div>
      )}
      <div className="w-80 md:w-96 bg-white border border-gray-300 shadow-sm flex flex-col shrink-0">
        <div className="p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center text-[12px] font-bold text-gray-500 uppercase">
          <span>📅 {date}</span>
          {/* <span className="text-blue-700">📍 Tại cửa hàng</span> */}
        </div>

        {/* <div className="p-3 border-b border-gray-200">
          <div className="flex items-center gap-2 border border-blue-200 rounded px-2 py-2 bg-blue-50/50">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              type="text"
              placeholder="Tìm khách hàng (F4)..."
              className="bg-transparent outline-none flex-1 font-medium text-gray-700"
            />
            <button className="text-blue-600 font-bold text-xl hover:scale-125 transition">
              +
            </button>
          </div>
        </div> */}

        <div className="p-4 space-y-4 flex-1">
          <div className="flex justify-between items-end border-b border-dashed border-gray-300 pb-2">
            <span className="text-gray-500 font-semibold">
              Tổng tiền hàng trước thuế:
            </span>
            <span className="text-lg font-bold text-gray-800">
              {formatCurrencyNoUnit(total)}
            </span>
          </div>
          <div className="flex justify-between items-end border-b border-dashed border-gray-300 pb-2">
            <span className="text-blue-600 font-semibold">Thuế:</span>
            <span className="text-blue-700 font-bold">
              {cartItems.length ? "+" + formatCurrencyNoUnit(tax) : ""}
            </span>
          </div>
          <div className="flex justify-between items-end border-b border-dashed border-gray-300 pb-2">
            <span className="text-blue-600 font-semibold">Giảm giá (12%):</span>
            <span className="text-blue-700 font-bold">
              {cartItems.length > 0
                ? "+" + formatCurrencyNoUnit(total * (12 / 100))
                : ""}
            </span>
          </div>
          <div className="pt-2">
            <div className="text-right text-gray-500 text-xs uppercase font-bold mb-1">
              Tổng cộng cần thu
            </div>
            <div className="text-right text-2xl font-black text-red-600 tracking-tight">
              {formatCurrencyNoUnit(total * (1 - 12 / 100))}
            </div>
          </div>

          {/* <div className="space-y-2 pt-4">
            <div className="flex justify-between text-blue-800 font-bold border-b border-blue-100 pb-1">
              <span>Khách đưa (Tiền mặt)</span>
              <span className="text-lg">314.160</span>
            </div>
            <div className="flex justify-between text-gray-500 font-medium italic">
              <span>Tiền thừa trả khách:</span>
              <span>0</span>
            </div>
          </div> */}
        </div>

        <div className="p-3 bg-gray-50 border-t border-gray-200 mt-auto">
          <textarea
            onChange={handleNoteChange}
            className="w-full border border-gray-300 rounded p-2 text-xs h-12 mb-3 outline-none focus:border-blue-400 italic"
            placeholder="Ghi chú đơn hàng..."
          ></textarea>

          <div className="flex gap-2">
            <button className="flex-1 bg-white border-2 border-blue-700 text-blue-700 font-bold py-3 rounded hover:bg-blue-50 transition leading-tight">
              LƯU TẠM
              <br />
              <span className="text-[10px] font-normal">(F10)</span>
            </button>
            <button
              onClick={openInvoice}
              className="flex-[2] bg-blue-700 text-white font-bold py-3 rounded shadow-lg hover:bg-blue-800 transition text-xl"
            >
              THU TIỀN (F9)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bill;
