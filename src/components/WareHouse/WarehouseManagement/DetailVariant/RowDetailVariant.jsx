import React, { useState } from "react";
import { batchItems } from "../../../../Helpers/functionsSupabase";
import DetailBatchItem from "./DetailBatchItem/DetailBatchItem";
function RowDetailVariant({ goodName, infoVariant, index }) {
  const [selected, setSelected] = useState(false);
  const openDetailVariant = () => {
    setSelected(!selected);
  };
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
          <DetailBatchItem
            openDetail={openDetailVariant}
            variantId={infoVariant.id}
            // updateSelectedGood={updateSelectedGood}
          />
        </div>
      )}
    <tr
      key={infoVariant.variant_id}
      onClick={openDetailVariant}
      className="hover:bg-blue-50/50 transition-colors group"
    >
      <td className="border border-gray-300 p-2 text-center text-gray-400">
        {index + 1}
      </td>
      <td className="border border-gray-300 p-1">
        <img
          src={infoVariant.variant_urls ? infoVariant.variant_urls[0] : ""}
          alt={infoVariant.variant_color}
          className="w-12 h-12 object-cover rounded border border-gray-200 mx-auto group-hover:scale-110 transition-transform"
        />
      </td>
      <td className="border border-gray-300 p-2 text-gray-800">
        <div className="font-medium">
          {goodName} - {infoVariant.variant_color}
        </div>
        <div className="text-[11px] text-gray-400 font-mono truncate w-40">
          {infoVariant.variant_code}
        </div>
      </td>
      <td className="border border-gray-300 p-2 text-center">
        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600 border border-gray-200">
          {infoVariant.variant_color}
        </span>
      </td>
      <td className="border border-gray-300 p-2 text-center font-bold text-gray-700">
        {infoVariant.variant_size}
      </td>
      <td className="border border-gray-300 p-2 text-right">
        <span
          className={`font-bold text-base ${infoVariant.stock > 0 ? "text-green-600" : "text-red-500"}`}
        >
          {infoVariant.stock ? infoVariant.stock.toLocaleString() : ""}
        </span>
      </td>
    </tr>
   </> 
    
  );
}

export default RowDetailVariant;
