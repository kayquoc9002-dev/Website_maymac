import React from "react";
import { MdLibraryAdd } from "react-icons/md";
import RowDetailBookedGood from "./RowDetailBookedGood/RowDetailBookedGood";
import TableGoodCatalog from "./TableGoodCatalog/TableGoodCatalog";
import { useState } from "react";
function DetailBookedGood() {
  const [selected, setSelected] = useState(false);
  const [selectedGood, setSelectedGood] = useState([]);
  console.log(selectedGood);
  const updateSelectedGood = (data, listSelectedId) => {
    //Khi user chọn trùng data thì nó sẽ ghi đè lên nhau
    const flag = selectedGood.filter(item => {
      if(!listSelectedId.includes(item.id)){
        return item;
      }
    })
    setSelectedGood([...flag, ...data]);
    openTableGoodCatalog();
  }
  const openTableGoodCatalog = () => {
    setSelected(!selected);
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
            updateSelectedGood = {updateSelectedGood}
          />
        </div>
      )}

      <div class="overflow-x-auto w-full h-[150px] border border-gray-300 overflow-y-auto">
        <table class="w-full min-w-[600px] border-collapse text-xs ">
          <thead class="bg-gray-200">
            <tr class="bg-gray-200 text-gray-700  font-bold z-10 sticky top-0 sticky top-0">
              <th class="border border-gray-300 p-1 px-6 whitespace-nowrap ">
                <MdLibraryAdd class="w-6 h-6 text-gray-900 hover:text-gray-600 inline-block" onClick={openTableGoodCatalog}/>
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
            {selectedGood.map(item => (
              <RowDetailBookedGood infoGood={item}/>
            ))}
{/*             
            <RowDetailBookedGood />
            <RowDetailBookedGood />
            <RowDetailBookedGood />
            <RowDetailBookedGood />
            <RowDetailBookedGood /> */}

            {/* <!-- Empty Rows for visual height --> */}
            {/* <tr class="h-8 border border-gray-300">
              <td colspan="6"></td>
            </tr>
            <tr class="h-8 border border-gray-300">
              <td colspan="6"></td>
            </tr>
            <tr class="h-8 border border-gray-300">
              <td colspan="6"></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailBookedGood;
