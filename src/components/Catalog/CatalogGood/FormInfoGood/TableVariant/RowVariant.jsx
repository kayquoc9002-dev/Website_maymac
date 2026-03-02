import React from "react";
import { useState } from "react";
import { generateId } from "../../../../../Helpers/generateId";
import { uploadMultipleImages } from "../../../../../Helpers/functionsSupabase";
// import { formatCurrency } from '../../../../../Helpers/formatCurrency';
function RowVariant({ id, index, goodVariants, deleteRow }) {
  // console.log(goodVariants.current);
  const [price, setPrice] = useState("");
  // const [saleprice, setPrice] = useState("");
  const [allUrl, setAllUrl] = useState([]);
  const [variant, setVariant] = useState({
    id: id,
    variant_id: "",
    variant_size: "",
    variant_color: "",
    variant_price: 0,
    variant_saleprice: 0,
    variant_stock: 0,
    variant_urls: [],
  });

  const [previews, setPreviews] = useState([]);
  const handleMultipleFiles = async (e) => {
    const files = Array.from(e.target.files); // Chuyển FileList thành Array

    // Tạo danh sách URL xem trước
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    // Cập nhật vào state để hiển thị lên màn hình
    setPreviews([...previews, ...imageUrls]);

    // setAllUrl();
    try {
      const result = await uploadMultipleImages(files);
      setVariant({
        ...variant,
        variant_urls: [...variant.variant_urls, ...result],
      });
    } catch (error) {
      console.log("Lỗi!", error);
    } finally {
      // Mẹo tối ưu: Reset giá trị input để có thể chọn lại cùng 1 file nếu cần
      e.target.value = "";
    }
  };

  const formatCurrency = (val) => {
    if (!val) return ""; // bỏ ký tự không phải số
    if(val == "0") return "";
    const numeric = val.replace(/\D/g, ""); // format theo kiểu có dấu phẩy ngăn cách
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name == "variant_price" || name == "variant_saleprice") {
      // setPrice(formatCurrency(value));
      const clean = value.replace(/\D/g, "");
      setVariant({ ...variant, [name]: value ? parseInt(clean, 10) : 0 });
    } else if (name == "variant_stock") {
      setVariant({ ...variant, [name]: value ? parseInt(value, 10) : 0 });
    } else {
      setVariant({ ...variant, [name]: value });
    }
  };
  goodVariants.current = [
    ...goodVariants.current.filter((item) => item.id != variant.id),
    variant,
  ];
  // console.log(variant);
  return (
    <>
      {/* <!-- Data Row 1 --> */}
      <tr class="bg-gray-50 h-[20px]">
        <td class="border-r border-b border-gray-300 py-2 text-center text-gray-500"></td>
        <td class="border-r border-b border-gray-300 px-3 py-2 text-gray-800">
          <input
            type="text"
            name="variant_id"
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100 text-center"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2">
          <input
            type="text"
            name="variant_size"
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100 text-center"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 ">
          <input
            type="text"
            name="variant_color"
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100 text-center"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 ">
          <input
            type="text"
            name="variant_price"
            value={formatCurrency(JSON.stringify(variant.variant_price))}
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100 text-center"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 ">
          <input
            type="text"
            name="variant_saleprice"
            value={formatCurrency(JSON.stringify(variant.variant_saleprice))}
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100 text-center"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 ">
          <input
            type="text"
            name="variant_stock"
            value={variant.variant_stock.toString() == "0" ? "" : variant.variant_stock.toString()}
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100 text-center"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 flex flex-col h-full justify-center text-center">
          <div className="flex justify-center flex-wrap">
            {previews.length ? (
              previews.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  style={{ width: "50px", margin: "5px" }}
                />
              ))
            ) : (
              <div>
                <span class="text-xs font-medium text-gray-600">
                  Thêm hình ảnh
                </span>
                {/* <span class="text-xs text-gray-500">(1/10)</span> */}
              </div>
            )}
          </div>
          <div className="mt-1">
            <input
              class=""
              type="file"
              id={"fileInput" + index}
              hidden
              accept="image/*"
              multiple
              onChange={handleMultipleFiles}
            />
            <label
              className="mt-3  bg-blue-900 text-white px-2 py-1 rounded text-xs  w-[100px]"
              for={"fileInput" + index}
            >
              {previews.length || "..."}
            </label>
          </div>
          {/* bg-[#2c3e50] */}
        </td>
        <td class="border-b border-gray-300 px-2 py-2 text-center ">
          <button
            class="text-red-500 hover:text-red-700 flex items-center justify-center w-full"
            onClick={() => {
              deleteRow(variant.id);
            }}
          >
            {/* <!-- Trash Icon SVG --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="fill-current"
            >
              <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
}

export default RowVariant;
