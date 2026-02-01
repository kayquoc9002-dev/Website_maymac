import React from "react";
import { useState } from "react";
import SideBar from "../../Sidebar/Sidebar";
import { TbListSearch } from "react-icons/tb";
import { useForm, Controller } from "react-hook-form";
import FormPrice from "./FormPrice/FormPrice";
import FormNumber from "./FormNumber/FormNumber";
import TableSelectedSupplier from "./TableSelectedSupplier/TableSelectedSupplier";
import TableSupplier from "../../../PurchasedOrder/BookedOrder/FormInfoBookedOrder/TableSupplier/TableSupplier";
import { useNavigate } from "react-router-dom";
import postData from "../../../../Helpers/postData";
import GoodCatalog from "../../../PurchasedOrder/BookedOrder/DetailBookedGood/TableGoodCatalog/TableGoodCatalog";
function FormInfoGood() {
  const [selectedSupplier, setselectedSupplier] = useState(false);
  const [loading, setLoading] = useState(false);
  const [infoSelectedSupplier, setSelectedInfoSupplier] = useState({});

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    data.good_tax = parseInt(data.good_tax, 10);
    const sendData = async (data) => {
      await postData(data, setLoading, 'http://localhost:3000/catalogGoods');
      navigate('/catalog/good');
    } 
    sendData(data);
  };
  const openFormSupplier = () => {
    setselectedSupplier(!selectedSupplier);
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
          <GoodCatalog
            openFormSupplier={openFormSupplier}
            setSelectedInfoSupplier={setSelectedInfoSupplier}
          />
          {/* edittedData={edittedData} setData={setData} */}
        </div>
      )}

      <div class=" bg-gray-50 min-h-screen">
        <div class="flex w-screen">
          {/* <!-- Sidebar --> */}
          <SideBar />

          <div class=" flex-1 w-[100px] flex flex-col h-screen bg-gray-50 font-sans text-sm">
            {/* <!-- Top Header --> */}
            <header class="flex items-center justify-between  bg-white px-4 py-2 border-b border-gray-200 h-14 shrink-0">
              <h1 class="text-xl font-bold text-gray-800">Hàng hóa</h1>
              <div class="flex items-center gap-4">
                {/* <!-- Company Dropdown --> */}
                <div class="hidden md:flex items-center border border-gray-300 rounded px-2 py-1 bg-gray-50">
                  <span class="text-gray-600 mr-2">CÔNG TY TNHH TM DV PHÚ</span>
                  <svg
                    class="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>

                {/* <!-- User Profile --> */}
                <div class="flex items-center gap-2 cursor-pointer">
                  <div class="relative">
                    <img
                      src="https://picsum.photos/id/64/200/200"
                      alt="Avatar"
                      class="w-8 h-8 rounded-full object-cover border border-gray-300"
                    />
                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1 rounded-full">
                      2
                    </span>
                  </div>
                  <span class="font-medium text-gray-700 hidden sm:block">
                    testdemo
                  </span>
                  <svg
                    class="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>

                {/* <!-- Action Icons --> */}
                <div class="flex items-center gap-3 text-gray-500">
                  <button type="button" class="hover:text-yellow-500">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" class="hover:text-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" class="hover:text-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" class="hover:text-blue-500">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </header>

            <div class="flex-1 flex flex-col overflow-hidden bg-gray-300">
              <main class="flex-1 overflow-hidden bg-gray-100 p-2 ">
                <form
                  class="ư-full pb-0 bg-white shadow-sm h-full flex flex-col relative"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* <!-- Top Tabs --> */}
                  <div class="flex border-b border-gray-200 bg-gray-100 sticky w-full top-0">
                    <button
                      type="button"
                      class="px-4 py-2 bg-white border-t-2 border-blue-600 text-blue-700 font-semibold text-sm"
                    >
                      Thông tin cơ bản
                    </button>
                    <button
                      type="button"
                      class="px-4 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                    >
                      Thông tin bổ sung
                    </button>
                    <button
                      type="button"
                      class="px-4 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                    >
                      Thông tin kho
                    </button>
                    <button
                      type="button"
                      class="px-4 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                    >
                      Hoa hồng
                    </button>
                  </div>

                  {/* <!-- Main Content --> */}
                  <div class="flex-1 flex flex-col overflow-y-auto pb-12">
                    <h3 class="px-2 font-bold text-gray-700 my-2 uppercase text-sm">
                      Thông tin
                    </h3>

                    <div className="flex-1 p-4 pt-0 ">
                      <div class="flex flex-col lg:flex-row gap-8">
                        {/* <!-- Left Column --> */}
                        <div class="flex-1 space-y-3">
                          {/* <!-- Row: Name --> */}
                          <div class="flex items-center">
                            <label class="w-32 text-gray-700 text-sm">
                              Tên hàng hóa <span class="text-red-500">*</span>
                            </label>
                            <div class="flex-1 relative">
                              <input
                                {...register("good_name", {
                                  required: "Bắt buộc",
                                })}
                                type="text"
                                class={
                                  "w-full border rounded px-2 py-1.5 focus:outline-none focus:border-blue-500" +
                                  (errors.good_name
                                    ? " border-red-500 focus:border-red-500"
                                    : " border-gray-300")
                                }
                              />
                              {errors.good_name && (
                                <div class="absolute right-2 top-1.5 text-red-500">
                                  <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* <!-- Row: Group --> */}
                          <div class="flex items-center">
                            <label class="w-32 text-gray-700 text-sm">
                              Nhóm hàng hóa
                            </label>
                            <div class="flex-1 flex">
                              <select
                                {...register("good_group")}
                                className="flex-1 border border-gray-300 rounded-l px-2 py-1.5 flex justify-between items-center bg-white"
                              >
                                <option value="">----Nhóm hàng hóa----</option>
                                <option value="Vải lụa">Vải lụa</option>
                                <option value="Quần áo">Quần áo</option>
                              </select>
                              <button
                                type="button"
                                class="border border-l-0 border-gray-300 rounded-r px-2 bg-gray-50 hover:bg-gray-100 text-blue-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 4v16m8-8H4"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* <!-- Row: Brand --> */}
                          <div class="flex items-center">
                            <label class="w-32 text-gray-700 text-sm">
                              Thương hiệu
                            </label>

                            <div class="flex-1 flex">
                              <select
                                {...register("good_brand")}
                                class="flex-1 border border-gray-300 rounded px-2 py-1.5 flex justify-between items-center bg-white"
                              >
                                <option value="">
                                  ----Chọn thương hiệu----
                                </option>
                                <option value="Thương hiệu A">
                                  Thương hiệu A
                                </option>
                                <option value="Thương hiệu B">
                                  Thương hiệu B
                                </option>
                              </select>
                              <button
                                type="button"
                                class="border border-l-0 border-gray-300 px-2 bg-white hover:bg-gray-50 text-gray-600"
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                class="border border-l-0 border-gray-300 rounded-r px-2 bg-gray-50 hover:bg-gray-100 text-blue-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 4v16m8-8H4"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* <!-- Row: SKU --> */}
                          <div class="flex items-center">
                            <label class="w-32 text-gray-700 text-sm">
                              Mã SKU
                            </label>
                            <input
                              {...register("good_sku")}
                              type="text"
                              placeholder="Hệ thống tự sinh khi bỏ trống"
                              class="flex-1 border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                            />
                          </div>

                          {/* <!-- Row: Barcode --> */}
                          <div class="flex items-center">
                            <label class="w-32 text-gray-700 text-sm">
                              Mã vạch
                            </label>
                            <input
                              {...register("good_barcode")}
                              type="text"
                              placeholder="Hệ thống tự sinh khi bỏ trống"
                              class="flex-1 border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                            />
                          </div>
                          {/* <!-- Row: Unit --> */}
                          <div class="flex items-center mt-3">
                            <label class="w-32 text-gray-700 text-sm">
                              Đơn vị tính cơ bản
                            </label>
                            <div class="flex-1 flex ">
                              <select
                                {...register("good_unit")}
                                class="flex-1 border border-gray-300 rounded-l px-2 py-1.5 flex justify-between items-center bg-white"
                              >
                                <option value="">
                                  ----Chọn đơn vị tính----
                                </option>
                                <option value="Chiếc">Chiếc</option>
                                <option value="Cái">Cái</option>
                              </select>

                              <button
                                type="button"
                                class="border border-l-0 border-gray-300 rounded-r px-2 bg-gray-50 hover:bg-gray-100 text-blue-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 4v16m8-8H4"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div class="ml-32 text-xs text-gray-400 italic">
                            (Nên để đơn vị tính nhỏ nhất. VD: Vải bán theo Cuộn
                            và Mét thì để ĐVT là Mét.)
                          </div>
                          {/* <!-- Row: Buy Price --> */}
                          <div class="flex items-center">
                            <label class="w-32 text-gray-700 flex items-center gap-1 text-sm">
                              Giá mua
                              <svg
                                class="w-4 h-4 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </label>
                            {/* <input
                              {...register("good_buy_price")}
                              type="text"
                              placeholder="0,00"
                              value = {value ? formatCurrency(value) : ''}
                              class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-right focus:outline-none focus:border-blue-500"
                            /> */}
                            <Controller
                              name="good_price"
                              control={control}
                              defaultValue={0}
                              render={({ field }) => <FormPrice {...field} />}
                            />
                          </div>

                          {/* <!-- Row: Name --> */}
                          {/* <div class="flex items-center">
                            <label class="w-32 text-gray-700 text-sm">
                              Nhà cung cấp <span class="text-red-500">*</span>
                            </label>
                            <div class="flex-1 relative">
                              <input
                                {...register("good_supplier", {
                                  required: "Bắt buộc",
                                })}
                                type="text"
                                class={
                                  "w-full border rounded px-2 py-1.5 focus:outline-none focus:border-blue-500" +
                                  (errors.good_supplier
                                    ? " border-red-500 focus:border-red-500"
                                    : " border-gray-300")
                                }
                              />
                              {errors.good_name && (
                                <div class="absolute right-2 top-1.5 text-red-500">
                                  <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div> */}
                          
                          <label class="text-sm text-gray-700 mb-1">
                            Nhà cung cấp <span class="text-red-500">*</span>
                          </label>
                          <div class="flex gap-2">
                            <div
                              className="relative w-1/3"
                              onClick={openFormSupplier}
                            >
                              <TbListSearch className=" w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2 z-35" />
                              <input
                                type="text"
                                // placeholder="000168119-1t1002"
                                value={infoSelectedSupplier.supplier_id}
                                readonly
                                {...register("good_supplierId", {
                                  required: "Bắt buộc",
                                })}
                                class={
                                  "w-full rounded border border-gray-300 px-2 py-1  focus:outline-none focus:border-blue-500 text-sm" +
                                  (errors.good_supplierId
                                    ? " border-red-500 focus:border-red-500"
                                    : " border-gray-300")
                                }
                              />
                            </div>
                            <input
                              type="text"
                              // placeholder="Anh Sang"
                              value={infoSelectedSupplier.supplier_name}
                              readonly
                              {...register("good_supplierName", {
                                required: "Bắt buộc",
                              })}
                              class={
                                "rounded border border-gray-300 px-2 py-1 w-2/3 focus:outline-none focus:border-blue-500 text-sm" +
                                (errors.good_supplierName
                                  ? " border-red-500 focus:border-red-500"
                                  : " border-gray-300")
                              }
                            />
                          </div>

                          {/* <!-- Row: VAT --> */}
                          <div class="flex items-center">
                            <label class="w-32 text-gray-700 text-sm">
                              Thuế suất GTGT (%)
                            </label>
                            <select
                              {...register("good_tax")}
                              class="flex-1 border border-gray-300 rounded px-2 py-1.5 flex justify-between items-center bg-white"
                            >
                              <option value="0">----Chọn thuế suất----</option>
                              <option value="0">KCT</option>
                              <option value="5">5%</option>
                              <option value="10">10%</option>
                            </select>
                          </div>

                          {/* <!-- Pricing Table --> */}
                          <div class="mt-2">
                            <table class="w-full border-collapse border border-gray-200 text-sm">
                              <thead>
                                <tr class="bg-gray-100">
                                  <th class="border border-gray-200 p-2 w-1/3"></th>
                                  <th class="border border-gray-200 p-2 font-semibold text-gray-700">
                                    Trước thuế
                                  </th>
                                  <th class="border border-gray-200 p-2 font-semibold text-gray-700">
                                    Sau thuế
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-blue-50">
                                  <td class="border border-gray-200 p-2 text-gray-700">
                                    Giá lẻ
                                  </td>
                                  <td class="border border-gray-200 p-2 text-right">
                                    0,00
                                  </td>
                                  <td class="border border-gray-200 p-2 text-right flex justify-between items-center">
                                    <span class="flex-1">0,00</span>
                                    <svg
                                      class="w-4 h-4 text-blue-600 cursor-pointer"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                      ></path>
                                    </svg>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="border border-gray-200 p-2 text-gray-700">
                                    Giá thùng
                                  </td>
                                  <td class="border border-gray-200 p-2 text-right">
                                    0,00
                                  </td>
                                  <td class="border border-gray-200 p-2 text-right">
                                    0,00
                                  </td>
                                </tr>
                                <tr>
                                  <td class="border border-gray-200 p-2 text-gray-700">
                                    Giá sỉ
                                  </td>
                                  <td class="border border-gray-200 p-2 text-right">
                                    0,00
                                  </td>
                                  <td class="border border-gray-200 p-2 text-right">
                                    0,00
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* <!-- Right Column --> */}
                        <div class="w-full lg:w-1/3 space-y-4">
                          <div class="flex items-center">
                            <label class="w-32 text-gray-700 text-sm">
                              Tồn kho ban đầu
                            </label>
                            <Controller
                              name="good_initialStock"
                              control={control}
                              defaultValue={0}
                              render={({ field }) => <FormNumber {...field} />}
                            />
                            {/* <input
                              {...register("good_initialStock")}
                              type= "number"
                              defaultValue= "0"
                              class="flex-1 border border-gray-300 rounded px-2 py-1.5 text-right focus:outline-none focus:border-blue-500"
                            /> */}
                          </div>
                          <div class="text-xs text-gray-400 italic text-right">
                            (Tồn kho ban đầu chỉ được nhập khi thêm mới hàng
                            hóa.)
                          </div>

                          <div class="flex">
                            <label class="w-32 text-gray-700 text-sm">
                              Quản lý hàng hóa theo
                            </label>
                            <div class="flex-1 space-x-4">
                              <label class="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  class="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                                <span class="ml-2 text-gray-700">
                                  Lô/Hạn sử dụng
                                </span>
                              </label>
                              <label class="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  class="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                                <span class="ml-2 text-gray-700">
                                  Serial/IMEI
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Bottom Tabs & Table --> */}
                      <TableSelectedSupplier />

                      <div class="text-gray-400 italic mb-4 text-sm mt-2">
                        (Nếu không chọn Đơn vị bán/nhập mặc định thì chương
                        trình sẽ lấy Đơn vị tính cơ bản làm Đơn vị bán/nhập mặc
                        định.)
                      </div>

                      {/* <!-- Image Upload Section --> */}
                      <div class="mb-6">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                          Ảnh hàng hóa
                        </label>
                        <div class="flex items-start">
                          <div class="text-sm italic text-gray-400 w-48 mr-4">
                            Định dạng(.jpg, .jpeg, .png, .gif) và dung lượng{" "}
                            {"<"} 2MB{" "}
                          </div>{" "}
                          <div class="w-32 h-32 border-2 border-dashed border-blue-300 bg-blue-50 rounded flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-100 transition-colors relative">
                            <div class="absolute top-0 right-0 bg-white border border-blue-200 text-[10px] px-1 text-gray-500 flex items-center">
                              <svg
                                class="w-3 h-3 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                ></path>
                              </svg>
                              Biểu tượng
                            </div>
                            <svg
                              class="w-8 h-8 text-gray-400 mb-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <span class="text-xs font-medium text-gray-600">
                              Thêm hình ảnh
                            </span>
                            <span class="text-xs text-gray-500">(1/10)</span>
                            <div class="mt-2 bg-[#2c3e50] text-white px-2 py-0.5 rounded text-xs">
                              ...
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Checkbox --> */}
                      <div class="flex items-center mb-6">
                        <input
                          type="checkbox"
                          id="show-pos"
                          class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          checked
                        />
                        <label
                          for="show-pos"
                          class="ml-2 text-sm text-gray-700"
                        >
                          Hiển thị trên màn hình bán hàng
                        </label>
                        <svg
                          class="w-4 h-4 ml-1 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>

                      {/* <!-- Attributes Section --> */}
                      <div class="mb-4">
                        <h3 class="font-bold text-gray-700 uppercase mb-2">
                          THÔNG TIN THUỘC TÍNH
                        </h3>

                        <div class="border border-gray-300 rounded-sm">
                          {/* <!-- Row 1 --> */}
                          <div class="flex border-b border-gray-300">
                            <div class="w-40 bg-[#f0f0f0] p-2 flex items-center text-gray-700 border-r border-gray-300">
                              Màu sắc
                            </div>
                            <div class="flex-1 p-2 bg-white">
                              <input
                                type="text"
                                class="w-full outline-none text-gray-600"
                                placeholder="Xanh, Đỏ, Vàng..."
                              />
                            </div>
                          </div>
                          {/* <!-- Row 2 --> */}
                          <div class="flex">
                            <div class="w-40 bg-[#f0f0f0] p-2 flex items-center text-gray-700 border-r border-gray-300">
                              Size
                            </div>
                            <div class="flex-1 p-2 bg-white">
                              <input
                                type="text"
                                class="w-full outline-none text-gray-600"
                                placeholder="S, M, L, XL..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Footer --> */}
                  <div class="flex md:flex-row justify-between items-center border-t border-gray-200 bg-white p-3 absolute bottom-0 w-full">
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
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormInfoGood;
