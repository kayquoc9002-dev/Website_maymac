// import React from "react";

// function Orders() {
//   return (
//     <>
//       <div class="bg-white mt-3 p-6 shadow-sm rounded-sm">
//         {/* <!-- Card Header --> */}
//         <div class="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
//           <div class="flex items-center gap-2 text-sm">
//             <div class="flex items-center text-green-600 gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <rect x="1" y="3" width="15" height="13"></rect>
//                 <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
//                 <circle cx="5.5" cy="18.5" r="2.5"></circle>
//                 <circle cx="18.5" cy="18.5" r="2.5"></circle>
//               </svg>
//               <span>Giao hàng thành công</span>
//             </div>
//             <span class="text-gray-300">|</span>
//             <span class="text-orange-500 uppercase font-medium">
//               Hoàn thành
//             </span>
//           </div>
//         </div>

//         {/* <!-- Product Item --> */}
//         <div class="flex gap-4 border-b border-gray-100 pb-4">
//           <div class="w-20 h-20 flex-shrink-0 border border-gray-200">
//             <img
//               src="https://picsum.photos/id/146/200/200"
//               alt="Product"
//               class="w-full h-full object-cover"
//             />
//           </div>
//           <div class="flex-1">
//             <h3 class="text-base text-gray-800 mb-1">
//               CHỤP ĐÈN XI NHAN CUB MỚI CHOÁ CAM CHOÁ TRẮNG
//             </h3>
//             <p class="text-gray-500 text-sm mb-1">Phân loại hàng: CAM</p>
//             <p class="text-gray-800 text-sm">x1</p>
//           </div>
//           <div class="text-right">
//             <span class="text-orange-500 text-sm">18.000₫</span>
//           </div>
//         </div>
        
//         <div className="overflow-x-auto flex-1 overflow-y-scroll">
//         <table className="min-w-full text-sm text-center">
//           <thead>
//             <tr className="text-gray-900 font-bold border-b">
//               <th className="pb-2 text-left">Màu sắc</th>
//               <th className="pb-2">Số lượng</th>
//               <th className="pb-2">Khổ vải</th>
//               <th className="pb-2">Đơn giá</th>
//               <th className="pb-2">Thành tiền</th>
//               <th className="pb-2">Ghi chú</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {data.map((item) => (
//               <OrderRow
//                 keyFabric={detail.id}
//                 id={item.key}
//                 color={item.Color}
//                 quantity={item.Quantity}
//                 fabricWidth={item.FabricWidth}
//                 price={item.UnitPrice}
//                 handleDelete={handleDelete}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>

//         {/* <!-- Card Footer --> */}
//         <div class="pt-6">
//           <div class="flex justify-end items-center gap-2 mb-6">
//             <span class="text-sm text-gray-800">Thành tiền:</span>
//             <span class="text-2xl text-orange-500 font-medium">18.000₫</span>
//           </div>
//           <div class="flex justify-end gap-3">
//             <button class="bg-orange-500 text-white px-8 py-2.5 rounded-sm text-sm hover:bg-orange-600 transition-colors shadow-sm">
//               Mua Lại
//             </button>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// }

// export default Orders;
