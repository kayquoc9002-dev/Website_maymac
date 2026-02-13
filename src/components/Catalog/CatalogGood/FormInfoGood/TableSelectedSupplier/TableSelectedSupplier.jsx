import React from "react";
import { useState, useRef, useEffect } from "react";
import { MdLibraryAdd } from "react-icons/md";
import RowSelectedSupplier from "./RowSelectedSupplier/RowSelectedSupplier";
import { generateId } from "../../../../../Helpers/generateId";
import TableSupplier from "./TableSupplier/TableSupplier";
import { supplierService } from "../../../../../Helpers/functionsSupabase";
import RowVariant from "../TableVariant/RowVariant";
function TableSelectedSupplier({suppliers}) {
  const [selected, setSelected] = useState(false);
  const [listSupplier, setListSupplier] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  useEffect(() => {
          const getData = async () => {
              try{
                const result = await supplierService.getItemsById(selectedId);
                suppliers.current = result;
                setListSupplier(result)
              } catch(error){
                console.log("Có lỗi!", error);
              }
              
          }
          getData()
      }, [selectedId])
      
      // console.log(listSupplier);

    const openTableSupplier = () => {
      setSelected(!selected);
    }
    // const addRow = () => {
    //   setListSupplier([...listSupplier, {id: generateId()}])
    // };
    const deleteRow = (id) => {
      // suppliers.current = suppliers.current.filter(item => item.id != id);
      setListSupplier(listSupplier.filter(item => item.id != id));
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
          <TableSupplier
            openTableSupplier={openTableSupplier}
            setListSupplier={setListSupplier}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            // edittedData={edittedData} setData={setData}
          />
          
        </div>
      )}
      {/* <!-- Tabs Navigation --> */}
      <div class="flex border-b border-gray-300 relative">
        <button class="px-4 py-3 text-sm font-semibold text-blue-700 border-b-2 border-blue-600 focus:outline-none">
          Nhà cung cấp
        </button>
      </div>

      {/* <!-- Table Container --> */}
      <div class="w-full overflow-x-auto border-l border-r border-b border-gray-300">
        <table class="w-full border-collapse min-w-[900px] h-[100px]">
          <thead>
            {/* <!-- Header Row 1: Column Titles --> */}
            <tr class="bg-gray-100 text-gray-800 text-sm font-semibold">
              <th class="border-t border-b border-r border-gray-300 h-9 w-[50px] mx-auto text-center " onClick={() => {openTableSupplier()}}>
                <MdLibraryAdd class="w-6 h-6 text-gray-900 hover:text-gray-600 inline-block" />
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-1/4 text-center">
                Mã nhà cung cấp
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-1/3 text-center">
                Tên nhà cung cấp
              </th>
              <th class="border-t border-b border-r border-gray-300 py-3 w-1/3 text-center">
                Địa chỉ
              </th>
              <th class="border-t border-b border-gray-300 py-3 w-[50px]"></th>
            </tr>
          </thead>

          {/* <!-- Table Body --> */}
          <tbody class="text-sm">
            {listSupplier.map((item) => (
              <RowSelectedSupplier key={item.id} id={item.id} supplier={item} deleteRow={deleteRow}/>
            ))}

            {/* <!-- Empty Filler Row to match height in image --> */}
            {/* <tr class="h-48">
              <td class="border-r border-gray-300"></td>
              <td class="border-r border-gray-300"></td>
              <td class="border-r border-gray-300"></td>
              <td class="border-r border-gray-300"></td>
              <td></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableSelectedSupplier;
