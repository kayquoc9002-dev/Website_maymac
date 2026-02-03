import React from "react";
function RowOrder({infoOrder, handleSelectOrder}) {
  //  onChange={(e) => {handleChangeSelectedGood(infoGoodCatalog.id)}}

  
      
  return (
    <> 
      <tr class="hover:bg-gray-50 h-8">
        <td class="border border-gray-300 p-2 text-center">
                  <div class="flex items-center justify-center gap-2">
                    <input type="radio" name="order" defaultChecked={false} class="rounded border-gray-400" onClick={(e) => {handleSelectOrder(e, infoOrder)}}/>
                  </div>
                </td>
        <td class="border border-gray-300 p-2 text-center">
            {infoOrder.order_date}
        </td>
        <td class="border border-gray-300 p-2 font-medium">{infoOrder.order_code}</td>
        <td class="border border-gray-300 p-2 font-bold text-gray-800">{infoOrder.supplier.name}</td>
        <td class="border border-gray-300 p-2"></td>
        <td class="border border-gray-300 p-2">
          <ul className="decoration-0">
            {infoOrder.bookedGoods.map(item => (
            <li >{item.good_name}</li>
          ))}
          </ul>
          
        </td>
        <td class="border border-gray-300 p-2">
          <ul className="decoration-0">
            {infoOrder.bookedGoods.map(item => (
            <li className="text-center">{item.quatity}</li>
          ))}
          </ul>
        </td>
        <td class="border border-gray-300 p-2"></td>
        <td class="border border-gray-300 p-2"></td>
      </tr>
    </>
  );
}

export default RowOrder;
