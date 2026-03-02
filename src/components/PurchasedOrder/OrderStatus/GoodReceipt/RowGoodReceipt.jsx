import React from "react";
import { MdReportProblem } from "react-icons/md";
function RowGoodReceipt({receipt}) {
  return (
    <>
      <tr class={"hover:bg-gray-100 "}>
        <td class="border border-gray-300 p-2 text-center">
           {receipt.goods_status == 'issue' ? <MdReportProblem className="w-5 h-5 text-red-400"/> : ""}
          {/* <input type="checkbox" class="rounded border-gray-400" /> */}
          
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{receipt.recorded_date} - {receipt.recorded_time}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {receipt.po_code}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{receipt.receiver_name}</td>
        <td class="border border-gray-300 px-2 py-1.5">{receipt.receive_warehouse}</td>
        <td class={"border border-gray-300 px-2 py-1.5 text-center " + (receipt.status == "confirmed" ? "text-green-500" : "text-red-500")}>
          {receipt.status == "confirmed" ? "Đã kiểm" : "Đã hủy"}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {receipt.note}
        </td>
      </tr>
    </>
  );
}

export default RowGoodReceipt;
