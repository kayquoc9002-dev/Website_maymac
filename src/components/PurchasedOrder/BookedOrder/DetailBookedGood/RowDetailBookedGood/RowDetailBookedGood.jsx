import React from "react";
import { useForm, Controller } from "react-hook-form";
import postData from "../../../../../Helpers/postData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function RowDetailBookedGood({infoGood}) {
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(infoGood);
    const navigate = useNavigate();
    const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    data.good_tax = parseInt(data.good_tax, 10);
    const sendData = async (data) => {
      await postData(data, setLoading, 'http://localhost:3000/catalogGoods');
      navigate('/catalog/good');
    } 
    sendData(data);
  };
const formatCurrency = (val) => {
    if (!val) return "";
    return new Intl.NumberFormat("vi-VN").format(val) + " ₫";
  };

const handleChangeValue = (e) => {
    if (e.target.value < 0){
        e.target.value = 0;
    } else{
        setTotalPrice(e.target.value*infoGood.good_price)
    }
    e.target.value = parseInt(e.target.value)
}


  return (
    <>
      <tr class="bg-white">
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8">
          </div>
        </td>
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8">
            <input type="text" readOnly defaultValue={infoGood.good_sku} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" readOnly defaultValue={infoGood.good_name} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            {infoGood.good_sku}
          </div>
        </td>
        
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            {infoGood.good_sku}
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            {infoGood.good_sku}
          </div>
        </td>
        
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" readOnly defaultValue={infoGood.good_unit} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input defaultValue={0} type="number" class="w-full h-full px-1 outline-none" 
            {...register("quantity")}
            onChange={handleChangeValue}/>
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" readOnly value={formatCurrency(infoGood.good_price)} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" readOnly value={formatCurrency(totalPrice)} class="w-full h-full px-1 outline-none" />
            
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            {infoGood.good_sku}
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            {infoGood.good_tax}
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" readOnly value={infoGood.good_tax + "%"} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" readOnly value={formatCurrency((infoGood.good_tax*totalPrice)/100)} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input type="text" readOnly value={formatCurrency(((infoGood.good_tax*totalPrice)/100)+totalPrice)} class="w-full h-full px-1 outline-none" />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            {infoGood.good_sku}
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
              *
            </div>
            <input type="text" class="w-full h-full px-1 outline-none" />
          </div>
        </td>
      </tr>
    </>
  );
}

export default RowDetailBookedGood;
