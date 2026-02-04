import React from "react";
import RowInfoSupplier from "./RowInfoSupplier/RowInfoSupplier";
import Sidebar from "../Sidebar/Sidebar";
import Toolbar from "../Toolbar/Toolbar";
import { useEffect, useState } from "react";
import fetchData from "../../../Helpers/fetchData";
import FormSupplier from "./FormSupplier/FormSupplier"
import { suppliers } from "../../../Helpers/urlAPI";

function CatalogSupplier() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState([]);
  const [edittedId, setEdittedId] = useState("");
  const [edittedData, setEdittedData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(suppliers);
      setData(result);
    };
    getData();
  }, []);

  const openForm = () => {
    setSelected(!selected);
  };

  console.log(selectedId);
  const handleSelect = (id) => {
    const flag = (selectedId.includes(id)
      ? selectedId.filter((item) => item != id)
      : [...selectedId, id]);
    setSelectedId(flag);
    setEdittedId(edittedId == id ? "" : id)
  };

  const handleDelete = () => {
    //Chỗ này để chạy tạm thời
    console.log(selectedId);
    const flag = data.filter((item) => {
      if (!selectedId.includes(item.id)) {
        return item;
      }
    });
    setData(flag);
  };

  const handleEdit = () => {
    console.log(data.find(item => item.id == edittedId));
    setEdittedData(data.find(item => item.id == edittedId));
    setSelected(true);
  }
  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await fetchData('http://localhost:3000/Suppliers');
  //     setData(result);
  //   }
  //   getData();
  // },[])

  return (
    <>
      {selected && (
        <div className="fixed inset-0 z-40 flex justify-center items-center">
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300   ${
              selected
                ? "opacity-60 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            // {/* Overlay */}
          </div>
          <FormSupplier openForm={openForm} edittedData={edittedData}  setData={setData} />
        </div>
      )}

      <div class=" bg-gray-50 min-h-screen">
        <div class="flex w-screen">
          {/* <!-- Sidebar --> */}
          <Sidebar />

          <div class=" flex-1 w-[100px] flex flex-col h-screen bg-gray-50 font-sans text-sm">
            {/* <!-- Top Header --> */}
            <header class="flex items-center justify-between  bg-white px-4 py-2 border-b border-gray-200 h-14 shrink-0">
              <h1 class="text-xl font-bold text-gray-800">Đơn vị cung cấp</h1>
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
                  <button class="hover:text-yellow-500">
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
                  <button class="hover:text-blue-500">
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
                  <button class="hover:text-blue-500">
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
                  <button class="hover:text-blue-500">
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

            <div class="p-2 flex-1 flex flex-col overflow-hidden bg-gray-300">
              {/* <!-- Toolbar --> */}
              <Toolbar openForm={openForm} edittedId={edittedId} handleEdit={handleEdit} handleDelete={handleDelete} />

              {/* <!-- Main Content / Table --> */}
              <div class="flex-1 overflow-x-auto relative ">
                <table class="border-collapse w-full">
                  <thead class="bg-[#f0f0f0] sticky top-0 z-10">
                    {/* <!-- Header Titles --> */}
                    <tr>
                      <th class="border border-gray-300 w-10 p-2">
                        <input
                          type="checkbox"
                          class="rounded border-gray-400"
                        />
                      </th>
                      <th class="w-32 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Mã đơn vị cung cấp
                      </th>
                      <th class="w-48 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Tên đơn vị
                      </th>
                      <th class="w-24 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Loại đơn vị
                      </th>
                      <th class="w-24 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Nhóm cung cấp
                      </th>
                      <th class="w-28 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Số điện thoại
                      </th>
                      <th class="border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Địa chỉ
                      </th>
                      <th class="w-28 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Trạng thái
                      </th>
                      <th class="w-24 border border-gray-300 px-12 py-2 text-center font-bold text-gray-700 whitespace-nowrap">
                        Là khách hàng
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
                    </tr>
                  </thead>
                  <tbody class="bg-white text-gray-800">
                    {/* <!-- Row 1 (Selected) --> */}
                    {data.map((item) => (
                      <RowInfoSupplier
                        inforSupplier={item}
                        selectedId={selectedId}
                        handleSelect={handleSelect}
                      />
                    ))}
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

export default CatalogSupplier;
