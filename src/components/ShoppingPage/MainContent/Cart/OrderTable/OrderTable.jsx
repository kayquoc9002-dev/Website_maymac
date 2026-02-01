import React from "react";
import OrderRow from "../OrderRow/OrderRow";
import { useState } from "react";
import { useCartStore } from "../../../../../cartStore";
function OrderTable({ detail }) {
  const [data, setData] = useState(detail.Orders);
  const { removeItem, removeOrder } = useCartStore();
  function calculateTotal() {
    let sum = 0;
    data.forEach((item) => {
      sum += item.TotalPrice;
    });
    return sum;
  }

  function handleDelete(idFabric, idRemove) {
    console.log(idFabric, idRemove);
    console.log("Xóa");
    console.log(idRemove);
    let result = data.filter((item) => {
      if (item.key != idRemove) {
        return item;
      }
    });
    // console.log(result);
    removeItem(idFabric, idRemove);
    if(result.length == 0){
      console.log("Xóa toàn bộ đơn hàng");
      removeOrder(idFabric);
    }
    setData(result);   
  }

  return (
    <>
        <div className="bg-white rounded-xl shadow-md p-4 h-[45%] mb-4">
          <div className="flex flex-col md:flex-row gap-6 h-full">
            {/* Product Image */}
            <div className="w-full md:w-40 h-40 flex-shrink-0">
              <img
                src="https://picsum.photos/id/10/300/300"
                alt="Fabric"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {detail.FabricType}
                </h3>
                <p className="text-sm font-bold text-gray-600">
                  TỔNG CỘNG:{" "}
                  <span className="italic font-normal">
                    {new Intl.NumberFormat("vi-VN").format(calculateTotal())}{" "}
                    Đồng
                  </span>
                </p>
              </div>

              <div className="overflow-x-auto flex-1 overflow-y-scroll">
                <table className="min-w-full text-sm text-center">
                  <thead>
                    <tr className="text-gray-900 font-bold border-b">
                      <th className="pb-2 text-left">Màu sắc</th>
                      <th className="pb-2">Số lượng</th>
                      <th className="pb-2">Khổ vải</th>
                      <th className="pb-2">Đơn giá</th>
                      <th className="pb-2">Thành tiền</th>
                      <th className="pb-2">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.map((item) => (
                      <OrderRow
                        keyFabric={detail.id}
                        id={item.key}
                        color={item.Color}
                        quantity={item.Quantity}
                        fabricWidth={item.FabricWidth}
                        price={item.UnitPrice}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default OrderTable;
