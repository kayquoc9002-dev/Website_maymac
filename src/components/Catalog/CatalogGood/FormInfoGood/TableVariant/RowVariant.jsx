import React from "react";
import { useState } from "react";
import { generateId } from "../../../../../Helpers/generateId";
// import { formatCurrency } from '../../../../../Helpers/formatCurrency';
function RowVariant({ id, goodVariants, deleteRow }) {
  // console.log(goodVariants.current);
  const [price, setPrice] = useState("");
  const [variant, setVariant] = useState({
    id: id,
    variant_id: "",
    variant_size: "",
    variant_color: "",
    variant_price: 0,
    variant_stock: 0,
  });

  const formatCurrency = (val) => {
    if (!val) return ""; // bỏ ký tự không phải số
    const numeric = val.replace(/\D/g, ""); // format theo kiểu có dấu phẩy ngăn cách
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name == "variant_price") {
      setPrice(formatCurrency(value))
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
            className="w-full border border-gray-300 p-2 bg-gray-100"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2">
          <input
            type="text"
            name="variant_size"
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 ">
          <input
            type="text"
            name="variant_color"
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 ">
          <input
            type="text"
            name="variant_price"
            value={price}
            
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100"
          />
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 ">
          <input
            type="text"
            name="variant_stock"
            value={variant.variant_stock.toString() || "0"}
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full border border-gray-300 p-2 bg-gray-100"
          />
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
