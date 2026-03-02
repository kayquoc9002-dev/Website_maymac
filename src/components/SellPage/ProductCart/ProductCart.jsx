import React from "react";
import TableRow from "./TableRow";
import { useCartStore } from "../../../Helpers/cartStore";
function ProductCart({setCount}) {
    const {cartItems, clearCart} = useCartStore();

    setCount(cartItems.length);
    // localStorage.clear();
    // clearCart();
  return (
    <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#f0f0f0] sticky top-0 z-10 border-b border-gray-300">
          <tr>
            <th className="p-2 border-r border-gray-300 w-10 text-center text-gray-700 font-bold">
              STT
            </th>
            <th className="p-2 border-r border-gray-300 w-32 text-gray-700 font-bold">
              Mã hàng
            </th>
            <th className="p-2 border-r border-gray-300 text-gray-700 font-bold">
              Tên hàng hóa
            </th>
            <th className="p-2 border-r border-gray-300 w-24 text-right text-gray-700 font-bold">
              Số lượng
            </th>
            <th className="p-2 border-r border-gray-300 w-30 text-center text-gray-700 font-bold">
              ĐVT
            </th>
            <th className="p-2 border-r border-gray-300 w-42 text-right text-gray-700 font-bold">
              Đơn giá
            </th>
            <th className="p-2 border-r border-gray-300 w-60 text-right text-gray-700 font-bold">
              Thành tiền
            </th>
            <th className="p-2 w-8"></th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-200">
            {cartItems.map((item, index) => (
                <TableRow order={item} index={index}/>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductCart;
