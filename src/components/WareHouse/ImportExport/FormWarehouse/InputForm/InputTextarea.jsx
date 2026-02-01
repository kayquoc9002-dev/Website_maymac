import React from "react";
import { useFormContext } from "react-hook-form";
function InputTextarea({name}) {
    // const handleChange = (e) => {
    //     setValue(e.target.value)
    // }
    const {register} = useFormContext();
  return (
    <>
      <textarea
        name={name}
        rows="3"
        placeholder="Thông tin bổ sung..."
        class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        // onChange={handleChange}
        // onBlur={handleInput}
        {...register(name)}
      ></textarea>
    </>
  );
}

export default InputTextarea;
