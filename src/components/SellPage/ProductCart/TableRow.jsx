import React from "react";
import { useState } from "react";
import { formatCurrencyNoUnit } from "../../../Helpers/formatCurrency";
function TableRow({ order, index }) {
  const [selected, setSelected] = useState(false);
  const handleSelect = () => {
    setSelected(!selected);
  }
  return (
    <>
      <tr
        onClick={handleSelect}
        className={`${selected ? "bg-indigo-50" : "hover:bg-gray-50"} border-b border-gray-100 transition-colors`}
      >
        <td className="p-2 text-center text-gray-400">{index+1}</td>
        <td className="p-2 font-medium">{order.good_sku}</td>
        <td
          className={`p-2 ${selected ? "text-blue-800 font-bold" : "text-gray-700"}`}
        >
          {order.good_name}
        </td>
        <td className="p-2 text-right font-bold">{order.total_quantity || ""}</td>
        <td className="p-2 text-center">{order.good_unit}</td>
        <td className="p-2 text-right">{formatCurrencyNoUnit(order.good_saleprice) || ""}</td>
        <td className="p-2 text-right font-bold text-gray-900">{formatCurrencyNoUnit(order.good_total)}</td>
        <td className="p-2 text-center">
          <button className="text-red-400 hover:text-red-600">×</button>
        </td>
      </tr>
    </>
  );
}

export default TableRow;
