import React from "react";
import RowImportedGood from "./RowImportedGood/RowImportedGood";
import { useStore } from "../../../../../Helpers/cartStore";
function DetailImportedGood({ order, receivedGoods, optionLength }) {
  // const {option} = useStore();
  console.log("Detail: ", optionLength)
  return (
    <>
      <div class="overflow-x-auto w-full h-[150px] border border-gray-300 overflow-y-auto">
        <table class="w-full min-w-[600px] border-collapse text-xs ">
          <thead class="bg-gray-200">
            <tr class="bg-gray-200 text-gray-700  font-bold z-10 sticky top-0 sticky top-0">
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Kho báo
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Mã SKU
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Tên hàng hóa
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Kích thước
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Màu sắc
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Đơn vị tính
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Số lượng đặt
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Số lượng thực tế
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Số lượng hỏng
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Số lượng sai mẫu
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Đánh giá
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Minh chứng
              </th>
            </tr>
          </thead>
          <tbody className="h-[50px] overflow-y-auto">
            {/* <!-- Row 1 --> */}

            {order.purchase_order_items.map((item, index) => (
              <RowImportedGood index={index} receivedGoods={receivedGoods} detailGood={item} optionLength={optionLength}/>
            ))}

            {/* {Object.keys(selectedOrder).length == 0 ?  <></> : selectedOrder.bookedGoods.map(item => (
              <RowImportedGood detailGood={item}/>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailImportedGood;
