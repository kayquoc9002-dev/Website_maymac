import React from "react";
import { useState, useEffect } from "react";
import { batchItems } from "../../../../Helpers/functionsSupabase";
import RowDetailVariant from "./RowDetailVariant";
function DetailVariant({ openDetail, selectedId, selectedParentId }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      // const result = await fetchData(stock);
      const result = await batchItems.getVariantByGid(selectedId);
      console.log(result);
      setData(result);
    };
    getData();
  }, []);
  return (
    <div className="bg-white w-[900px] h-[600px] rounded-lg shadow-lg z-30 flex flex-col overflow-hidden font-sans">
      {/* <!-- Header --> */}
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b border-gray-300">
        <h2 className="font-bold text-base text-gray-800 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
            <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path>
            <path d="M4 12H20"></path>
            <path d="M10 12v8"></path>
            <path d="M14 12v8"></path>
          </svg>
          Chi tiết tồn kho biến thể
        </h2>
        <div className="flex space-x-2 text-gray-400">
          <button type="button" className="hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
          <button
            type="button"
            className="hover:text-gray-600"
            onClick={openDetail}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- Top Info Bar (Dữ liệu Header mới) --> */}
      <div className=" bg-[#283593] px-4 py-3 border-b border-gray-300">
        {/* bg-blue-50/50 */}
        <div className="flex justify-between items-center text-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-200">Hàng hóa:</span>
              <span className="font-bold text-white text-lg">
                {data.good_name}
              </span>
              <span className="px-2 py-0.5 bg-gray-200 rounded text-xs text-gray-600 uppercase tracking-wider">
                {data.good_sku}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-blue-200">
                Đơn vị: 
              </span>
              <b className="text-white">{data.good_unit}</b>
            </div>
          </div>
          <div className="text-right bg-white p-2 px-4 rounded-lg border border-blue-100 shadow-sm">
            <div className="text-xs text-gray-500 uppercase font-semibold">
              Tổng tồn thực tế
            </div>
            <div className="text-2xl font-bold text-[#2A3255]">
              {data.total_good_stock
                ? data.total_good_stock.toLocaleString()
                : ""}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Search Section --> */}
      <div className="px-2">
        <div className="p-3 px-2 border-b border-gray-300">
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Tìm kiếm màu sắc, size hoặc mã biến thể..."
                className="w-full border border-gray-300 rounded pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <button className="bg-white border border-gray-300 text-gray-600 px-3 py-1.5 rounded text-sm hover:bg-gray-50 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              Lọc
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Table Section --> */}
      <div className="px-2 flex-1 flex flex-col overflow-hidden">
        <div className="flex-grow overflow-y-auto bg-white">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-100 sticky top-0 z-10 shadow-sm text-gray-700 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="border border-gray-300 p-2 w-16 text-center italic">
                  STT
                </th>
                <th className="border border-gray-300 p-2 text-center w-20">
                  Ảnh
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Biến thể
                </th>
                <th className="border border-gray-300 p-2 text-center w-32">
                  Màu sắc
                </th>
                <th className="border border-gray-300 p-2 text-center w-24">
                  Size
                </th>
                <th className="border border-gray-300 p-2 text-right w-32">
                  Tồn thực tế
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.variants_list ? (
                data.variants_list.map((item, index) => (
                  <RowDetailVariant
                    goodName={data.good_name}
                    infoVariant={item}
                    index={index}
                  />
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* <!-- Footer Actions --> */}
      <div className="px-2">
        <div className="bg-white p-4 px-2 border-t border-gray-300 flex justify-end items-center gap-3">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded text-gray-600 font-medium hover:bg-gray-50 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            In danh sách
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-[#2A3255] hover:bg-[#1e2440] text-white rounded font-medium transition-colors"
            onClick={openDetail}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailVariant;
