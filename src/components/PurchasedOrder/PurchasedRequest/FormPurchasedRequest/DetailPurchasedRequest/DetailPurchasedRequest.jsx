import React from "react";
import { MdLibraryAdd } from "react-icons/md";
import RowDetailPurchasedRequest from "./RowDetailPurchasedRequest.jsx";
import { useState } from "react";
import TableGood from "./TableGood.jsx";
function DetailPurchasedRequest({detailBookedGoods}) {
  const [selected, setSelected] = useState(false);
  const [selectedGood, setSelectedGood] = useState([]);
  const [quatity, setQuatity] = useState(0);

  console.log(selectedGood);
  console.log("detail: ", detailBookedGoods.current);

  const updateSelectedGood = (data) => {
    setSelectedGood([...selectedGood, data]);
    detailBookedGoods.current = [...detailBookedGoods.current, data];
    openTableGoodCatalog();
    console.log("detail: ", detailBookedGoods.current);
  };
  const openTableGoodCatalog = () => {
    setSelected(!selected);
  };

  const handleDeleteItem = (v_id) => {
    const flag = selectedGood.filter((item) => item.id != v_id);
    setSelectedGood(flag);
  };

  const handleChangeQuatity = (goodId, variantId, count) => {
    const flag = detailBookedGoods.current.map(item => {
      console.log(item.id);
      if(item.id != goodId){
        return item;
      } else{
        return {...item, variants: item.variants.map(variant => variant.id != variantId ? variant : {...variant, quantity: count} )}
      }
    })
    console.log(flag);
    // setSelectedGood(flag);
    detailBookedGoods.current = flag;
  }
  
  return (
    <>
      {selected && (
        <div className="fixed inset-0 z-20 flex justify-center items-center">
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300   ${
              selected
                ? "opacity-60 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            // {/* Overlay */}
          </div>
          <TableGood
            openTableGood={openTableGoodCatalog}
            updateSelectedGood={updateSelectedGood}
          />
        </div>
      )}

      <div class="overflow-x-auto w-full h-[150px] border border-gray-300 overflow-y-auto">
        <table class="w-full min-w-[600px] border-collapse text-xs ">
          <thead class="bg-gray-200">
            <tr class="bg-gray-200 text-gray-700  font-bold z-10 sticky top-0 sticky top-0">
              <th class="border border-gray-300 p-1 px-6 whitespace-nowrap ">
                <MdLibraryAdd
                  class="w-6 h-6 text-gray-900 hover:text-gray-600 inline-block"
                  onClick={openTableGoodCatalog}
                />
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
                Số lượng
              </th>
              <th class="border border-gray-300 p-1 px-4 whitespace-nowrap">
                Đơn vị
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Ghi chú
              </th>
              <th class="border border-gray-300 whitespace-nowrap">
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Row 1 --> */}
            {selectedGood.map((item) => (
              item.variants.map(detail => (
                <RowDetailPurchasedRequest
                infoGood={item}
                infoVariant={detail}
                handleDeleteItem={handleDeleteItem}
                handleChangeQuatity={handleChangeQuatity}
              />
              ))
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailPurchasedRequest;
