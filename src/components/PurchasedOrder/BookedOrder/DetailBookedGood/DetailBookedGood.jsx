import React from "react";
import { MdLibraryAdd } from "react-icons/md";
import RowDetailBookedGood from "./RowDetailBookedGood/RowDetailBookedGood";
import TableGoodCatalog from "./TableGoodCatalog/TableGoodCatalog";
import { useState } from "react";
function DetailBookedGood({detailBookedGoods}) {
  const [selected, setSelected] = useState(false);
  const [selectedGood, setSelectedGood] = useState([]);
  const [quatity, setQuatity] = useState(0);

  // console.log(selectedGood);
  const updateSelectedGood = (data) => {
    //Khi user chọn trùng data thì nó sẽ ghi đè lên nhau
    // const flag = selectedGood.filter((item) => {
    //   if (!listSelectedId.includes(item.id)) {
    //     return item;
    //   }
    // });
    const listSelectedId = selectedGood.filter(item => {
      return item.id;
    })
    const flag = data.filter(item => {
      if(!listSelectedId.includes(item.id)){
        return item;
      }
    })

    detailBookedGoods.current = [...selectedGood, ...flag].map(item => {return {...item, quatity: 0}});
    // console.log(detailBookedGoods);
    setSelectedGood([...selectedGood, ...flag].map(item => {return {...item, quatity: 0}}));
    openTableGoodCatalog();
  };
  const openTableGoodCatalog = () => {
    setSelected(!selected);
  };

  const handleDeleteItem = (good) => {
    const flag = selectedGood.filter((item) => item.id != good.id);
    setSelectedGood(flag);
  };

  const handleChangeQuatity = (id, count) => {
    const flag = selectedGood.map(item => {
      if(item.id != id){
        return item;
      } else{
        return {...item, quatity: count}
      }
    })
    setSelectedGood(flag);
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
          <TableGoodCatalog
            openTableGoodCatalog={openTableGoodCatalog}
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
                Số lô
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Serial/IMEI
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Kho
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Đơn vị tính
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Số lượng
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Đơn giá
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Thành tiền
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                %CK
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Tiền CK
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Thuế suất
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Tiền thuế
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Tiền thanh toán
              </th>
              <th class="border border-gray-300 p-1 px-12 whitespace-nowrap">
                Ghi chú
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Row 1 --> */}
            {selectedGood.map((item) => (
              <RowDetailBookedGood
                infoGood={item}
                handleDeleteItem={handleDeleteItem}
                handleChangeQuatity={handleChangeQuatity}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailBookedGood;
