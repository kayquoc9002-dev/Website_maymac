import React, { useState } from "react";
import InputForm from "./InputForm/InputForm";
import InputTextarea from "./InputForm/InputTextarea";
import { useForm, FormProvider } from "react-hook-form";
import postData from "../../../../Helpers/postData";
import fetchData from "../../../../Helpers/fetchData";
function FormWarehouse({ setListTransactions }) {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);


  // 1. Khởi tạo bộ điều khiển form
  const methods = useForm({
    // mode: "onChange" // Validate ngay khi người dùng gõ
  });
  const {
    register,
    formState: { errors },
    reset,
  } = methods;

  const openForm = () => {
    setSelected(!selected);
  };
  // const da = useRef({
  //   code: "",
  //   type: "",
  //   color: "",
  //   size: "",
  //   method: "",
  //   warehouse: "",
  //   quatity: "",
  //   unit: "",
  //   note: "",
  // });

  const onSubmit = async (data) => {
    setLoading(true);
    data = { ...data, date: new Date().toISOString() };
    await postData(data, setLoading, `http://localhost:3000/transaction`);
    reset();
    const getData = async () => {
      const data = await fetchData("http://localhost:3000/transaction");
      setListTransactions(data);
    }
    getData();
  };
  return (
    <>
      <div class="bg-white rounded-xl border border-gray-200 shadow-sm mb-8  ">
        <h2
          className="p-6 text-lg font-bold text-gray-900 flex items-center gap-2 hover:text-blue-700"
          onClick={openForm}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Tạo Giao Dịch Mới
        </h2>

        {/* Form */}
        {selected && (
          <FormProvider {...methods}>
            <form className="p-6" onSubmit={methods.handleSubmit(onSubmit)}>
              {/* <!-- Row 1 --> */}
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-2">
                    Mã Lô Hàng
                  </label>
                  <InputForm
                    name="code"
                    type="text"
                    placeholder="Mã lô..."
                    value=""
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-2">
                    Hình Thức
                  </label>
                  <div class="relative">
                    <select
                      name="method"
                      class={
                        "w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " +
                        (errors.method ? "border-2 border-red-600" : "")
                      }
                      {...register("method", {
                        required: "Trường này không được để trống",
                      })}
                    >
                      <option value="" selected>
                        -- Hình thức --
                      </option>
                      <option value="Nhập">NHẬP</option>
                      <option value="Xuất">XUẤT</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                    {errors.method && (
                      <div className=".error-message text-red-500 text-[12px]">
                        {errors.method.message}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-2">
                    Kho
                  </label>
                  <div class="relative">
                    <select
                      name="warehouse"
                      class={
                        "w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " +
                        (errors.warehouse ? "border-2 border-red-600" : "")
                      }
                      {...register("warehouse", {
                        required: "Trường này không được để trống",
                      })}
                    >
                      <option value="" selected>
                        -- Chọn kho --
                      </option>
                      <option value="Kho nguyên liệu">Kho nguyên liệu</option>
                      <option value="Kho thành phẩm">Kho thành phẩm</option>
                      <option value="Kho chờ gia công">Kho chờ gia công</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                    {errors.warehouse && (
                      <div className=".error-message text-red-500 text-[12px]">
                        {errors.warehouse.message}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-2">
                    Loại Hàng
                  </label>
                  <InputForm
                    name="type"
                    type="text"
                    placeholder="VD: Vải lụa, Phụ kiện..."
                    value=""
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* <!-- Row 2 --> */}
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-2">
                    Màu Sắc
                  </label>
                  <InputForm
                    name="color"
                    type="text"
                    placeholder="Nhập màu..."
                    value=""
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-2">
                    Kích Thước
                  </label>
                  <InputForm
                    name="size"
                    type="text"
                    placeholder="Nhập size..."
                    value=""
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-2">
                    Số Lượng
                  </label>
                  {/* <InputForm
                name="quatity"
                type="number"
                placeholder="0"
                value="0"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold"
              /> */}
                  <input
                    name="quatity"
                    type="number"
                    placeholder="0"
                    class={
                      "w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold" +
                      (errors.quatity ? "border-2 border-red-600" : "")
                    }
                    {...register("quatity", {
                      required: "Trường này không được để trống",
                      // validate: (value) =>
                      //   value >= 0 || "Giá phải lớn hơn hoặc bằng 0",
                      min: {
                        value: 0,
                        message: "Số lượng phải lớn hơn 0",
                      },
                      valueAsNumber: true,
                    })}
                  />
                  {errors.quatity && (
                    <div className=".error-message text-red-500 text-[12px]">
                      {errors.quatity.message}
                      {/* Không được bỏ trống */}
                    </div>
                  )}
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-2">
                    Đơn vị
                  </label>
                  <InputForm
                    name="unit"
                    type="text"
                    placeholder="Mét vuông"
                    value=""
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold"
                  />
                </div>
              </div>

              {/* <!-- Row 3 --> */}
              <div class="mb-6">
                <label class="block text-xs font-semibold text-gray-600 mb-2">
                  Ghi Chú (Tùy chọn)
                </label>
                <InputTextarea name="note" />
              </div>

              {/* <!-- Footer --> */}
              <div class="flex justify-end">
                <button
                  type="submit"
                  // disabled={!methods.formState.isValid}
                  class={
                    "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors" +
                    (methods.formState.isValid ? "bg-blue-500" : "bg-gray-300")
                  }
                  disabled={loading}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  {loading ? "Đang xử lý" : "Xác nhận giao dịch"}
                </button>
              </div>
            </form>
          </FormProvider>
        )}
      </div>
    </>
  );
}

export default FormWarehouse;

{
  /* <FormWarehouse setListTransactions={setListTransactions}/> */
}
