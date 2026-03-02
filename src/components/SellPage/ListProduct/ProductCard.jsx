import React from "react";
import { useRef, useState } from "react";
import { formatCurrencyNoUnit } from "../../../Helpers/formatCurrency";
import DetailProduct from "./DetailProduct/DetailProduct";

function ProductCard({setKeyReset, avatar, detailProduct }) {
  const [selected, setSelected] = useState(false);


  // const url = useRef("");
  // if (detailProduct.variants[0] && detailProduct.variants[0].variant_urls[0]) {
  //   url.current = detailProduct.variants[0].variant_urls[0];
  // }

  const openDetail = () => {
    setSelected(!selected);
    // setKeyReset(prev => prev + 1);
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
          <DetailProduct
            openDetail={openDetail}
            goodId = {detailProduct.id}
            // updateSelectedGood={updateSelectedGood}
          />
        </div>
      )}
      <div
        onClick={openDetail}
        className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:border-blue-400 cursor-pointer transition"
      >
        <div className="h-20 bg-gray-50 flex items-center justify-center relative">
          {avatar == "" ? (
            <>
              <svg
                className="w-10 h-10 text-gray-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                  fillRule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          ) : (
            <img src={avatar} className="w-10" />
          )}
          <span className="absolute bottom-1 right-1 bg-green-500 text-white text-[10px] font-bold px-1 rounded">
            {formatCurrencyNoUnit(detailProduct.good_saleprice)}
          </span>
        </div>
        <div className="p-1 text-[12px] text-gray-700 leading-tight h-8 overflow-hidden font-medium">
          {detailProduct.good_name}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
