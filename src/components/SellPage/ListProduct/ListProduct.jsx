import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { sellService } from "../../../Helpers/functionsSupabase";
import { useCartStore } from "../../../Helpers/cartStore";
function ListProduct({setKeyReset}) {
  const [data, setData] = useState([]);
  const {cartItems} = useCartStore();
  console.log(cartItems);
  
  useEffect(() => {
    const getData = async () => {
      // const result = await fetchData();
      try {
        const result = await sellService.getAllProducts();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log("Lỗi rồi!", error);
      }
      // setData(result);
    };
    getData();
  }, []);
  return (
    <>
      <div className="h-3/5 border-t-2 border-gray-300 flex flex-col bg-gray-50">
        <div className="p-2 flex justify-between items-center shrink-0">
          <span className="font-bold text-gray-700 text-sm uppercase tracking-wider">
            Sản phẩm
          </span>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Tìm nhanh (Shift+F3)..."
              className="text-xs border border-gray-300 rounded-full px-4 py-1 w-48 outline-none focus:border-blue-500 shadow-sm"
            />
            <button className="text-xs bg-white border border-gray-300 px-2 py-1 rounded flex items-center gap-1 hover:bg-gray-100">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Lọc nhóm
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 flex-wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {/* <ProductCard name="Sơ mi Tommy Nam..." price="0,00" />
            <ProductCard name="BÌNH SỮA PIGEON..." price="52.000" />
            <ProductCard name="PHẤN THÊM BABI..." price="35.000" />
            <ProductCard name="SỮA TẮM ENTER..." price="10.000" />
            <ProductCard name="Tròng 1.60 Chemi..." price="1.090.000" /> */}
            {data.length ? (
              data.map((item, index) => (
                <ProductCard setKeyReset={setKeyReset}  detailProduct={item} index={index} avatar={item.variants[0] && item.variants[0].variant_urls[0] ? item.variants[0].variant_urls[0]: ""}/>
              ))
            ) : (
              <></>
            )}
            {data.length ? (
              data.map((item, index) => (
                <ProductCard  detailProduct={item} index={index} avatar={item.variants[0] && item.variants[0].variant_urls[0] ? item.variants[0].variant_urls[0]: ""}/>
              ))
            ) : (
              <></>
            )}
            {data.length ? (
              data.map((item, index) => (
                <ProductCard  detailProduct={item} index={index} avatar={item.variants[0] && item.variants[0].variant_urls[0] ? item.variants[0].variant_urls[0]: ""}/>
              ))
            ) : (
              <></>
            )}
            {data.length ? (
              data.map((item, index) => (
                <ProductCard  detailProduct={item} index={index} avatar={item.variants[0] && item.variants[0].variant_urls[0] ? item.variants[0].variant_urls[0]: ""}/>
              ))
            ) : (
              <></>
            )}
            
          </div>
        </div>
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
      </div>
    </>
  );
}

export default ListProduct;
