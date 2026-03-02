import React from "react";

function RowRequest({request}) {
  return (
    <>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 p-2 text-center">
          <input type="checkbox" class="rounded border-gray-400" />
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{request.recorded_date} - {request.recorded_time}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-blue-600 cursor-pointer hover:underline">
          {request.pr_code}
        </td>
        <td class="border border-gray-300 px-2 py-1.5">{request.requester_name}</td>
        <td class="border border-gray-300 px-2 py-1.5">{request.warehouse}</td>
        <td class="border border-gray-300 px-2 py-1.5 text-orange-500  text-center">
          Chưa thực hiện
        </td>
        <td class="border border-gray-300 px-2 py-1.5">
          {request.reason}
        </td>
      </tr>
    </>
  );
}

export default RowRequest;
