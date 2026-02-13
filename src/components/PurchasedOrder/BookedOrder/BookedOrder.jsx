import React, { useEffect } from "react";
import Sidebar from "../../Catalog/Sidebar/Sidebar.jsx";
import Toolbar from "../../Catalog/Toolbar/Toolbar.jsx";
import RowInfoBookedOrder from "./RowInfoBookedOrder/RowInfoBookedOrder.jsx";
import { useState } from "react";
import FormInfoBookedOrder from "./FormInfoBookedOrder/FormInfoBookedOrder.jsx";
import fetchData from "../../../Helpers/fetchData.js";
import { purchaseOrder } from "../../../Helpers/urlAPI.js";
import Header from "../../PartsOfPage/Header.jsx";
import { orderService } from "../../../Helpers/functionsSupabase.js";

function BookedOrder() {
  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState([]);
  const [edittedData, setEdittedData] = useState({});
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      // const result = await fetchData(purchaseOrder);
      try{
        const result = await orderService.getAll();
        setData(result);
      } catch(error){
        console.log("Lỗi!", error);
      }
      
    }
    getData();
   }, [])
  const openForm = () => {
    setSelected(!selected);
  };

  const handleSelect = (id) => {
    const flag = (selectedId.includes(id)
      ? selectedId.filter((item) => item != id)
      : [...selectedId, id]);
    setSelectedId(flag);
  };

  const handleDelete = async () => {
      //Chỗ này để chạy tạm thời
      // console.log(selectedId);
      const result = await orderService.remove(selectedId);
  
      const flag = data.filter((item) => {
        if (!selectedId.includes(item.id)) {
          return item;
        }
      });
      setData(flag);
  
    };

  const handleEdit = () => {
    // console.log(selectedId);
    const edittedId = selectedId[0];
    setEdittedData(data.find(item => item.id == edittedId));
    setSelectedId([]);
    openForm();
  }

  return (
    <>
      {selected && (
        <div className="fixed inset-0 z-20 flex justify-center items-center">
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300   ${
              selected
                ? "opacity-60 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            // {/* Overlay */}
          </div>
          <FormInfoBookedOrder openForm={openForm} dataOrder={data} edittedData={edittedData} setData={setData}/>
          {/* edittedData={edittedData} setData={setData} */}
        </div>
      )}
      <div class=" bg-gray-50 min-h-screen">
        <div class="flex w-screen">
          {/* <!-- Sidebar --> */}
          <Sidebar />

          <div class=" flex-1 w-[100px] flex flex-col h-screen bg-gray-50 font-sans text-sm">
            {/* <!-- Top Header --> */}
            <Header title="Đặt hàng"/>

            <div class="p-2 flex-1 flex flex-col overflow-hidden bg-gray-300">
              {/* <!-- Toolbar --> */}
              <Toolbar openForm={openForm} handleEdit={handleEdit} selectedId={selectedId} handleDelete={handleDelete}/>

              {/* openForm={openForm} edittedId={edittedId} handleEdit={handleEdit} handleDelete={handleDelete} */}

              {/* <!-- Main Content / Table --> */}
              <div class="flex-1 overflow-x-auto relative ">
                <table class="border-collapse w-full">
                  <thead class="bg-[#f0f0f0] sticky top-0 z-10 ">
                    {/* <!-- Header Titles --> */}
                    <tr>
                      <th class="border border-gray-300 w-10 p-2">
                        <input
                          type="checkbox"
                          class="rounded border-gray-400"
                        />
                      </th>
                      <th class="w-24 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Ngày đặt hàng
                      </th>
                      <th class="w-50 border border-gray-300 px-6 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Số phiếu
                      </th>
                      <th class="w-50 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Người đặt
                      </th>
                      <th class="w-50 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Nhà cung cấp
                      </th>
                      <th class="w-50 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Tổng tiền
                      </th>
                      <th class="w-50 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Trạng thái
                      </th>
                      <th class="border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Ghi chú
                      </th>
                    </tr>
                    {/* <!-- Filter Row --> */}
                    <tr class=" bg-[#f0f0f0]">
                      <th class="border border-gray-300 p-2"></th>
                      <th class="border border-gray-300 p-1 ">
                        <div class="flex border border-gray-300 bg-white h-7">
                          <button class="px-1.5 border-r border-gray-300 text-gray-500 hover:bg-gray-100">
                            *
                          </button>
                          <input
                            type="text"
                            class="w-full px-1 outline-none text-xs font-normal"
                          />
                        </div>
                      </th>
                      <th class="border border-gray-300 p-1 ">
                        <div class="flex border border-gray-300 bg-white h-7">
                          <button class="px-1.5 border-r border-gray-300 text-gray-500 hover:bg-gray-100">
                            *
                          </button>
                          <input
                            type="text"
                            class="w-full px-1 outline-none text-xs font-normal"
                          />
                        </div>
                      </th>
                      <th class="border border-gray-300 p-1">
                        <div class="flex border border-gray-300 bg-white h-7">
                          <button class="px-1.5 border-r border-gray-300 text-gray-500 hover:bg-gray-100">
                            *
                          </button>
                          <input
                            type="text"
                            class="w-full px-1 outline-none text-xs font-normal"
                          />
                        </div>
                      </th>
                      <th class="border border-gray-300 p-1">
                        <div class="flex border border-gray-300 bg-white h-7">
                          <button class="px-1.5 border-r border-gray-300 text-gray-500 hover:bg-gray-100">
                            *
                          </button>
                          <input
                            type="text"
                            class="w-full px-1 outline-none text-xs font-normal"
                          />
                        </div>
                      </th>

                      <th class="border border-gray-300 p-1">
                        <div class="flex border border-gray-300 bg-white h-7">
                          <button class="px-1.5 border-r border-gray-300 text-gray-500 hover:bg-gray-100">
                            *
                          </button>
                          <input
                            type="text"
                            class="w-full px-1 outline-none text-xs font-normal"
                          />
                        </div>
                      </th>
                      <th class="border border-gray-300 p-1">
                        <select class="w-full h-7 border border-gray-300 text-xs font-normal px-1 outline-none">
                          <option>Tất cả</option>
                          <option>Có</option>
                          <option>Không</option>
                        </select>
                      </th>
                      <th class="border border-gray-300 p-1">
                        <div class="flex border border-gray-300 bg-white h-7">
                          <button class="px-1.5 border-r border-gray-300 text-gray-500 hover:bg-gray-100">
                            *
                          </button>
                          <input
                            type="text"
                            class="w-full px-1 outline-none text-xs font-normal"
                          />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white text-gray-800">
                    {/* <!-- Row 1 (Selected) --> */}
                    {data.map((item) => (
                      <RowInfoBookedOrder bookedOrder={item} selectedId={selectedId} handleSelect={handleSelect}/>
                    ))}
                    {/* <!-- Row 2 --> */}
                    {/* {data.map((item) => (
                      <RowInfoCustomer handleSelect={handleSelect} inforCustomer={item} selectedId={selectedId} edittedId={edittedId}/>
                    ))} */}
                  </tbody>
                </table>
              </div>
              {/* <!-- Footer Pagination --> */}
              <div class="h-10 bg-white border-t border-gray-300 flex items-center justify-between px-4 flex-shrink-0 text-xs">
                <div class="flex items-center gap-2">
                  <button class="p-1 border rounded bg-white hover:bg-gray-200 disabled:opacity-50">
                    <svg
                      class="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                      ></path>
                    </svg>
                  </button>
                  <button class="p-1 border rounded bg-white hover:bg-gray-200 disabled:opacity-50">
                    <svg
                      class="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                  </button>
                  <span>Trang</span>
                  <input
                    type="text"
                    value="1"
                    class="w-8 h-6 border text-center outline-none"
                  />
                  <span>trên 2</span>
                  <button class="p-1 border rounded bg-white hover:bg-gray-200">
                    <svg
                      class="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                  <button class="p-1 border rounded bg-white hover:bg-gray-200">
                    <svg
                      class="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                  <button class="p-1 border rounded bg-white hover:bg-gray-200">
                    <svg
                      class="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      ></path>
                    </svg>
                  </button>
                  <select class="h-6 border bg-white outline-none">
                    <option>50</option>
                  </select>
                </div>
                <div class="text-gray-600">Hiển thị 1 - 50 trên 87 kết quả</div>
              </div>

              {/* <!-- Floating Action Buttons --> */}
              <div class="fixed bottom-6 right-6 flex flex-col gap-3">
                <button class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 text-white">
                  <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"></path>
                  </svg>
                </button>
                <button class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 text-white">
                  <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.2 15.6l-2.6-1.1c-.4-.2-.9-.1-1.2.2l-1.6 2c-.2.2-.5.3-.8.1-2.6-1.3-4.3-3-5.6-5.6-.2-.3-.1-.6.1-.8l2-1.6c.3-.3.4-.8.2-1.2l-1.1-2.6c-.2-.5-.8-.7-1.3-.5l-2.4 1c-.6.3-1 1-1 1.7 0 8.3 6.7 15 15 15 .7 0 1.4-.4 1.7-1l1-2.4c.2-.5 0-1.1-.5-1.3z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookedOrder;
