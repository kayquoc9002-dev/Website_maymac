import React from "react";
import { useState } from "react";
function RowSelectedSupplier({supplier, id, deleteRow}) {
  // const [infoSupplier, setInfoSupplier] = useState({
  //     id: id,
  //     supplier_id: "",
  //     supplier_name: "",
  //     supplier_address: ""
  //   });
  //   const handleChange = (e) => {
  //     const {value, name} = e.target;
  //     setInfoSupplier({...infoSupplier, [name]: value});
      
  //   }
  //   suppliers.current = [...suppliers.current.filter(item => item.id != infoSupplier.id), infoSupplier]
  
  return (
    <>
      {/* <!-- Data Row 1 --> */}
      <tr class="bg-gray-50 h-9">
        <td class="border-r border-b border-gray-300 py-2 text-center text-gray-500">
          
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 text-gray-800">
          {/* <input type='text' className='w-full border border-gray-300 p-2 bg-gray-100'/> */}
          {supplier.supplier_id}
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2">
          {/* <input type='text' className='w-full border border-gray-300 p-2 bg-gray-100'/> */}
          {supplier.supplier_name}
        </td>
        <td class="border-r border-b border-gray-300 px-3 py-2 ">
          {/* <input type='text' className='w-full border border-gray-300 p-2 bg-gray-100'/> */}
          {supplier.supplier_address}
        </td>
        <td class="border-b border-gray-300 px-2 py-2 text-center ">
          <button type="button" class="text-red-500 hover:text-red-700 flex items-center justify-center w-full"  onClick={()=>{deleteRow(id)}}>
            {/* <!-- Trash Icon SVG --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="fill-current"
            >
              <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
}

export default RowSelectedSupplier;
