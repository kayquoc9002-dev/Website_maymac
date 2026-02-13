import React from "react";
import { useForm } from "react-hook-form";
import DetailBookedGood from "../../../PurchasedOrder/BookedOrder/DetailBookedGood/DetailBookedGood";
import { TbListSearch } from "react-icons/tb";
import { transactionRecord, stock } from "../../../../Helpers/urlAPI";
import postData from "../../../../Helpers/postData";
import { useState, useRef } from "react";
import TableObject from "./DetailExportedGood/TableObject/TableObject";
import DetailExportedGood from "./DetailExportedGood/DetailExportedGood";
import patchQuatity from "../../../../Helpers/patchImportedQuatity";
function FormExport({ openForm, exportedRecords, setData }) {
  const [selectedObject, setSelectedObject] = useState(false);
  const [infoSelectedObject, setSelectedInfoObject] = useState({});
  const detailExportedGoods = useRef([]);
  const [selectedGood, setSelectedGood] = useState([]);
const [loading, setLoading] = useState(false)
  console.log(infoSelectedObject);

  // console.log(detailExportedGoods.current);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const now = new Date();

  const onSubmit = (data) => {
    data = { ...data, goods: detailExportedGoods.current.map(item => {return ({...item, warehouse: data.warehouse})}), status: "Xuất" };
    postData(data, setLoading, transactionRecord);
    patchQuatity(data.goods, data.status, stock);
    setData([...exportedRecords, data]);
    // console.log(data);
    setSelectedGood([]);
    setSelectedInfoObject({});
    reset();
  };

  const openTableObject = () => {
    setSelectedObject(!selectedObject);
  };
  return (
    <>
      {selectedObject && (
        <div className="fixed inset-0 z-20 flex justify-center items-center">
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300   ${
              selectedObject
                ? "opacity-60 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            // {/* Overlay */}
          </div>
          <TableObject
            openTableObject={openTableObject}
            setSelectedInfoObject={setSelectedInfoObject}
          />
        </div>
      )}
      <div class="rounded w-full max-w-[1200px] bg-white shadow-xl border border-gray-400 flex flex-col z-10 max-h-[90vh]">
        {/* <!-- Window Header --> */}
        <div class="rounded-t flex justify-between items-center px-5 py-3 bg-gray-100 border-b border-gray-200 sticky top-0 mb-2">
          <span class="font-bold text-gray-800 text-lg">Phiếu xuất kho</span>
          <div class="flex space-x-2">
            <button class="text-gray-500 hover:text-gray-700">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
            <button
              class="text-gray-500 hover:text-gray-700"
              onClick={openForm}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Toolbar --> */}

        {/* <!-- Main Content --> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          class="flex-1 flex flex-col overflow-hidden"
        >
          <div class="flex-1 flex flex-col bg-white px-2 pb-2 overflow-y-auto">
            {/* <!-- Form Grid --> */}
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-4">
              {/* <!-- Left Column: General Info --> */}
              <div class="lg:col-span-8">
                <h3 class="text-gray-600 font-bold uppercase text-sm mb-4">
                  Thông tin chung
                </h3>

                <div class="grid grid-cols-12 gap-y-2 items-center">
                  {/* <!-- Row 4 --> */}
                  <label class="col-span-3 text-sm text-gray-700">
                    NV xuất hàng
                  </label>
                  <div class="col-span-9 flex space-x-1">
                    <div class="relative flex-none w-1/3">
                      <input
                        type="text"
                        // readOnly
                        {...register("employee_id")}
                        class="w-full border border-gray-300 rounded-sm px-2 py-1 pr-12 focus:outline-none focus:border-blue-500"
                      />
                      <TbListSearch className=" w-5 h-5 absolute top-1/2 -translate-y-1/2 right-7 z-5 hover:text-blue-500" />
                      <div class="absolute right-0 top-0 h-full flex items-center">
                        <button
                          type="button"
                          class="px-1 text-[#2e3192] hover:text-blue-800 bg-blue-100 h-full border-l border-gray-300"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <input
                      type="text"
                      // readOnly
                      {...register("employee_name")}
                      class="flex-1 bg-gray-200 border border-gray-300 rounded-sm px-2 py-1"
                    />
                  </div>

                  {/* <!-- Row 1 --> */}
                  <label class="col-span-3 text-sm text-gray-700">
                    Mục đích xuất kho
                  </label>
                  <div class="col-span-9 flex space-x-1">
                    <div class="relative flex-none w-1/3">
                      <input
                        type="text"
                        // readOnly
                        {...register("employee_id")}
                        class="w-full border border-gray-300 rounded-sm px-2 py-1 pr-12 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <input
                      type="text"
                      // readOnly
                      {...register("employee_name")}
                      class="flex-1 bg-gray-200 border border-gray-300 rounded-sm px-2 py-1"
                    />
                    {/* <input
                      {...register("reason")}
                      type="text"
                      class="w-full border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-blue-500"
                    /> */}
                  </div>

                  <label class="col-span-3 text-sm text-gray-700">
                    Đối tượng
                  </label>
                  <div class="col-span-9 flex space-x-1">
                    <div class={"relative flex-none w-1/3 relative"}>
                      <input
                        readOnly
                        type="text"
                        // value = {order.supplier ? order.supplier.id : ""}
                        value={
                          infoSelectedObject.object_id
                            ? infoSelectedObject.object_id
                            : ""
                        }
                        {...register("object_id", { required: true })}
                        class={
                          "w-full border border-gray-300 rounded-sm px-2 py-1 pr-12 focus:outline-none focus:border-blue-500 " +
                          (errors.supplier_id ? " border-red-500" : "")
                        }
                      />
                      <TbListSearch
                        className=" w-5 h-5 absolute top-1/2 -translate-y-1/2 right-7 z-5 hover:text-blue-500"
                        onClick={openTableObject}
                      />
                      <div class="absolute right-0 top-0 h-full flex items-center">
                        <button
                          type="button"
                          class="px-1 text-[#2e3192] hover:text-blue-800 bg-blue-100 h-full border-l border-gray-300"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <input
                      type="text"
                      readOnly
                      value={
                        infoSelectedObject.object_name
                          ? infoSelectedObject.object_name
                          : ""
                      }
                      {...register("object_name", { required: true })}
                      //   value={order.supplier ? order.supplier.name : ""}
                      class={
                        "flex-1 border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-blue-500 bg-gray-200 " +
                        (errors.supplier_name ? " border-red-500" : "")
                      }
                    />
                    {/* <Controller
                        name="supplier_name"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            class="w-full border border-gray-300 rounded-sm px-2 py-1 pr-12 focus:outline-none focus:border-blue-500"
                            value={order.supplier ? order.supplier.name : ""}
                          />
                        )}
                      /> */}
                  </div>

                  <label class="col-span-3 text-sm text-gray-700">
                    Loại đối tượng
                  </label>
                  <div class="col-span-9 w-1/3">
                    <input
                      readOnly
                      value={
                          infoSelectedObject.object_
                            ? infoSelectedObject.object_id
                            : ""
                        }
                      {...register("object_type")}
                      type="text"
                      class="w-full border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* <!-- Row 3 --> */}
                  <label class="col-span-3 text-sm text-gray-700">
                    Ghi chú
                  </label>
                  <div class="col-span-9">
                    <input
                      {...register("note")}
                      type="text"
                      class="w-full border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div class="col-span-12">
                    {/* <!-- Empty space as per image --> */}
                  </div>

                  {/* <!-- Row 6 --> */}
                  <label class="col-span-3 text-[#2e3192] cursor-pointer hover:underline text-sm">
                    Tài liệu đính kèm
                  </label>
                  <div class="col-span-9">
                    <button
                      type="button"
                      class="border border-gray-400 px-2 py-0.5 rounded-sm text-xs bg-white hover:bg-gray-200"
                    >
                      Tải tệp ...
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Right Column: Voucher Info --> */}
              <div class="lg:col-span-4">
                <h3 class="font-bold text-gray-500 uppercase text-sm mb-4">
                  Chứng từ
                </h3>
                <div class="grid grid-cols-12 gap-y-2 items-center">
                  <label class="col-span-4 text-sm text-gray-700">
                    Số phiếu nhập
                  </label>
                  <div class="col-span-8">
                    <input
                      type="text"
                      {...register("record_id")}
                      value="ABCD-NK000273"
                      readOnly
                      class="w-full border border-gray-300 rounded-sm px-2 py-1 text-right focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <label class="col-span-4 text-sm text-gray-700">
                    Ngày nhập
                  </label>
                  <div class="col-span-8 relative">
                    <svg
                      class="absolute left-2 top-1.5 text-gray-500 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <input
                      {...register("record_date")}
                      type="text"
                      value={now.toLocaleDateString()}
                      readOnly
                      class="w-full border border-gray-300 rounded-sm px-2 py-1 text-right focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <label class="col-span-4 text-sm text-gray-700">
                    Giờ nhập
                  </label>
                  <div class="col-span-8 relative">
                    <svg
                      class="absolute left-2 top-1.5 text-gray-500 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <input
                      {...register("record_time")}
                      type="text"
                      value={now.toLocaleTimeString()}
                      readOnly
                      class="w-full border border-gray-300 rounded-sm px-2 py-1 text-right focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Collapse Toggle --> */}
            <div class="flex justify-center mb-2">
              <button
                type="button"
                class="text-[#2e3192] text-xs font-bold hover:underline flex items-center"
              >
                Xem thêm
                <svg
                  class="ml-1 w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* <!-- Details Section --> */}
            <div class="border-t border-gray-300 pt-2">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold text-gray-600 uppercase text-sm mb-4">
                  Chi tiết
                </h3>
                <div class="flex space-x-4 text-sm">
                  <label class="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      checked
                      class="rounded-sm text-[#2e3192] focus:ring-[#2e3192]"
                    />
                    <span>Gợi ý thuế suất theo DM hàng hóa</span>
                  </label>
                  <label class="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      class="rounded-sm text-[#2e3192] focus:ring-[#2e3192]"
                    />
                    <span>Quét mã vạch</span>
                  </label>
                  <button
                    type="button"
                    class="flex items-center text-[#2e3192] font-semibold hover:underline"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 21h18M5 21V7l8-4 8 4v14" />
                    </svg>
                    Chọn kho
                  </button>
                  <button
                    type="button"
                    class="flex items-center text-[#2e3192] font-semibold hover:underline"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Nhập khẩu
                  </button>
                  <button
                    type="button"
                    class="flex items-center text-gray-400 cursor-not-allowed"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 21v-7" />
                      <path d="M4 10V3" />
                      <path d="M12 21v-9" />
                      <path d="M12 8V3" />
                      <path d="M20 21v-5" />
                      <path d="M20 12V3" />
                      <path d="M1 14h6" />
                      <path d="M9 8h6" />
                      <path d="M17 16h6" />
                    </svg>
                    Phân bổ chiết khấu
                  </button>
                </div>
              </div>

              {/* <!-- Table --> */}

              <DetailExportedGood
                selectedGood={selectedGood}
                setSelectedGood={setSelectedGood}
                detailExportedGoods={detailExportedGoods}
              />

              {/* order={order} */}
            </div>
          </div>
          {/* </div> */}

          {/* <!-- Footer Totals --> */}
          <div class="bg-gray-200 border-t border-gray-300 p-2 flex flex-wrap items-center justify-between text-sm font-bold text-gray-700">
            <div class="flex space-x-6">
              <div class="flex items-center space-x-2">
                <span>Tổng số lượng</span>
                <span class="text-black">0,00</span>
              </div>
              <div class="flex items-center space-x-2">
                <span>Tổng thành tiền</span>
                <span class="text-black">0,00</span>
              </div>
            </div>

            <div class="flex space-x-6">
              <div class="flex items-center space-x-2">
                <span>Tiền CK</span>
                <span class="text-black">0,00</span>
              </div>
              <div class="flex items-center space-x-2">
                <span>Tiền thuế</span>
                <span class="text-black">0,00</span>
              </div>
              <div class="flex items-center space-x-2 bg-gray-300 px-2 py-1 rounded">
                <span>Tổng tiền thanh toán</span>
                <span class="text-black">0,00</span>
              </div>
            </div>
          </div>
          {/* <!-- Footer --> */}
          <div class="rounded-bl rounded-br flex flex-col md:flex-row justify-between items-center px-6 border-t border-gray-200 bg-white py-4">
            <button
              type="button"
              class="flex items-center text-blue-900 font-bold text-sm hover:underline mb-3 md:mb-0"
            >
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
                type="button"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="h-4 w-4 mr-2"
                >
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                In
              </button>
              <button
                class="flex items-center bg-[#313a66] text-white px-4 py-2 rounded shadow hover:bg-blue-900 text-sm font-medium"
                type="button"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="h-4 w-4 mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Xuất khẩu
              </button>

              <button
                class="flex items-center bg-[#313a66] text-white px-4 py-2 rounded shadow hover:bg-blue-900 text-sm font-medium"
                type="submit"
                disabled={loading}
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
                disabled={loading}
                // onClick={() => {
                //   setOrder({});
                // }}
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
        </form>
      </div>
    </>
  );
}

export default FormExport;
