import React from "react";

function NameUser() {
  return (
    <>
      <div className="flex items-center gap-2 text-orange-400">
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
        <span className="text-gray-600">Nguyễn Văn A - 0987654321</span>
      </div>
    </>
  );
}

export default NameUser;
