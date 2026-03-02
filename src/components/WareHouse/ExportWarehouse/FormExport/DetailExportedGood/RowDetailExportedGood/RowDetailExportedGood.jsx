import React from "react";
import postData from "../../../../../../Helpers/postData";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
function RowDetailExportedGood({ infoGoodVariant, handleDeleteItem, handleChangeQuatity }) {
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(infoGoodVariant.goods);

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

  const handleChangeValue = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
    } else {
      // setTotalPrice(e.target.value * infoGood.good_price);
    }
    e.target.value = parseInt(e.target.value);
    handleChangeQuatity(infoGoodVariant.id, parseInt(e.target.value));
  };
  const handleChangeNote = (e) => {
    infoGoodVariant.variant.note = e.target.value;
  } 


  

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
              defaultValue={infoGoodVariant.goods.good_sku}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoGoodVariant.batches.batch_code}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoGoodVariant.goods.good_name}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoGoodVariant.variants.variant_size}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoGoodVariant.variants.variant_color}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="number"
              defaultValue={0}
              class="w-full h-full px-1 outline-none text-right"
              onChange={handleChangeValue}
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              value={infoGoodVariant.goods.good_unit}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              defaultValue=""
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 border-r-0 p-0" onClick={() => {handleDeleteItem(infoGoodVariant.id)}}>
          <div class="flex h-8">
            <MdDeleteForever className="w-7 h-7 px-1 text-red-600 hover:text-red-400" />
          </div>
        </td>
      </tr>
    </>
  );
}

export default RowDetailExportedGood;
