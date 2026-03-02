import React from "react";
import { useState, useEffect, useRef } from "react";
import { sellService } from "../../../../Helpers/functionsSupabase";
import RowDetailProduct from "./RowDetailProduct";
import { useCartStore } from "../../../../Helpers/cartStore";
function DetailProduct({ openDetail, goodId }) {
  const { addItem } = useCartStore();
  // console.log(cartItem);
  const [isChecked, setIsChecked] = useState(true);
  const [data, setData] = useState([]);
  const order = useRef({});
  useEffect(() => {
    const getData = async () => {
      // const result = await fetchData();
      try {
        const result = await sellService.getDetailProductById(goodId);
        console.log(result);
        order.current = {
          id: result.id,
          good_name: result.good_name,
          good_sku: result.good_sku,
          good_unit: result.good_unit,
          good_saleprice: result.good_saleprice,
          good_total: 0,
          total_quantity: 0,
          good_tax: result.good_tax,
          order_detail: [],
        };
        setData(result);
      } catch (error) {
        console.log("Lỗi rồi!", error);
      }
      // setData(result);
    };
    getData();
  }, []);

  const handleChangeOrder = (detail) => {
    let flag = [
      ...order.current.order_detail.filter((item) => {
        if (item.id != detail.id) {
          return item;
        }
      }),
    ];
    if (detail.quantity_order) {
      flag = [...flag, detail];
    }
    order.current = {
      ...order.current,
      order_detail: flag,
    };
    console.log(order.current);
  };

  const handleSubmitOrder = () => {
    const totals =  order.current.order_detail.reduce(
      (acc, item) => {
        acc.totalQuantity += item.quantity_order;
        acc.totalPrice += item.variant_totalprice;
        return acc;
      },
      { totalQuantity: 0, totalPrice: 0 },
    );

    // console.log(totals);
    // { totalQuantity: 6, totalPrice: 1300 }

    order.current.good_total = totals.totalPrice;
    order.current.total_quantity = totals.totalQuantity;
    console.log(order.current);
    if (order.current.order_detail.length > 0) {
      addItem(order.current);
      openDetail();
    }
  };

  return (
    <div className="max-w-6xl z-30 mx-auto p-6 bg-white font-sans text-slate-800 shadow-sm border border-gray-300 rounded-sm">
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row gap-5 mb-8">
        {/* Product Image Placeholder */}
        <div className="shrink-0">
          <div className="w-24 h-24 bg-gray-400 rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden shadow-sm">
            {/* Bag Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80 mb-1"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="text-xs font-medium">Xem</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">
            {data.good_name}
          </h1>
          <div className="text-sm text-slate-600 space-y-1">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <p>
                <span className="font-bold text-slate-700">
                  Vị trí lưu kho:
                </span>{" "}
                Chưa có thông tin
              </p>
              <p>
                <span className="font-bold text-red-500">Thuế suất:</span>{" "}
                <span className="text-[20px] font-bold text-red-500">{data.good_tax}%</span>
              </p>
            </div>
            <p>
              <span className="font-bold text-slate-700">Mô tả:</span> Chưa có
              thông tin
            </p>
          </div>
        </div>
      </div>

      {/* --- Table Section --- */}
      {/* Thêm max-h-[400px] (hoặc chiều cao bạn muốn) và overflow-y-auto */}
      <div className="w-full overflow-x-auto overflow-y-auto max-h-[500px] mb-10 border border-gray-200 rounded-sm relative custom-scrollbar">
        <table className="w-full min-w-[1000px] border-collapse">
          {/*Thêm sticky top-0 và z-10 cho thead
           Lưu ý: Phải có bg-slate-100 để che các dòng bên dưới khi cuộn lên*/}
          <thead className="bg-slate-100 sticky top-0 z-10 shadow-sm">
            <tr className="text-slate-800 text-xs font-bold uppercase tracking-wider">
              <th className="p-4 text-left border-b border-gray-200 uppercase bg-slate-100">
                Mã SKU
              </th>
              <th className="p-4 text-left border-b border-gray-200 uppercase bg-slate-100">
                Mã vạch
              </th>
              <th className="p-4 text-left w-1/5 border-b border-gray-200 uppercase bg-slate-100">
                Tên hàng hóa
              </th>
              <th className="p-4 text-left border-b border-gray-200 uppercase bg-slate-100">
                ĐVT
              </th>
              <th className="p-4 text-right border-b border-gray-200 uppercase bg-slate-100">
                Giá
              </th>
              <th className="p-4 text-center border-b border-gray-200 uppercase bg-slate-100">
                SL
              </th>
              <th className="p-4 text-center border-b border-gray-200 uppercase bg-slate-100">
                Thành tiền
              </th>
              <th className="p-4 text-center border-b border-gray-200 uppercase bg-slate-100">
                Tồn kho
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700 bg-indigo-50/30">
            {/* <tr className="border-b border-indigo-100 hover:bg-indigo-50/50 transition-colors">
              <td className="p-4 text-center">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 cursor-pointer"
                  />
                </div>
              </td>
              <td className="p-4 font-medium text-slate-600">
                KL/EC-ONL-18-V215-T-Đ
              </td>
              <td className="p-4 text-slate-500">12312312312315555736</td>
              <td className="p-4 font-medium">
                Đèn ốp nổi Kingeco 18w vuông trắng, viền đen - KL
              </td>
              <td className="p-4">
                <div className="flex items-center gap-1 cursor-pointer text-slate-600 hover:text-indigo-600 transition-colors">
                  <span>Cái</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </td>
              <td className="p-4 text-right font-bold text-slate-900">0</td>
              <td className="p-4 text-center text-indigo-600 font-bold">0</td>
              <td className="p-4 text-center">
                <input
                  type="text"
                  defaultValue="1"
                  className="w-12 text-center bg-transparent border-b border-slate-300 focus:border-indigo-600 focus:outline-none pb-1 font-bold text-indigo-700"
                />
              </td>
              <td className="p-4 text-center text-indigo-600 font-bold">2</td>
              <td className="p-4 text-center">
                <button className="text-indigo-600 hover:text-indigo-800 transition-transform hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                </button>
              </td>
            </tr>  */}
            {/* Các RowDetailProduct của bạn */}
            {data.variants ? (
              data.variants.map((item, index) => (
                <RowDetailProduct
                  key={index}
                  infoVariant={item}
                  goodTax={data.good_tax}
                  goodName={data.good_name}
                  goodBarcode={data.good_barcode}
                  goodSku={data.good_sku}
                  goodUnit={data.good_unit}
                  handleChangeOrder={handleChangeOrder}
                />
              ))
            ) : (
              <></>
            )}
            {/* ... lặp lại dữ liệu của bạn ... */}
          </tbody>
        </table>
      </div>
      {/* --- Footer Section --- */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-gray-100">
        {/* Toggle Switch */}
        <label className="inline-flex items-center cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() => setIsChecked(!isChecked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </div>
          <span className="ml-3 text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
            Trừ số lượng hàng hóa khách đặt vào tồn kho
          </span>
        </label>

        {/* Action Buttons */}
        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={handleSubmitOrder}
            className="flex-1 sm:flex-none px-8 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-sm transition-all active:scale-95"
          >
            Đồng ý
          </button>
          <button
            onClick={openDetail}
            className="flex-1 sm:flex-none px-8 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg shadow-sm transition-all"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
