import React from "react";
import { batchItems } from "../../../../../Helpers/functionsSupabase";
import { useState, useEffect } from "react";
function DetailBatchItem({ variantId, openDetail }) {
  const [variantData, setVariantData] = useState({});
  useEffect(() => {
    const getData = async () => {
      // const result = await fetchData(stock);
      const result = await batchItems.getBatchItemByVid(variantId);
      console.log(result);
      setVariantData(result);
    };
    getData();
  }, []);
  return (
    <div className="bg-white w-[900px] h-[600px] rounded-lg shadow-lg z-30 flex flex-col overflow-hidden font-sans">
      {/* <!-- Header --> */}
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b border-gray-300">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h2 className="font-bold text-base text-gray-800">
            Chi tiết lô hàng nhập kho
          </h2>
        </div>
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

      {/* <!-- Variant Context Bar --> */}
      <div className=" bg-[#283593] text-white px-4 py-3 flex justify-between items-center">
        {/* bg-[#2A3255] */}
        <div>
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
            Đang xem biến thể
          </div>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-lg font-bold">{variantData.good_name}</span>
            <span className="text-sm bg-white/20 px-2 py-0.5 rounded border border-white/10">
              {variantData.variant_color} - {variantData.variant_size}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
            Tổng tồn biến thể
          </div>
          <div className="text-2xl font-black text-yellow-400">
            {variantData.total_variant_stock ? variantData.total_variant_stock.toLocaleString() : ""}
          </div>
        </div>
      </div>

      {/* <!-- Filter & Search --> */}
      <div className="px-2">
        <div className="p-3 px-2 flex items-center gap-4 border-b border-gray-300">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-600">
              Kho hàng:
            </label>
            <select className="border border-gray-300 rounded px-2 py-1.5 text-sm bg-gray-50 focus:outline-none w-40">
              <option>Tất cả kho</option>
              <option>Kho nguyên liệu</option>
            </select>
          </div>
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Tìm mã lô hàng (Batch Code)..."
              className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:border-blue-500 outline-none pl-9"
            />
            <svg
              className="absolute left-3 top-2 text-gray-400"
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
          </div>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-sm font-medium border border-gray-300 transition-colors">
            Lọc dữ liệu
          </button>
        </div>
      </div>

      {/* <!-- Table Section --> */}
      <div className="px-2 flex-1 flex flex-col overflow-hidden">
        <div className="flex-grow overflow-y-auto bg-white">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm ">
              <tr>
                <th className="border border-gray-300 p-3 text-center w-12 text-gray-500 font-bold">
                  STT
                </th>
                <th className="border border-gray-300 p-3 text-left font-bold text-gray-700">
                  Mã lô hàng
                </th>
                <th className="border border-gray-300 p-3 text-left font-bold text-gray-700">
                  Kho lưu trữ
                </th>
                <th className="border border-gray-300 p-3 text-center font-bold text-gray-700 w-44">
                  Ngày nhập lô
                </th>
                <th className="border border-gray-300 p-3 text-right font-bold text-gray-700 w-32">
                  Số lượng nhập
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {variantData.batches ? (
                variantData.batches.map((batch, index) => (
                  <tr
                    key={batch.batch_id}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <td className="border border-gray-300 p-3 text-center text-gray-400">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 p-3">
                      <div className="font-mono text-blue-600 font-semibold">
                        {batch.batch_code}
                      </div>
                      {/* <div className="text-[10px] text-gray-400 mt-0.5">
                        ID: {batch.batch_id}
                      </div> */}
                    </td>
                    <td className="border border-gray-300 p-3 text-gray-600">
                      <div className="flex items-center gap-1">
                        {variantData.warehouse}
                      </div>
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-gray-600">
                      {new Date(batch.created_at).toLocaleString("vi-VN")}
                    </td>
                    <td className="border border-gray-300 p-3 text-right">
                      <span className="font-bold text-gray-800 text-base">
                        {batch.quantity.toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>

        {/* <!-- Small Summary Footer for Table --> */}
        <div className="bg-gray-50 p-3 border-t border-gray-300 flex justify-end">
          <div className="text-sm">
            <span className="text-gray-500">Số lượng lô hàng: </span>
            <span className="font-bold text-gray-800">
              {variantData.batches ? variantData.batches.length : 0}
            </span>
          </div>
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
            Tải báo cáo lô
          </button>
          <button
            type="button"
            className="px-8 py-2 bg-[#2A3255] hover:bg-[#1e2440] text-white rounded font-medium transition-colors"
            onClick={openDetail}
          >
            Thoát
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailBatchItem;
