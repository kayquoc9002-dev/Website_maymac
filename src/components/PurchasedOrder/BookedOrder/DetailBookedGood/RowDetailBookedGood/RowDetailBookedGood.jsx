import React from "react";
import postData from "../../../../../Helpers/postData";
import { useState } from "react";
import { catalogGoods } from "../../../../../Helpers/urlAPI";
import { MdDeleteForever } from "react-icons/md";
import DetailBookedGood from "../DetailBookedGood";
function RowDetailBookedGood({ infoGood, handleDeleteItem, handleChangeQuatity }) {
  const [totalPrice, setTotalPrice] = useState(0);
  

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
      setTotalPrice(e.target.value * infoGood.good_price);
    }
    e.target.value = parseInt(e.target.value);
    handleChangeQuatity(infoGood.id, e.target.value);
    // detailBookedGoods.current = selectedGood.map(item => {
    //   if(item.id != infoGood.id){
    //     return item;
    //   } else{
    //     return {...item, quatity: e.target.value}
    //   }
    // })
    // infoGood = {...infoGood, quatity: e.target.value}
    // console.log(infoGood);
  };


  

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
              defaultValue={infoGood.good_sku}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoGood.good_name}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">{infoGood.good_sku}</div>
        </td>

        <td class="border border-gray-300 p-0">
          <div class="flex h-8">{infoGood.good_sku}</div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">{infoGood.good_sku}</div>
        </td>

        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              defaultValue={infoGood.good_unit}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              defaultValue={0}
              type="number"
              class="w-full h-full px-1 outline-none"
              onChange={handleChangeValue}
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              value={formatCurrency(infoGood.good_price)}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              value={formatCurrency(totalPrice)}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">{infoGood.good_sku}</div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">{infoGood.good_tax}</div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              value={infoGood.good_tax + "%"}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              value={formatCurrency((infoGood.good_tax * totalPrice) / 100)}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              readOnly
              value={formatCurrency(
                (infoGood.good_tax * totalPrice) / 100 + totalPrice,
              )}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">{infoGood.good_sku}</div>
        </td>
        <td class="border border-gray-300 border-r-0 p-0" onClick={() => {handleDeleteItem(infoGood)}}>
          <div class="flex h-8">
            <MdDeleteForever className="w-7 h-7 px-1 text-red-600 hover:text-red-400" />
          </div>
        </td>
      </tr>
    </>
  );
}

export default RowDetailBookedGood;
