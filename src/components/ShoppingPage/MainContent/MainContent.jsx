import Cart from "./Cart/Cart";
import ProductList from "./ProductList/ProductList";
import Bill from "./Bill/Bill";
import Header from "../Header/Header";
function MainContent() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="h-[45vh] overflow-y-scroll">
              <Cart />
            </div>
            <ProductList />
          </div>
          <Bill />
        </div>
      </div>
    </>
  );
}
export default MainContent;
