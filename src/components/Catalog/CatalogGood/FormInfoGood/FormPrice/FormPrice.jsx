import React from 'react'

function FormPrice({ value, onChange, onBlur, ...field }) {
  const formatCurrency = (val) => {
    if (!val) return "";
    return new Intl.NumberFormat("vi-VN").format(val) + " ₫";
  };

  return (
    <input
      type="text"
      value={value ?? ""} // hiển thị số thô khi nhập
      onChange={(e) => {
        const raw = e.target.value.replace(/\D/g, "");
        onChange(raw ? parseInt(raw, 10) : "");
      }}
      
      onBlur={(e) => {
        const raw = e.target.value.replace(/\D/g, "");
        onChange(raw ? parseInt(raw, 10) : "");
        // Khi blur thì format lại thành tiền tệ
        e.target.value = raw
          ? new Intl.NumberFormat("vi-VN").format(raw) + " ₫"
          : "";
      }}
      className="flex-1 border border-gray-300 rounded px-2 py-1.5 text-right focus:outline-none focus:border-blue-500"
      placeholder="Nhập số tiền"
      {...field}
    />
  );
}
export default FormPrice;
