import React from "react";

function ProductItem({image, title, key, price, id}) {

  const handleClickProductDetail = () => {
    console.log("Product ID:", id);
  }

  return (
    <>
      <div onClick={handleClickProductDetail} key={key} class="bg-white hover:shadow-[0_0.0625rem_20px_0_rgba(0,0,0,0.05)] hover:-translate-y-[1px] transition-all duration-100 rounded-sm cursor-pointer border border-transparent hover:border-primary/50 overflow-hidden group">
        {/* <!-- Image Section --> */}
        <div class="relative w-full aspect-square">
          <img
            src={image}
            alt="Product"
            class="w-full h-full object-cover"
          />
          {/* <!-- Discount Badge --> */}
          <div class="absolute top-0 right-0 bg-[rgba(255,212,36,0.9)] text-[#ee4d2d] px-1 py-0.5 text-xs font-bold">
            <span class="block text-center leading-3">-11%</span>
          </div>
        </div>
        {/* <!-- Content Section --> */}
        <div class="p-2">
          <div class="text-xs text-[#333] line-clamp-2 min-h-[2rem] mb-1 leading-4">
            {title}
          </div>
          {/* <!-- Tags --> */}
          <div class="flex flex-wrap gap-1 mb-2 h-4 overflow-hidden">
            {/* <!-- Empty for this item based on image, or generic spacer --> */}
          </div>
          {/* <!-- Price & Sold --> */}
          <div class="flex flex-col gap-1">
            <div class="flex items-baseline justify-between">
              <div class="text-[#ee4d2d] font-medium">
                <span class="text-xs underline">₫</span>
                <span class="text-base">{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
