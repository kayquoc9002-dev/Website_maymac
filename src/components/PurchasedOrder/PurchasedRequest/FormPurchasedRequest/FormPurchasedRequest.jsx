import React from "react";
import { LuTextSearch } from "react-icons/lu";
import { FaSearchPlus } from "react-icons/fa";
import { TbListSearch } from "react-icons/tb";
import { useState, useRef } from "react";
// import TableGood from "./TableGood/TableGood";
import DetailPurchasedRequest from "./DetailPurchasedRequest/DetailPurchasedRequest";
import { useForm } from "react-hook-form";
import { handleRequest } from "../../../../Helpers/functionsSupabase";
// import postData from "../../../../Helpers/postData";
// import { purchaseOrder } from "../../../../Helpers/urlAPI";

function FormPurchasedRequest({ openForm, dataOrder, edittedData, setData }) {
  const now = new Date();
  const detailBookedGoods = useRef([]);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  // console.log(detailBookedGoods.current);

  // hiển thị ngày giờ theo locale
  //console.log(now.toLocaleDateString()); 
  //console.log(now.toLocaleTimeString());


  const onSubmit = (data) => {
    data = {
      ...data,
      requested_goods: detailBookedGoods.current,
    };
    // console.log(data);
    // console.log(detailBookedGoods.current);
    // postData(data, setLoading, purchaseOrder);
    console.log(data);
    handleRequest(data);
    reset();

    // setData([...dataOrder, data]);
    // openForm();
  };
  return (
    <>
      {/* <!-- Main Window Container --> */}
      <div class="rounded w-full max-w-[1200px] max-h-[80vh] bg-white shadow-xl border border-gray-400 flex flex-col z-10">
        {/* <!-- Window Header --> */}
        <div class="rounded-t flex justify-between items-center px-5 py-3 bg-gray-100 border-b border-gray-200">
          <h1 class="font-bold text-gray-800 text-lg">Phiếu báo hàng</h1>
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
          

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* <!-- Left Column: General Info --> */}
            <div class="lg:col-span-8">
              <h3 class="text-gray-600 font-bold uppercase text-sm mb-4">
                Thông tin chung
              </h3>
              <div class="grid grid-cols-[100px_1fr] gap-y-3 items-center">
                

                <label class="text-sm text-gray-700">Người báo</label>
                <div class="flex gap-2">
                  <input
                    {...register("requester_id")}
                    type="text"
                    class="rounded border border-gray-300 px-2 py-1 w-1/3 focus:outline-none focus:border-blue-500 text-sm"
                    // readonly
                  />
                  <input
                    {...register("requester_name")}
                    type="text"
                    placeholder="testdemo"
                    // readonly
                    class="rounded border border-gray-300 px-2 py-1 w-2/3 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <label class="text-sm text-gray-700">Kho báo</label>
                <div class="flex gap-2">
                  <select
                      className="w-full border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-blue-500 "
                      {...register("warehouse")}
                    >
                      <option className="text-center text-gray-500" value="">
                        -----Chọn Kho-----
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

                <label class="text-sm text-gray-700">Ghi chú</label>
                <input
                  {...register("note")}
                  type="text"
                  placeholder="Đặt hàng nhà cung cấp"
                  class="rounded border border-gray-300 px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm"
                  readonly
                />
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
                  {...register("pr_code")}
                  type="text"
                  value="ABCD-PDH000025"
                  readonly
                  class="rounded border border-gray-300  px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm"
                />

                <label class="text-sm text-gray-700">Ngày báo hàng</label>
                <input
                  {...register("recorded_date")}
                  type="text"
                  // placeholder="27/01/2026"
                  value={now.toLocaleDateString()}
                  readonly
                  class="rounded border border-gray-300 px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm"
                />

                <label class="text-sm text-gray-700">Thời gian báo</label>
                <input
                  {...register("recorded_time")}
                  type="text"
                  // placeholder="11:42:20"
                  value={now.toLocaleTimeString()}
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
            <DetailPurchasedRequest detailBookedGoods={detailBookedGoods} />
          </div>
        </form>

        {/* <!-- Footer --> */}
        <div class="rounded-bl rounded-br flex flex-col md:flex-row justify-between items-center px-6 border-t border-gray-200 bg-white py-4">
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
        </div>
      </div>

      {/* </div>
      </div> */}
    </>
  );
}

export default FormPurchasedRequest;
