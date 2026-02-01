import AddressUser from "./AddressUser/AddressUser";
import HowToPay from "./HowToPay/HowToPay";
import NameUser from "./NameUser/NameUser";

function InforUser() {
  return (
    <>
      <div className="border-t border-gray-200 my-4"></div>

      <h3 className="text-center text-orange-500 font-bold mb-4">Thông tin</h3>

      <div className="space-y-4 text-sm mb-6">
        <p className="font-bold">Công ty TNHH ABC</p>
        <NameUser/>
        <AddressUser/>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 text-orange-400 mb-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            ></path>
          </svg>
          <span className="font-medium">Cách thức thanh toán</span>
        </div>
        <HowToPay/>
        <div className="flex justify-center mb-4 hidden">
          <div className="border-2 border-blue-500 rounded-lg p-1">
            <img
              src="/pictures/qrdemo.jpg"
              alt="QR Code"
              className="w-24 h-24 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs font-bold text-gray-800 mb-3 hidden">
          Vui lòng chờ xác nhận thanh toán
        </p>
        <button className="w-full border border-orange-500 text-orange-500 font-bold py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
          Đặt hàng
        </button>
      </div>
    </>
  );
}

export default InforUser;
