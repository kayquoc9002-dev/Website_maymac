import React from "react";
import { formatCurrencyNoUnit } from "../../../Helpers/formatCurrency";
function RowProduct({product}) {
  return (
    <>
      <tr className="border-b border-dashed border-gray-200">
        <td className="p-3 align-top">
          <div className="font-bold text-slate-800 uppercase text-[12px]">
            {product.good_sku}
          </div>
          <div className="text-slate-600 font-medium">{product.good_name}</div>
          <div className="text-red-500 italic text-[11px] mt-1 bg-red-50 px-1 inline-block">
            Thuế {product.good_tax}%
          </div>
        </td>
        
        <td className="p-3 text-right align-top font-bold text-slate-700">{product.total_quantity}</td>
        <td className="p-3 text-right align-top text-slate-700">{product.good_unit}</td>
        <td className="p-3 text-right align-top text-slate-700">{formatCurrencyNoUnit((product.good_total*product.good_tax)/(product.good_tax+100))}</td>
        <td className="p-3 text-right align-top font-bold text-blue-700">{formatCurrencyNoUnit(product.good_total)}</td>
      </tr>
    </>
  );
}

export default RowProduct;
