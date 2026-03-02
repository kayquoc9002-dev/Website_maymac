import React, { use } from "react";
import { TbListSearch } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";
import TableSupplier from "./TableSupplier/TableSupplier";
import TableGood from "./TableGood/TableGood";
import DetailBookedGood from "../DetailBookedGood/DetailBookedGood";
import { useForm } from "react-hook-form";
import {
  requestService,
  orderService,
  handlePurchaseOrder,
} from "../../../../Helpers/functionsSupabase";
import { purchaseOrder } from "../../../../Helpers/urlAPI";
import { useStore } from "../../../../Helpers/cartStore";
import { formatCurrencyNoUnit } from "../../../../Helpers/formatCurrency";
import generateCode from "../../../../Helpers/generateCode";
function FormInfoBookedOrder({ openForm, dataOrder, edittedData, setData }) {
  const [selectedSupplier, setselectedSupplier] = useState(false);
  const [selectedGood, setSelectedGood] = useState(false);
  const now = new Date();
  const [date] = useState(now.toLocaleDateString());
  const [time] = useState(now.toLocaleTimeString());
  // const [infoSelectedSupplier, setSelectedInfoSupplier] = useState({});

  const { setStore, option, clearOption } = useStore();
  const priId = useRef([]);
  const purchasedRequest = useRef("");
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [po_code] = useState(generateCode());
  const neededPayment = Math.round(option.reduce(
    (total, item) =>
      total +
      item.requested_qty * item.variant_price * (1 + item.good_tax / 100),
    0,
  ));
  const total = option.reduce(
    (total, item) => total + item.requested_qty * item.variant_price,
    0,
  );
  const totalTax = Math.round(option.reduce(
    (total, item) =>
      total + item.requested_qty * item.variant_price * (item.good_tax / 100),
    0,
  ));
  const totalquantity = option.reduce(
    (total, item) => total + item.requested_qty,
    0,
  );
  console.log(neededPayment);
  // const [quantity, setQuatity] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [taxAmount, setTaxAmount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await orderService.getAllRequest();
        const flag = result.filter((item) => {
          if (!priId.current.includes(item.id)) {
            return item;
          }
        });
        setStore(flag);
      } catch (error) {
        console.log("Lỗi rồi!", error);
      }
    };
    getData();
  }, []);

  const openFormSupplier = () => {
    setselectedSupplier(!selectedSupplier);
  };
  const openFormGood = () => {
    setSelectedGood(!selectedGood);
  };

  useEffect(() => {
    const getData = async () => {
      // Fetch data from API or perform any side effects here
      try {
        // const result = await requestService.getRequestById(
        //   purchasedRequest.current,
        // );
        // console.log(result);
        // const result2 = await orderService.getAllRequest();
        // console.log(result2);
        // setOrder(result);
      } catch (error) {
        console.log("Lỗi rồi!", error);
      }
    };
    if (!purchaseOrder.current) {
      getData();
    }
  }, [purchasedRequest.current]);

  const onSubmit = (data) => {
    data = {
      ...data,
      supplier_id: option[0].supplier_id,
      supplier_name: option[0].supplier_name,
      // booked_goods: detailBookedGoods.current,
      booked_goods: option,
      total_amount: neededPayment,
      order_amount: 100000000,
      po_code: po_code
    };
    setData([...dataOrder, data]);
    console.log(data);
    const sendOrder = async () => {
      try {
        
        const result = await handlePurchaseOrder(data);
        reset();
        clearOption();
      } catch (error) {
        console.log("Lỗi", error);
      }
    };
    sendOrder();

    // openForm();
  };
  return (
    <>
      {selectedSupplier && (
        <div className="fixed inset-0 z-20 flex justify-center items-center">
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300   ${
              selectedSupplier
                ? "opacity-60 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            // {/* Overlay */}
          </div>
          <TableSupplier
            openFormSupplier={openFormSupplier}
            setSelectedInfoSupplier={setSelectedInfoSupplier}
            // edittedData={edittedData} setData={setData}
          />
        </div>
      )}

      {selectedGood && (
        <div className="fixed inset-0 z-20 flex justify-center items-center">
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300   ${
              selectedGood
                ? "opacity-60 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            // {/* Overlay */}
          </div>
          <TableGood priId={priId} openFormGood={openFormGood} />
          {/* edittedData={edittedData} setData={setData} */}
        </div>
      )}
      {/* <div class="bg-gray-50 min-h-screen">
        <div class="font-sans text-sm text-gray-700 bg-gray-100 min-h-screen p-4 flex justify-center"> */}
      {/* <!-- Main Window Container --> */}
      <div class="rounded w-full max-w-[1200px] max-h-[80vh] bg-white shadow-xl border border-gray-400 flex flex-col z-10">
        {/* <!-- Window Header --> */}
        <div class="rounded-t flex justify-between items-center px-5 py-3 bg-gray-100 border-b border-gray-200">
          <h1 class="font-bold text-gray-800 text-lg">Phiếu đặt hàng</h1>
          <div class="flex space-x-2">
            <svg
              class="w-4 h-4 text-gray-500 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              ></path>
            </svg>
            <svg
              class="w-4 h-4 text-gray-500 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              onClick={openForm}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>

        {/* <!-- Content Area --> */}
        <form
          id="myForm"
          class="p-4 flex-grow overflow-y-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <button
            type="button"
            onClick={openFormGood}
            class="border border-gray-400 text-gray-600 px-4 py-1.5 rounded bg-white hover:bg-gray-200 mb-5 text-sm font-medium shadow-sm"
          >
            Chọn hàng cần đặt
          </button>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* <!-- Left Column: General Info --> */}
            <div class="lg:col-span-8">
              <h3 class="text-gray-600 font-bold uppercase text-sm mb-4">
                Thông tin chung
              </h3>

              <div class="grid grid-cols-[100px_1fr] gap-y-3 items-center">
                <label class="text-sm text-gray-700">Nhà cung cấp</label>
                <div class="flex gap-2">
                  <div className="relative w-1/3">
                    <TbListSearch className=" w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2 z-5" />
                    {/* onClick={openFormSupplier} */}
                    <input
                      type="text"
                      // placeholder="000168119-1t1002"
                      // value={infoSelectedSupplier.supplier_id}
                      value={option.length ? option[0].supplier_id : ""}
                      readonly
                      class="w-full rounded border border-gray-300 px-2 py-1  focus:outline-none focus:border-blue-500 text-sm"
                    />
                    {/* value={option.length ? option[0].supplier_id : ""} */}
                  </div>
                  <input
                    type="text"
                    // placeholder="Anh Sang"
                    // value={infoSelectedSupplier.supplier_name}
                    value={option.length ? option[0].supplier_name : ""}
                    readonly
                    class="rounded border border-gray-300 px-2 py-1 w-2/3 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <label class="text-sm text-gray-700">Người đặt</label>
                <div class="flex gap-2">
                  <input
                    {...register("orderer_id")}
                    type="text"
                    class="rounded border border-gray-300 px-2 py-1 w-1/3 focus:outline-none focus:border-blue-500 text-sm"
                    // readonly
                  />
                  <input
                    {...register("orderer_name")}
                    type="text"
                    // placeholder="testdemo"
                    // readonly
                    class="rounded border border-gray-300 px-2 py-1 w-2/3 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <label class="text-sm text-gray-700">Kho đặt</label>
                <div class="flex gap-2">
                  <select
                    className="w-full border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-blue-500 "
                    {...register("order_warehouse")}
                    // value={option.request_warehouse}
                  >
                    <option className="text-center text-gray-500" value="">
                      -----Chọn Kho-----
                    </option>
                    <option className="text-left" value="Kho chờ gia công">
                      Kho chính
                    </option>
                    <option className="text-left" value="Kho nguyên liệu">
                      Kho nguyên liệu
                    </option>
                    <option className="text-left" value="Kho thành phần">
                      Kho thành phẩm
                    </option>
                    <option className="text-left" value="Kho chờ gia công">
                      Kho chờ gia công
                    </option>
                  </select>
                </div>

                <label class="text-sm text-gray-700">Kho nhận</label>
                <div class="flex gap-2">
                  <select
                    className="w-full border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-blue-500 "
                    {...register("receive_warehouse")}
                    // value={option.request_warehouse}
                  >
                    <option className="text-center text-gray-500" value="">
                      -----Chọn Kho-----
                    </option>
                    <option className="text-left" value="Kho chờ gia công">
                      Kho chính
                    </option>
                    <option className="text-left" value="Kho nguyên liệu">
                      Kho nguyên liệu
                    </option>
                    <option className="text-left" value="Kho thành phần">
                      Kho thành phẩm
                    </option>
                    <option className="text-left" value="Kho chờ gia công">
                      Kho chờ gia công
                    </option>
                  </select>
                </div>

                <label class="text-sm text-gray-700">Thanh toán</label>
                <div class="flex gap-2 w-full">
                  <select
                    className="w-1/2 border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-blue-500 "
                    {...register("payment_method")}
                  >
                    <option className="text-center text-gray-500" value="">
                      -----Phương thức thanh toán-----
                    </option>
                    <option className="text-left" value="PARTIAL">
                      Đặt cọc (20%)
                    </option>
                    <option className="text-left" value="FULL">
                      Tất toán
                    </option>
                  </select>
                  <select
                    className="w-1/2 border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-blue-500 "
                    {...register("pay_way")}
                  >
                    <option className="text-center text-gray-500" value="">
                      -----Hình thức thanh toán-----
                    </option>
                    <option className="text-left" value="cash">
                      Tiền mặt
                    </option>
                    <option className="text-left" value="bank">
                      Chuyển khoản
                    </option>
                  </select>
                </div>

                <label class="text-sm text-gray-700"></label>
                <div class="flex gap-2">
                  <input
                    {...register("order_amount")}
                    placeholder="Tiền thanh toán trả trước"
                    type="text"
                    // value={formatCurrencyNoUnit(100000000) + " VNĐ"}
                    class="rounded text-right border border-gray-300 px-2 py-1 w-3/3 focus:outline-none focus:border-blue-500 text-sm"
                    readonly
                  />
                </div>

                <label class="text-sm text-gray-700">Ghi chú</label>
                <input
                  {...register("note")}
                  type="text"
                  // value={order.reason}
                  class="rounded border border-gray-300 px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm"
                  // readonly
                />

                <label class="text-sm text-gray-700">Tham chiếu</label>
                <input
                  type="text"
                  class="rounded border border-gray-300 px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm"
                />

                <label class="font-medium text-blue-700 cursor-pointer hover:underline">
                  Tài liệu đính kèm
                </label>
                <div class="flex">
                  <button
                    class="border border-gray-300 px-2 py-0.5 text-gray-500 bg-gray-50 text-xs"
                    type="button"
                  >
                    Tải tệp ...
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Right Column: Voucher Info --> */}
            <div class="lg:col-span-4">
              <h3 class="text-gray-500 font-bold uppercase text-sm mb-4">
                Chứng từ
              </h3>

              <div class="grid grid-cols-[100px_1fr] gap-y-3 items-center">
                <label class="text-sm text-gray-700">Số phiếu</label>
                <input
                  {...register("po_code")}
                  type="text"
                  value={po_code}
                  readonly
                  class="rounded border border-gray-300  px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm"
                />

                <label class="text-sm text-gray-700">Ngày nhận hàng</label>
                <input
                  {...register("order_date")}
                  type="text"
                  // placeholder="27/01/2026"
                  value={date}
                  readonly
                  class="rounded border border-gray-300 px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm"
                />

                <label class="text-sm text-gray-700">Thời gian nhận</label>
                <input
                  {...register("order_time")}
                  type="text"
                  // placeholder="11:42:20"
                  value={time}
                  readonly
                  class="rounded border border-gray-300 px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* <!-- Collapsible Separator --> */}
          <div class="relative flex items-center justify-center my-6">
            <div class="absolute w-full border-t border-gray-300"></div>
            <span class="relative bg-white px-4 text-blue-800 font-bold text-xs cursor-pointer hover:text-blue-600">
              Thu gọn <span class="text-[10px]">^</span>
            </span>
          </div>

          {/* <!-- Details Section --> */}
          <div class="flex flex-col">
            <div class="flex flex-wrap justify-between items-end mb-2 gap-2">
              <h3 class="text-gray-500 font-bold uppercase text-sm">
                CHI TIẾT
              </h3>
              <div class="flex items-center gap-4 text-sm text-gray-700">
                <label class="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked
                    class="rounded text-blue-600 focus:ring-blue-500"
                  />
                  Gợi ý thuế suất theo DM hàng hóa
                </label>
                <label class="flex items-center gap-1">
                  <input
                    type="checkbox"
                    class="rounded text-blue-600 focus:ring-blue-500"
                  />
                  Quét mã vạch
                </label>
                <button
                  type="button"
                  class="flex items-center gap-1 text-gray-500 hover:text-blue-600"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  Nhập khẩu
                </button>
                <button
                  type="button"
                  class="flex items-center gap-1 text-gray-500 hover:text-blue-600"
                >
                  <svg
                    class="w-4 h-4"
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
                  Phân bổ chiết khấu
                </button>
              </div>
            </div>

            {/* <!-- Table --> */}

            {/* <!-- Main Content / Table --> */}

            <DetailBookedGood priId={priId} />
            {/* {option.length ? <DetailImportedGood order={option[0]} /> : <></>} */}
          </div>
        </form>

        {/* <!-- Footer --> */}
        {/* <div class="rounded-bl rounded-br flex flex-col md:flex-row justify-between items-center px-6 border-t border-gray-200 bg-white py-4">
          <button class="flex items-center text-blue-900 font-bold text-sm hover:underline mb-3 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
            Trợ giúp
          </button>

          <div class="flex space-x-3">
            <button
              class="flex items-center bg-[#313a66] text-white px-4 py-2 rounded shadow hover:bg-blue-900 text-sm font-medium"
              type="submit"
              form="myForm"
              // disabled={loading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
              </svg>
              Lưu
            </button>
            <button
              class="flex items-center text-[#313a66] px-4 py-2 rounded hover:bg-gray-300 text-sm font-medium"
              type="reset"
              // disabled={loading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Hủy bỏ
            </button>
          </div>
        </div> */}

        <div className="rounded-bl rounded-br flex flex-col md:flex-row justify-between items-end px-6 border-t border-gray-200 bg-white py-4 gap-4">
          {/* BÊN TRÁI: Trợ giúp */}
          <button className="flex items-center text-blue-900 font-bold text-sm hover:underline mb-3 md:mb-0 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            Trợ giúp
          </button>

          {/* GIỮA: CỤM THÔNG TIN TỔNG HỢP (Eye-catching Section) */}
          <div className="flex-1 flex flex-col md:flex-row justify-end items-end md:items-center gap-4 md:gap-8 border-r-0 md:border-r border-dashed border-gray-300 pr-0 md:pr-8">
            {/* Tổng số lượng */}
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Tổng số lượng
              </span>
              <div className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold text-sm border border-blue-200">
                {totalquantity}{" "}
                <span className="text-[10px] font-medium">SP</span>
              </div>
            </div>

            {/* Tổng tiền & Thuế */}
            <div className="flex flex-col items-end border-l border-dashed border-gray-300 pl-4">
              <div className="flex gap-2 items-center">
                <span className="text-[10px] uppercase font-bold text-gray-400">
                  Tổng tiền:
                </span>
                <span className="text-sm font-bold text-gray-700">
                  {formatCurrencyNoUnit(total)}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[10px] uppercase font-bold text-gray-400">
                  Tiền thuế:
                </span>
                <span className="text-sm font-bold text-gray-600">
                  {formatCurrencyNoUnit(totalTax)}
                </span>
              </div>
            </div>

            {/* TIỀN CẦN THANH TOÁN (Điểm nhấn chính) */}
            <div className="flex flex-col items-end bg-red-50 px-4 py-1 rounded-sm border-l-4 border-red-500">
              <span className="text-[11px] uppercase font-black text-red-500 tracking-tighter">
                Tiền cần thanh toán
              </span>
              <span className="text-2xl font-black text-red-600 leading-none">
                {formatCurrencyNoUnit(neededPayment)}{" "}
                <span className="text-xs font-bold">đ</span>
              </span>
            </div>
          </div>

          {/* BÊN PHẢI: Các nút hành động */}
          <div className="flex space-x-3 shrink-0">
            <button
              className="flex items-center bg-[#313a66] text-white px-6 py-2.5 rounded shadow-lg hover:bg-blue-900 text-sm font-bold uppercase transition-all active:scale-95"
              type="submit"
              form="myForm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
              </svg>
              Lưu đơn hàng
            </button>
            <button
              className="flex items-center text-gray-500 px-4 py-2.5 rounded hover:bg-gray-100 text-sm font-bold border border-gray-200 transition-all uppercase"
              type="reset"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
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
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormInfoBookedOrder;
