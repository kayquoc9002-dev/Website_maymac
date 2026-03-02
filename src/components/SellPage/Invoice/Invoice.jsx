import React, { use } from "react";
import { useState } from "react";
import { useCartStore } from "../../../Helpers/cartStore";
import RowProduct from "./RowProduct";
import { formatCurrencyNoUnit } from "../../../Helpers/formatCurrency";
import BankingPicture from "./BankingPicture";
import { useForm } from "react-hook-form";
import { handleOrderForCustomer } from "../../../Helpers/functionsSupabase";
import generateCode from "../../../Helpers/generateCode";
// import qrdemo from "../../../../public/pictures/qrdemo.png";
function Invoice({ openInvoice }) {
  const { cartItems } = useCartStore();
  const [products, setProducts] = useState(cartItems);
  const [discount, setDiscount] = useState(12);
  const [selectedPart, setSelectedPart] = useState(true);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedPayWay, setSelectedPayWay] = useState("cash");
  const [part] = useState(30);
  const [money, setMoney] = useState(0);
  const {clearCart} = useCartStore();
  const now = new Date();
  const [date] = useState(now.toLocaleDateString());
  const [time] = useState(now.toLocaleTimeString());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [totalOrder, setTotalOrder] = useState(
    cartItems.reduce((sum, item) => sum + item.good_total, 0),
  );
  const [neededPayment, setNeededPayment] = useState(
    totalOrder - totalOrder * (discount / 100),
  );

  const handleSelectMethod = (method) => {
    if (method == "all") {
      setSelectedAll(true);
      setSelectedPart(false);
    } else {
      setSelectedAll(false);
      setSelectedPart(true);
    }
  };

  const handleSelectPayWay = (way) => {
    setSelectedPayWay(way);
  };

  const handleChangeMoney = (e) => {
    const flag = parseInt(e.target.value.replace(/\./g, ""));
    // console.log(e.target.value.replace(/\./g, ""));
    if (flag) {
      setMoney(flag);
    } else {
      setMoney(0);
    }
  };

  const onSubmit = (data) => {
    data = {
      order_code: generateCode(),
      order_time: time,
      order_date: date,
      customer_id: "D123",
      customer_name: "Nguyễn Văn A",
      ...data,
      detail_order: cartItems,
      discount: discount,
      payment_method: selectedPart ? "PARTIAL" : "FULL",
      pay_way: selectedPayWay,
      needed_payment: neededPayment,
      down_payment: selectedPart
        ? Math.round(neededPayment * (part / 100))
        : neededPayment,
      remaining_payment: selectedPart
        ? Math.round(neededPayment * (1 - part / 100))
        : 0,
      banking_picture: selectedPayWay === "bank" ? "link ảnh ngân hàng" : null,
      total_order: totalOrder,
      cash_received: selectedPayWay === "cash" ? money : 0,
      change: selectedPayWay === "cash" ? money - (selectedPart ? Math.round(neededPayment * (part / 100)) : neededPayment) : 0
    };
    try{
      const sendData = async () => {
        const result = await  handleOrderForCustomer(data);
        clearCart();
      }
      sendData();
    }catch(error){
      console.log("Lỗi rồi!", error);
    }
    // console.log(data);
  };

  return (
    <>
      <div className="min-h-screen w-[80vw] flex items-center justify-center p-4 font-sans text-sm">
        {/* Main Modal Container */}
        <div className="w-full bg-[#F0F2F5] rounded-sm shadow-2xl overflow-hidden flex flex-col relative border border-gray-400">
          {/* --- HEADER (Chuẩn h-14) --- */}
          <div className="flex justify-between items-center px-6 h-14 bg-white border-b border-gray-200 shrink-0">
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">
              Đơn đặt hàng
            </h1>
            <button
              onClick={openInvoice}
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* --- FILTERS AREA --- */}
          {/* <div className="px-6 py-4 flex flex-wrap gap-3 bg-white/50 border-b border-gray-200">
            <div className="relative flex-grow max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Nhập tên, số điện thoại khách hàng, số hóa đơn..."
                className="w-full py-2 pl-9 pr-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white placeholder-slate-400 italic"
              />
            </div>
            <div className="relative w-40">
              <select className="w-full appearance-none bg-white border border-gray-300 text-slate-700 py-2 pl-4 pr-8 rounded-md text-sm focus:outline-none focus:border-blue-500 cursor-pointer">
                <option>Toàn bộ</option>
                <option>Đang phục vụ</option>
                <option>Đã in tạm</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div> */}

          {/* --- CONTENT GRID --- */}
          {/* 
    THAY ĐỔI CHÍNH: 
    1. Dùng 'flex flex-wrap' thay vì 'grid' để hỗ trợ rớt dòng.
    2. 'lg:flex-nowrap' để trên màn hình lớn thì nằm trên cùng 1 hàng.
    3. 'justify-center' để khi rớt dòng (mobile/tablet) thì cả 2 khối sẽ căn giữa.
*/}
          <div className="p-4 flex flex-wrap lg:flex-nowrap gap-4 flex-1 justify-center lg:justify-start items-start overflow-y-auto lg:overflow-hidden h-auto lg:h-[650px] custom-scrollbar">
            {/* LEFT COLUMN: Thông tin đặt hàng - Thiết kế chuẩn ERP MISA/ERP */}
            <form
              id="infoReceiver"
              onSubmit={handleSubmit(onSubmit)}
              className="flex-1 min-w-[400px] h-[600px] bg-white rounded-sm border border-gray-300 shadow-sm flex flex-col overflow-hidden"
            >
              {/* Header của Panel (Theo mẫu 1: xám nhạt, chữ in hoa đậm) */}
              <div className="p-3 bg-[#f0f0f0] border-b border-gray-200 shrink-0">
                <h2 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-800"
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
                  Thông tin đặt hàng
                </h2>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 overflow-y-auto custom-scrollbar space-y-5">
                {/* Nhóm: Thông tin cơ bản */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 ">
                      Tên người nhận{" "}
                      <span class="text-red-500 focus:border-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        {...register("receiver_name", { required: true })}
                        defaultValue="Nguyễn Văn A"
                        className={
                          "w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:border-blue-500 outline-none bg-gray-50 font-medium " +
                          (errors.receiver_name
                            ? "border-red-500 focus:border-red-500"
                            : " border-gray-300")
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 ">
                      Số điện thoại{" "}
                      <span class="text-red-500 focus:border-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("receiver_phone", { required: true })}
                      defaultValue="0901.234.567"
                      className={
                        "w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:border-blue-500 outline-none bg-gray-50 font-medium text-blue-700" +
                        (errors.receiver_phone
                          ? "border-red-500 focus:border-red-500"
                          : " border-gray-300")
                      }
                    />
                  </div>
                </div>

                {/* Nhóm: Đơn vị */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 ">
                    Tên đơn vị / Công ty{" "}
                    <span class="text-red-500 focus:border-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("receiver_company", { required: true })}
                    placeholder="Nhập tên đơn vị (nếu có)..."
                    className={
                      "w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:border-blue-500 outline-none italic" +
                      (errors.receiver_company
                        ? "border-red-500 focus:border-red-500"
                        : " border-gray-300")
                    }
                  />
                </div>

                {/* Nhóm: Địa chỉ */}
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-500 ">
                    Địa chỉ giao hàng{" "}
                    <span class="text-red-500 focus:border-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    {...register("receiver_address", { required: true })}
                    defaultValue="123 Đường số 4, Phường 5, Quận Gò Vấp, TP. Hồ Chí Minh"
                    className={
                      "w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:border-blue-500 outline-none resize-none bg-gray-50" +
                      (errors.receiver_address
                        ? "border-red-500 focus:border-red-500"
                        : " border-gray-300")
                    }
                  ></textarea>
                </div>

                {/* Nhóm: Phương thức thanh toán (Thiết kế dạng Card Selection chuyên nghiệp) */}
                <div className="space-y-3 pt-2">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Phương thức thanh toán
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Option 1: Đặt cọc */}
                    <div
                      onClick={() => {
                        handleSelectMethod("part");
                      }}
                      className={`relative border-2 bg-blue-50 rounded-md p-3 cursor-pointer group transition-all ${selectedPart ? "border-blue-700" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-4  bg-white ${selectedPart ? "border-blue-700" : ""}`}
                        ></div>
                        <div>
                          <p
                            className={`text-sm font-bold  ${selectedPart ? "text-blue-900" : ""}`}
                          >
                            Đặt cọc (30%)
                          </p>
                          <p
                            className={`text-[10px]  ${selectedPart ? "text-blue-600" : ""}`}
                          >
                            Thanh toán trước một phần
                          </p>
                        </div>
                      </div>
                      {/* Badge check icon */}
                      {selectedPart && (
                        <div className="absolute -top-2 -right-2 bg-blue-700 text-white rounded-full p-0.5">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Option 2: Tất toán */}
                    <div
                      onClick={() => {
                        handleSelectMethod("all");
                      }}
                      className={`relative border-2 bg-blue-50 rounded-md p-3 cursor-pointer group transition-all ${selectedAll ? "border-blue-700" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-4  bg-white ${selectedAll ? "border-blue-700" : ""}`}
                        ></div>
                        <div>
                          <p
                            className={`text-sm font-bold  ${selectedAll ? "text-blue-900" : ""}`}
                          >
                            Tất toán
                          </p>
                          <p
                            className={`text-[10px]  ${selectedAll ? "text-blue-600" : ""}`}
                          >
                            Thanh toán trước toàn bộ hóa đơn
                          </p>
                        </div>
                      </div>
                      {/* Badge check icon */}
                      {selectedAll && (
                        <div className="absolute -top-2 -right-2 bg-blue-700 text-white rounded-full p-0.5">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* <div
                      onClick={() => {
                        handleSelectMethod("all");
                      }}
                      className="border border-gray-300 bg-white rounded-md p-3 cursor-pointer hover:border-blue-400 hover:bg-gray-50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white"></div>
                        <div>
                          <p className="text-sm font-bold text-gray-700">
                            Tất toán
                          </p>
                          <p className="text-[10px] text-gray-400">
                            Thanh toán trước toàn bộ hóa đơn
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Nhóm: Hình thức giao dịch (Tiền mặt / Chuyển khoản) */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    Hình thức thanh toán thực tế
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Lựa chọn: Tiền mặt */}
                    <div
                      onClick={() => handleSelectPayWay("cash")}
                      className={`relative border-2 ${selectedPayWay === "cash" ? "border-blue-700" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"} rounded-md p-3 cursor-pointer transition-all`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-lg">
                          💵
                        </div>
                        <span
                          className={`text-sm font-bold ${selectedPayWay === "cash" ? "text-blue-900" : ""}`}
                        >
                          Tiền mặt
                        </span>
                      </div>
                      {/* Checkmark icon */}
                      {selectedPayWay === "cash" && (
                        <div
                          className={`absolute -top-2 -right-2 bg-blue-700 text-white rounded-full p-0.5`}
                        >
                          {/* "absolute top-1 right-1 bg-blue-700 text-white rounded-full p-0.5" */}
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Lựa chọn: Chuyển khoản */}
                    <div
                      onClick={() => handleSelectPayWay("bank")}
                      className={`relative border-2 ${selectedPayWay === "bank" ? "border-blue-700" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"} rounded-md p-3 cursor-pointer transition-all`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                          💳
                        </div>
                        <span
                          className={`text-sm font-bold ${selectedPayWay === "bank" ? "text-blue-900" : ""}`}
                        >
                          Chuyển khoản
                        </span>
                      </div>
                      {/* Checkmark icon */}
                      {selectedPayWay === "bank" && (
                        <div
                          className={`absolute -top-2 -right-2 bg-blue-700 text-white rounded-full p-0.5`}
                        >
                          {/* "absolute top-1 right-1 bg-blue-700 text-white rounded-full p-0.5" */}
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {selectedPayWay === "bank" && (
                    <div>
                      {selectedPart && (
                        <div>
                          <div className="flex justify-between text-red-600 font-bold border-b border-blue-100 pb-1">
                            <span>Tiền cọc</span>
                            <span className="w-60 text-right bg-transparent border-b border-slate-300 text-lg focus:border-indigo-600 focus:outline-none pb-1 font-bold text-red-600">
                              {formatCurrencyNoUnit(
                                Math.round(neededPayment * (part / 100)),
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between text-gray-500 font-medium italic">
                            <span>Tiền còn lại:</span>
                            <span>
                              {formatCurrencyNoUnit(
                                Math.round(neededPayment * (1 - part / 100)),
                              )}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="w-full h-[500px] flex justify-center items-center bg-gray-50">
                        <div className="w-60 h-60 p-2 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center">
                          <img
                            src="https://www.nhatthuc.com.vn/images_upload/shops/taomaqrtaikhoannganhanghdbank_1703753359408%5B1%5D.png"
                            className="w-full h-full object-cover rounded-md"
                            alt="QR Code"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedPayWay === "cash" && (
                    <div className="space-y-2 pt-4">
                      {selectedPart && (
                        <div className="flex justify-between text-red-600 font-bold border-b border-blue-100 pb-1">
                          <span>Tiền cọc</span>
                          <span className="w-60 text-right bg-transparent border-b border-slate-300 text-lg focus:border-indigo-600 focus:outline-none pb-1 font-bold text-red-600">
                            {formatCurrencyNoUnit(
                              Math.round(neededPayment * (part / 100)),
                            )}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-blue-800 font-bold border-b border-blue-100 pb-1">
                        <span>Khách đưa (Tiền mặt)</span>
                        <input
                          type="text"
                          value={money ? formatCurrencyNoUnit(money) : ""}
                          onChange={(e) => {
                            handleChangeMoney(e);
                          }}
                          className="w-60 text-right bg-transparent border-b border-slate-300 text-lg focus:border-indigo-600 focus:outline-none pb-1 font-bold text-indigo-700"
                        />
                      </div>
                      <div className="flex justify-between text-gray-500 font-medium italic">
                        <span>Tiền thừa trả khách:</span>
                        {!selectedAll ? (
                          <span>
                            {money - (neededPayment * part) / 100 > 0
                              ? formatCurrencyNoUnit(
                                  money -
                                    Math.round(neededPayment * (part / 100)),
                                )
                              : ""}
                          </span>
                        ) : (
                          <span>
                            {money - neededPayment > 0
                              ? formatCurrencyNoUnit(
                                  money - Math.round(neededPayment),
                                )
                              : ""}
                          </span>
                        )}
                      </div>
                      {selectedPart && (
                        <div className="flex justify-between text-gray-500 font-medium italic">
                          <span>Tiền còn lại:</span>
                          <span>
                            {formatCurrencyNoUnit(
                              Math.round(neededPayment * (1 - part / 100)),
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

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
                {selectedPayWay === "bank" && <BankingPicture />}

                {/* Ghi chú thêm cho đơn hàng */}
                <div className="pt-4 border-t border-dashed border-gray-200">
                  <div className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline">
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span className="text-xs font-bold uppercase">
                      Thêm ghi chú giao hàng
                    </span>
                  </div>
                </div>
              </div>
            </form>

            {/* RIGHT COLUMN: Cố định chiều rộng (w-[500px]), không co lại (shrink-0) */}
            {/* 'w-full max-w-[500px]' giúp nó căn giữa tốt hơn trên mobile */}
            <div className="w-full sm:w-[500px] shrink-0 h-[600px] flex flex-col overflow-hidden">
              <div className="bg-white flex-1 rounded-t-sm border border-gray-300 border-b-0 shadow-sm flex flex-col overflow-hidden">
                {/* Tiêu đề (Đứng yên) */}
                <div className="p-3 bg-gray-50 border-b border-gray-200 text-xs font-bold uppercase text-slate-500 shrink-0">
                  Chi tiết hóa đơn
                </div>

                {/* Khu vực chứa bảng (Có Scroll dọc) */}
                <div className="overflow-y-auto flex-1 custom-scrollbar min-h-0">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 z-10 shadow-sm">
                      <tr className="bg-[#f0f0f0] text-[11px] font-bold text-slate-700 uppercase">
                        <th className="p-3 border-b border-gray-200">
                          Hàng hóa
                        </th>
                        <th className="p-3 text-right border-b border-gray-200">
                          SL
                        </th>
                        <th className="p-3 text-right border-b border-gray-200">
                          Đơn vị
                        </th>
                        <th className="p-3 text-right border-b border-gray-200">
                          Tiền thuế
                        </th>
                        <th className="p-3 text-right border-b border-gray-200">
                          Thành tiền
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[13px] divide-y divide-gray-100">
                      {products.map((item, index) => (
                        <RowProduct key={index} product={item} />
                      ))}

                      {/* Lặp lại dữ liệu của bạn... */}
                    </tbody>
                  </table>
                </div>

                {/* Phần tổng tiền (Đứng yên ở dưới bảng) */}
                <div className="p-4 bg-gray-50 border-t border-gray-200 shrink-0">
                  <div className="flex justify-between items-end border-b border-dashed border-gray-300 pb-2">
                    <span className="text-blue-600 font-bold text-[10px] uppercase">
                      Tổng tiền hàng
                    </span>
                    <span className="text-blue-700 font-bold">
                      {formatCurrencyNoUnit(totalOrder)}
                    </span>
                  </div>
                  <div className="flex justify-between items-end border-b border-dashed border-gray-300 pb-2 mt-2">
                    <span className="text-blue-600 font-bold text-[10px] uppercase">
                      Giảm giá (12%):
                    </span>
                    <span className="text-blue-700 font-bold">
                      - {formatCurrencyNoUnit(totalOrder * (discount / 100))}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-slate-600 font-black uppercase text-[11px]">
                      Tổng cộng thanh toán
                    </span>
                    <span className="text-2xl font-black text-red-600 tracking-tighter">
                      {formatCurrencyNoUnit(neededPayment)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sawtooth (Răng cưa luôn nằm dưới cùng) */}
              <div className="h-3 w-full bg-white relative sawtooth-edge shrink-0"></div>
            </div>
          </div>

          {/* --- FOOTER ACTIONS --- */}
          <div className="px-6 py-4 bg-white border-t border-gray-200 flex justify-end gap-3 shrink-0">
            <button
              type="submit"
              form="infoReceiver"
              className="px-8 py-2 bg-[#5B67E8] hover:bg-[#4a56d6] text-white rounded-md text-sm font-bold shadow-lg transition-all active:scale-95 uppercase tracking-wide"
            >
              Đồng ý
            </button>
            <button
              onClick={openInvoice}
              className="px-8 py-2 bg-white border border-gray-300 text-slate-700 hover:bg-gray-100 rounded-md text-sm font-bold shadow-sm transition-all uppercase tracking-wide"
            >
              Đóng
            </button>
          </div>
        </div>

        {/* --- INJECTED STYLES --- */}
        <style>{`
        .sawtooth-edge {
          background-image: radial-gradient(circle, transparent 50%, #ffffff 50%);
          background-size: 10px 10px;
          background-repeat: repeat-x;
          background-position: 0 100%;
          height: 10px;
          margin-top: -5px;
          z-index: 10;
          filter: drop-shadow(0 2px 1px rgba(0,0,0,0.05));
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
      </div>
    </>
  );
}

export default Invoice;
