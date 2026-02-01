import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import mockData from "../../../../public/database/productListMock.json";
import { useState } from "react";
function ListProduct() {
  const [data] = useState(mockData.data.products.products);

  return (
    <>
      <div class="bg-gray-50 min-h-screen">
        <div class="bg-[#f5f5f5] min-h-screen p-2 md:p-4 font-sans">
          {/* <!-- Grid Container --> */}
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 max-w-[1200px] mx-auto">
            {/* <!-- Product Card --> */}
            {data.map((item) => (
              <ProductItem
                image={item.image_url}
                title={item.product_name}
                key={item.product_code}
                price={item.base_price}
                id={item.product_id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
