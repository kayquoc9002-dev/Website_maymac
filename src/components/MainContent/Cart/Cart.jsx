function Cart() {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="w-full md:w-40 h-40 flex-shrink-0">
            <img
              src="https://picsum.photos/id/10/300/300"
              alt="Fabric"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                Vải Cotton Poly
              </h3>
              <p className="text-sm font-bold text-gray-600">
                TỔNG CỘNG:{" "}
                <span className="italic font-normal">1.500.000 Đồng</span>
              </p>
            </div>

            <div className="overflow-x-auto">
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
                  <tr className="group hover:bg-gray-50">
                    <td className="py-2 text-left">Orange</td>
                    <td className="py-2">5</td>
                    <td className="py-2">1m50</td>
                    <td className="py-2">100.000</td>
                    <td className="py-2">500.000</td>
                    <td className="py-2 flex justify-center gap-2">
                      <button className="text-blue-500 border border-blue-500 rounded p-0.5 hover:bg-blue-200">
                        <svg
                          className="w-4 h-4"
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
                      <button className="text-red-500 border border-red-500 rounded p-0.5 hover:bg-red-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="group hover:bg-gray-50">
                    <td className="py-2 text-left">Green</td>
                    <td className="py-2">5</td>
                    <td className="py-2">1m50</td>
                    <td className="py-2">100.000</td>
                    <td className="py-2">500.000</td>
                    <td className="py-2 flex justify-center gap-2">
                      <button className="text-blue-500 border border-blue-500 rounded p-0.5 hover:bg-blue-200">
                        <svg
                          className="w-4 h-4"
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
                      <button className="text-red-500 border border-red-500 rounded p-0.5 hover:bg-red-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="group hover:bg-gray-50">
                    <td className="py-2 text-left">Pink</td>
                    <td className="py-2">5</td>
                    <td className="py-2">1m50</td>
                    <td className="py-2">100.000</td>
                    <td className="py-2">500.000</td>
                    <td className="py-2 flex justify-center gap-2">
                      <button className="text-blue-500 border border-blue-500 rounded p-0.5 hover:bg-blue-200">
                        <svg
                          className="w-4 h-4"
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
                      <button className="text-red-500 border border-red-500 rounded p-0.5 hover:bg-red-200">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
