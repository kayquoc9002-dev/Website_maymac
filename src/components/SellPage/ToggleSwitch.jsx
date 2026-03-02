import React from "react";

function ToggleSwitch({ id, label }) {
  return (
    <>
      <div className="flex items-center">
        <div className="relative inline-block w-8 mr-1 align-middle select-none">
          <input
            type="checkbox"
            id={id}
            className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 appearance-none cursor-pointer z-10"
          />
          <label
            htmlFor={id}
            className="toggle-label block overflow-hidden h-4 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <label
          htmlFor={id}
          className="text-[11px] text-gray-600 whitespace-nowrap"
        >
          {label}
        </label>
      </div>
    </>
  );
}

export default ToggleSwitch;
