import React from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
function InputForm({ name, type, placeholder, value, className }) {
  // const [error, setError] = useState(false);

  // const handleChange = (e) => {
  //   if (!(type == "number" && e.target.value < 0)) {
  //     setValue(e.target.value);
  //   }
  // };
  // const handleError = (e) => {
  //   if (!e.target.value) {
  //     setError(true);
  //   }
  //   handleInput();
  // };


  // 4. Con tự "thu sóng" để lấy các hàm cần thiết
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        class={className + (errors[name] ? "border-2 border-red-600" : "")}
        {...register(name, { 
          required: "Trường này không được để trống",
          minLength: { value: 1, message: "Tối thiểu 1 ký tự" }
        })}
      />
      {errors[name] && (
        <div className=".error-message text-red-500 text-[12px]">
          {errors[name].message}
        </div>
      )}
      
    </>
  );
}

export default InputForm;
