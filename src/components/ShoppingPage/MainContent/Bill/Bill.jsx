import InforUser from "./InforUser/InforUser";
import { useCartStore } from '../../../../cartStore'

function Bill() {
  const { cartItems } = useCartStore();
  // console.log(cartItems);
  console.log(cartItems.length);
  const total = cartItems.reduce((total, item) => {
    return total + item.Orders.reduce((totalOrder, order) => {
      return totalOrder + order.TotalPrice;
    }, 0)
  }, 0)

  return (
    <>
      <div className="lg:col-span-4">
        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-orange-500 w-full text-center">
              Hóa đơn
            </h2>
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="space-y-3 text-sm mb-6">
            <div className="flex justify-between">
              <span className="text-orange-400 font-medium">Số lượng:</span>
              <span className="text-gray-500">{cartItems.length} sản phẩm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-400 font-medium">Tổng tiền:</span>
              <span className="text-gray-400">{new Intl.NumberFormat('vi-VN').format(total)} VND</span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-400 font-medium">
                Thuế VAT (5%):
              </span>
              <span className="text-gray-400">{new Intl.NumberFormat('vi-VN').format(total*0.05)} VND</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-orange-500">
              Thành tiền:
            </span>
            <span className="text-xl font-bold text-gray-800">
              {new Intl.NumberFormat('vi-VN').format(total*1.05)} VNĐ
            </span>
          </div>
          <InforUser />
        </div>
      </div>
    </>
  );
}

export default Bill;
