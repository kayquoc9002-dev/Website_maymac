import { X } from "lucide-react";
import Product from "./Product/Product";
import { useEffect, useState, useRef } from "react";
import TableProduct from "./TableProduct/TableProduct";
import { useCartStore } from "../../../../cartStore";
import mockData from "../../../../../public/database/productListMock.json";

function ProductList() {
  const [data, setData] = useState(mockData.data.products.products);
  const [selected, setSelected] = useState(false);
  const { addItem, cartItems } = useCartStore();
  // const [index, setIndex] = useState(null);
  const indexRef = useRef(0);


  // console.log(indexRef.current);
  let i = indexRef.current - 1;
  console.log(data);
  // console.log(data[indexRef-1]);

  //Fetch data from BackendAPI
  // useEffect(() => {
  //   async function fetchApi() {
  //     const res = await fetch(`http://localhost:3000/vaiLua`);
  //     const json = await res.json();
  //     setData(json);
  //   }
  //   fetchApi();
  // }, []);

  function toggleCart(idItem) {
    indexRef.current = idItem;

    setSelected(!selected);
  }
  function orderCart(detailCart){
    // console.log(detailCart);
    addItem(detailCart);
    localStorage.setItem('orders', JSON.stringify(cartItems));
    setSelected(!selected);
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((item) => (
          // console.log(item);
          <Product
            image={item.image_url}
            title={item.product_name}
            key={item.product_code}
            price={item.base_price}
            id={item.product_id}
            toggleCart={toggleCart}
          />
        ))}
      </div>

      {/* Cart Drawer Overlay and Content */}
      {selected && (
        <div
          className={`fixed inset-0 z-40 ${
            selected ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onClick={() => {
            toggleCart();
          }}
        >
          {/* Overlay */}
          <div
            // className={`bg-white w-full max-w-md rounded-xl shadow-xl transform transition-transform duration-300 ${
            //   selected ? "scale-100" : "scale-90"}`} // onClick={(e)=> e.stopPropagation()}
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              selected ? "opacity-50" : "opacity-0"
            }`}
          ></div>

          <TableProduct selected={selected} toggleCart={toggleCart} orderCart={orderCart} i={i} data={data} 
            dataOrder={{
              id: i+1,
              FabricType: data[i].ten, 
              Orders: []
            }}/>
        </div>
      )}
    </>
  );
}
export default ProductList;
