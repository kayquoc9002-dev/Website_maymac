import React from 'react'

function FormNumber({ value, onChange, ...field }) {
  return (
    <input
      type="text"
      value={value ?? ""} 
      // hiển thị số thô khi nhập
      onChange={(e) => {
        const raw = e.target.value;
        onChange(raw ? parseInt(raw) : "");
      }}
      className="flex-1 border border-gray-300 rounded px-2 py-1.5 text-right focus:outline-none focus:border-blue-500"
      {...field}
    />
  )
}

export default FormNumber
