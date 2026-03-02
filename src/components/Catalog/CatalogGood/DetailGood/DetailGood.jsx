import React from "react";
import { useState, useEffect, useRef } from "react";
import { goodService } from "../../../../Helpers/functionsSupabase";
function DetailGood({ openDetail, selectedId }) {
  const [item, setItem] = useState({});
  const [searchedItem, setSearchedItem] = useState({});
  const [searchedInfo, setSearchedInfo] = useState({
    color: "",
    size: "",
  });
//   const [keyReset, setKeyReset] = useState(0);
  const color = useRef(null);
  const size = useRef(null);
  console.log(searchedInfo);
  useEffect(() => {
    const getData = async () => {
      // const result = await fetchData();
      try {
        const result = await goodService.getGoodById(selectedId[0]);
        console.log(result);
        setItem(result);
        setSearchedItem(result);
      } catch (error) {
        console.log("Lỗi rồi!", error);
      }
    };
    getData();
  }, []);
  console.log(searchedItem.variants);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchedInfo({ ...searchedInfo, [name]: value });
//   };

  const handleSearch = () => {
    // console.log("he");
    // console.log(color.current.value);


    //Xem lại
    if (color.current.value != "" || size.current.valuet != "") {
      const result = searchedItem.variants.filter((item) => {
        if (
          !(
            item.variant_color != color.current.value &&
            item.variant_size != size.current.value
          )
        ) {
          return item;
        }
      });
      setSearchedItem({ ...searchedItem, variants: result });
    }
  };

  const handleReset = () => {
    setSearchedItem(item);
    color.current.value = "";
    size.current.value = "";
  }
  return (
    <div className="bg-white w-[900px] h-[600px] rounded-lg shadow-lg z-30 flex flex-col overflow-hidden font-sans">
      {/* <!-- Header --> */}
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b border-gray-300">
        <h2 className="font-bold text-base text-gray-800">
          Chọn biến thể: {searchedItem.good_name}{" "}
          <span className="text-gray-400 font-normal text-sm">
            ({searchedItem.good_sku})
          </span>
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

      {/* <!-- Filters Section --> */}
      <div className="px-2">
        <div className="p-4 px-2 space-y-3 border-b border-gray-300">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <label className="whitespace-nowrap font-medium text-gray-700">
                Màu sắc
              </label>
              <div className="relative">
                <input
                // key={keyReset}
                ref={color}
                  name="color"
                  type="text"
                //   onChange={handleChange}
                  className="border border-gray-300 rounded px-2 py-1.5 w-32 text-gray-600 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="whitespace-nowrap font-medium text-gray-700">
                Size
              </label>
              <div className="relative">
                <input
                // key={keyReset+1}
                ref={size}
                  type="text"
                  name="size"
                //   onChange={handleChange}
                  className="border border-gray-300 rounded px-2 py-1.5 w-24 text-gray-600 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex-grow flex gap-2">
              <input
                type="text"
                placeholder="Tìm mã biến thể..."
                className="border border-gray-300 rounded px-3 py-1.5 flex-grow focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="bg-[#2A3255] hover:bg-[#1e2440] text-white px-4 py-1.5 rounded flex items-center gap-2 font-medium transition-colors"
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Tìm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Product Summary Detail Section --> */}
      <div class="px-4 py-3 bg-blue-50/50 border-b border-gray-300 grid grid-cols-4 gap-y-2 gap-x-4 text-sm">
        <div class="flex items-center">
          <span class="text-gray-500 w-24">Thương hiệu:</span>
          <span class="font-semibold text-gray-800">Thương hiệu A</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-500 w-24">Nhóm hàng:</span>
          <span class="font-semibold text-gray-800">Quần áo</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-500 w-24">Đơn vị tính:</span>
          <span class="font-semibold text-gray-800">Chiếc</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-500 w-24">Thuế (VAT):</span>
          <span class="font-semibold text-red-600">5%</span>
        </div>

        <div class="flex items-center">
          <span class="text-gray-500 w-24">Giá gốc:</span>
          <span class="font-semibold text-gray-800">200,000 đ</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-500 w-24">Barcode:</span>
          <span class="text-gray-400 italic">Chưa cập nhật</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-500 w-24">Ngày tạo:</span>
          <span class="text-gray-700">24/02/2026</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-500 w-24">Tồn ban đầu:</span>
          <span class="font-semibold text-gray-800">0</span>
        </div>
      </div>

      {/* <!-- Table Section --> */}
      <div className="px-2 py-3 flex-1 flex flex-col overflow-hidden">
        <div className="flex-grow overflow-y-auto bg-white">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-100 sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 w-16">
                  Ảnh
                </th>
                <th className="border border-gray-300 p-2 text-left font-semibold text-gray-700 w-32">
                  Mã biến thể
                </th>
                <th className="border border-gray-300 p-2 text-left font-semibold text-gray-700">
                  Màu sắc
                </th>
                <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 w-20">
                  Size
                </th>
                <th className="border border-gray-300 p-2 text-right font-semibold text-gray-700 w-32">
                  Giá bán
                </th>
                <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 w-24">
                  Tồn kho
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {item.variants ? (
                searchedItem.variants.map((variant) => (
                  <tr
                    key={variant.id}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <td className="border border-gray-300 p-1 text-center">
                      <img
                        src={variant.variant_urls[0]}
                        alt={variant.variant_color}
                        className="w-10 h-10 object-cover rounded border border-gray-200 mx-auto"
                      />
                    </td>
                    <td className="border border-gray-300 p-2 font-medium text-blue-600">
                      {variant.variant_id}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {variant.variant_color}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {variant.variant_size}
                    </td>
                    <td className="border border-gray-300 p-2 text-right font-semibold">
                      {variant.variant_price.toLocaleString()} đ
                    </td>
                    <td className="border border-gray-300 p-2 text-center text-red-500 font-medium">
                      {variant.variant_stock}
                    </td>
                  </tr>
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
            onClick={handleReset}
            className="px-4 py-2 text-gray-500 font-medium hover:text-gray-800 flex items-center gap-1"
          >
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailGood;
