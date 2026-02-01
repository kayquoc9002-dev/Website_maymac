// import CartItem from "./CartItem/CartItem";
import OrderTable from "./OrderTable/OrderTable";
import { useCartStore } from "../../../../cartStore";
function Cart() {
  const { cartItems } = useCartStore();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3000/orders`)
  //     .then(res => res.json())
  //     .then(result => {
  //       setCartItems(result);
  //       setData(result);
  //     })
  // }, [])
  var inforOrder = cartItems;
  
  // var data = 

  return (
    <>
      {inforOrder.map(detail => {
        if(detail.Orders.length != 0){
          return (
            <OrderTable detail={detail}/>
          )
      }})}
    </>
  );
}
export default Cart;
