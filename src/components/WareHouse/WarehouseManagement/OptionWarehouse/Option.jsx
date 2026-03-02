import React from "react";
import { useNavigate } from "react-router-dom";

function Option() {
    const navigate = useNavigate();
const openWarehouseByGood = () => {
    navigate(`/warehouse`);
}
const openWarehouseByBatch = () => {
    navigate(`/warehouse/batch`);
}

  return (
    <div>
      <header class="flex items-center  bg-white px-4 py-2 border-b border-gray-200 h-8 shrink-0">
        <h1 class="text-sm font-bold text-gray-800 p-2 hover:bg-gray-200" onClick={openWarehouseByGood}>
          {/* Quản lý theo hàng */}
          Kho nguyên liệu
        </h1>
        <h1 class="text-sm font-bold text-gray-800 p-2 hover:bg-gray-200" onClick={openWarehouseByBatch}>
          {/* Quản lý theo lô */}
          Kho thành phẩm
        </h1>
        <h1 class="text-sm font-bold text-gray-800 p-2 hover:bg-gray-200" onClick={openWarehouseByBatch}>
          {/* Quản lý theo lô */}
          Kho chờ gia công
        </h1>
      </header>
    </div>
  );
}

export default Option;
