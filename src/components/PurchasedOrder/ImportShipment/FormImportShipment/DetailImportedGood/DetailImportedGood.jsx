import React from "react";
import RowImportedGood from "./RowImportedGood/RowImportedGood";

function DetailImportedGood({order}) {
  // console.log("Detail: ", order.bookedGoods)
  return (
    <>
      <div class="overflow-x-auto w-full h-[150px] border border-gray-300 overflow-y-auto">
        <table class="w-full min-w-[600px] border-collapse text-xs ">
          <thead class="bg-gray-200">
            <tr class="bg-gray-200 text-gray-700  font-bold z-10 sticky top-0 sticky top-0">
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Mã SKU</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Tên hàng hóa</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Số lô</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Serial/IMEI</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Kho</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Đơn vị tính</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Số lượng</th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Đơn giá</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Thành tiền</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">%CK</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Tiền CK</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Thuế suất</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Tiền thuế</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Tiền thanh toán</th>
                <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">Ghi chú</th>
            </tr>
          </thead>
          <tbody className="h-[50px] overflow-y-auto">
            {/* <!-- Row 1 --> */}
            <tr class="bg-white">
              <td class="border border-gray-300 p-0 relative">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
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
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
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
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
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
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
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
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
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
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
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
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
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
              <td class="border border-gray-300 p-0">
                <div class="flex h-8">
                  <div class="w-6 flex items-center justify-center border-r border-gray-200 text-gray-400">
                    *
                  </div>
                  <input type="text" class="w-full h-full px-1 outline-none" />
                </div>
              </td>
            </tr>
            {order.bookedGoods ? order.bookedGoods.map(item => (
              <RowImportedGood detailGood={item}/>
            )) : <></>}

            {/* <!-- Empty Rows for visual height --> */}
            {/* <tr class="h-8 border border-gray-300">
              <td colspan="6"></td>
            </tr>
            <tr class="h-8 border border-gray-300">
              <td colspan="6"></td>
            </tr>
            <tr class="h-8 border border-gray-300">
              <td colspan="6"></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailImportedGood;
