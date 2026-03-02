import React from "react";
import postData from "../../../../../Helpers/postData";
import { useState } from "react";
import { catalogGoods } from "../../../../../Helpers/urlAPI";
import { MdDeleteForever } from "react-icons/md";
function RowDetailBookedGood({ infoPRItem, handleDeleteItem, handleChangeQuantity }) {
  const [totalPrice, setTotalPrice] = useState((infoPRItem.requested_qty * infoPRItem.variant_price) * (1 + infoPRItem.good_tax/100));
  
  
 //Hàm xử lý khi submit form 
  // const onSubmit = (data) => {
  //   data.good_tax = parseInt(data.good_tax, 10);
  //   const sendData = async (data) => {
  //     await postData(data, setLoading, catalogGoods);
  //     navigate("/catalog/good");
  //   };
  //   sendData(data);
  // };


  const formatCurrency = (val) => {
    if (!val) return "";
    return new Intl.NumberFormat("vi-VN").format(val) + " ₫";
  };

  // const handleChangeValue = (e) => {
  //   if (e.target.value < 0 || isNaN(e.target.value)) {
  //     e.target.value = 0;
  //   }
  //   e.target.value = parseInt(e.target.value);
  //   const total = (parseInt(e.target.value) * infoPRItem.variant_price) * (1 + infoPRItem.good_tax/100)
  //   setTotalPrice(total);
  //   handleChangeQuatity(infoPRItem.good_id, infoPRItem.variant_id, parseInt(e.target.value), total);
  // };


  

  return (
    <>
      <tr class="bg-white">
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8"></div>
        </td>
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoPRItem.request_warehouse}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoPRItem.good_sku}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoPRItem.good_name}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="text-center">{infoPRItem.variant_size}</div>
        </td>

        <td class="border border-gray-300 p-0">
          <div class="text-center">{infoPRItem.variant_color}</div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              // defaultValue={0}
              value={infoPRItem.requested_qty}
              type="number"
              class="w-full h-full px-1 outline-none text-center"
              // onChange={handleChangeValue}
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoPRItem.good_unit}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              value={formatCurrency(infoPRItem.variant_price)}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              value={infoPRItem.good_tax + "%"}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              value={formatCurrency(totalPrice)}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0"></td>
        <td class="border border-gray-300 border-r-0 p-0" onClick={() => {handleDeleteItem(infoPRItem.id, infoPRItem)}}>
          <div class="flex h-8">
            <MdDeleteForever className="w-7 h-7 px-1 text-red-600 hover:text-red-400" />
          </div>
        </td>
      </tr>
    </>
  );
}

export default RowDetailBookedGood;
