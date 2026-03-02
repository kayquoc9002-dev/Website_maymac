import React, { use } from "react";
import { MdLibraryAdd } from "react-icons/md";
import RowDetailBookedGood from "./RowDetailBookedGood/RowDetailBookedGood";
import TableGoodCatalog from "./TableGoodCatalog/TableGoodCatalog";
import { useState } from "react";
import { useStore } from "../../../../Helpers/cartStore";
import TableGood from "./TableGood";
function DetailBookedGood({priId, detailBookedGoods}) {
  const [selected, setSelected] = useState(false);
  const [selectedGood, setSelectedGood] = useState([]);
  const [quatity, setQuatity] = useState(0);
  const {option, addOption, removeOption, addStore} = useStore();
  console.log(selectedGood);
  const updateSelectedGood = (data) => {
    //Khi user chọn trùng data thì nó sẽ ghi đè lên nhau
    // const flag = selectedGood.filter((item) => {
    //   if (!listSelectedId.includes(item.id)) {
    //     return item;
    //   }
    // });
    // const listSelectedId = selectedGood.filter(item => {
    //   return item.id;
    // })
    // const flag = data.filter(item => {
    //   if(!listSelectedId.includes(item.id)){
    //     return item;
    //   }
    // })

    // setSelectedGood([...selectedGood, data]);

    // detailBookedGoods.current = [...detailBookedGoods.current, data];
    addOption(data);
    openTableGoodCatalog();
  };
  const openTableGoodCatalog = () => {
    setSelected(!selected);
  };

  const handleDeleteItem = (id, item) => {
    // const flag = selectedGood.filter((item) => item.id != good.id);
    // setSelectedGood(flag);

    // priId.current = priId.current.filter(id => id != id);
    // console.log(priId.current);
    addStore(item);
    removeOption(id);
    
  };

  const handleChangeQuantity = () => {}
  // const handleChangeQuatity = (goodId, variantId, count, totalPrice) => {
  //   const flag = detailBookedGoods.current.map(item => {
  //     console.log(item.id);
  //     if(item.id != goodId){
  //       return item;
  //     } else{
  //       return {...item, variants: item.variants.map(variant => variant.id != variantId ? variant : {...variant, quantity: count, total_price: totalPrice} )}
  //     }
  //   })
  //   console.log(flag);
  //   // setSelectedGood(flag);
  //   detailBookedGoods.current = flag;
  // }
  
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
                Số lượng
              </th>
              <th class="border border-gray-300 p-1 px-4 whitespace-nowrap">
                Đơn vị
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Đơn giá
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Thuế suất
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Thành tiền
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Ghi chú
              </th>
              <th class="border border-gray-300 whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Row 1 --> */}
            {/* {selectedGood.map((item) => (
              item.variants.map(detail => (
                <RowDetailBookedGood
                infoGood={item}
                infoVariant={detail}
                handleDeleteItem={handleDeleteItem}
                handleChangeQuatity={handleChangeQuatity}
              />
              ))
            ))} */}
            {option.length ? option.map(item => (
              <RowDetailBookedGood
                infoPRItem={item}
                // infoVariant={detail}
                handleDeleteItem={handleDeleteItem}
                handleChangeQuantity={handleChangeQuantity}
              />
            )) : <></>}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailBookedGood;
