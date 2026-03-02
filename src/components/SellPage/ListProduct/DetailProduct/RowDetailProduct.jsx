import React from "react";
import { formatCurrencyNoUnit } from "../../../../Helpers/formatCurrency";
import { useState, useRef } from "react";
function RowDetailProduct({
  infoVariant,
  goodTax,
  goodName,
  goodBarcode,
  goodSku,
  goodUnit,
  handleChangeOrder,
}) {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const detailOrder = useRef({});

  const handleChangeQuantity = (e) => {
    // console.log(e.target.value)
    const flag = parseInt(e.target.value);
    // console.log(flag);
    if (flag > 0 && flag) {
      const total = Math.round(flag * infoVariant.variant_saleprice * (1 + goodTax / 100));
      setQuantity(flag);
      setTotalPrice(total);
      detailOrder.current = {
        id: infoVariant.id,
        variant_id: infoVariant.variant_id,
        variant_size: infoVariant.variant_size,
        variant_color: infoVariant.variant_color,
        quantity_order: flag,
        variant_price: infoVariant.variant_price,
        variant_saleprice: infoVariant.variant_saleprice,
        variant_totalprice: total,
      };
      handleChangeOrder(detailOrder.current);
    } else {
      setQuantity(0);
      setTotalPrice(0);
      detailOrder.current = {
        id: infoVariant.id,
        quantity_order: 0,
      };
      handleChangeOrder(detailOrder.current);
    }
  };

  return (
    <>
      <tr className="border-b border-indigo-100 hover:bg-indigo-50/50 transition-colors">
        {/* <td className="p-4 text-center">
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 cursor-pointer"
            />
          </div>
        </td> */}
        <td className="p-4 font-medium text-slate-600">{goodSku}</td>
        <td className="p-4 text-slate-500">{goodBarcode || ""}</td>
        <td className="p-4 font-medium">
          {goodName} - {infoVariant.variant_color} - {infoVariant.variant_size}
        </td>
        <td className="p-4">
          <div className="flex items-center gap-1 cursor-pointer text-slate-600 hover:text-indigo-600 transition-colors">
            <span>{goodUnit}</span>
          </div>
        </td>
        <td className="p-4 text-right font-bold text-slate-900">
          {formatCurrencyNoUnit(infoVariant.variant_saleprice)}
        </td>
        <td className="p-4 text-center">
          <input
            type="text"
            // value={quantity ? parseInt(quantity) : ""}
            value={quantity.toString() == "0" ? "" : quantity.toString()}
            onChange={(e) => {
              handleChangeQuantity(e);
            }}
            className="w-12 text-center bg-transparent border-b border-slate-300 focus:border-indigo-600 focus:outline-none pb-1 font-bold text-indigo-700"
          />
        </td>
        <td className="p-4 text-center text-indigo-600 font-bold">
          {formatCurrencyNoUnit(totalPrice)}
        </td>
        <td className="p-4 text-center text-indigo-600 font-bold"></td>
      </tr>
    </>
  );
}

export default RowDetailProduct;
