import React, { useState } from "react";
import { useForm } from "react-hook-form";
import postData from "../../../../Helpers/postData";
// import fetchData from "../../../../Helpers/fetchData";
// import { customers } from "../../../../Helpers/urlAPI";
import { customerService } from "../../../../Helpers/functionsSupabase";
function FormCustomer({ openForm, dataGood, edittedData, setData }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    // await postData(data, setLoading, customers);
    if(Object.keys(edittedData).length != 0){
      try{
      const result = await customerService.edit(edittedData.id, data);
      console.log(result);
      setData(dataGood.map(item => {
        if(item.id == edittedData.id){
          return data
        }else{
          return item
        }
      }));
    } catch(error){
      console.log("Lỗi!", error);
    }
    } else{
      try{
      const result = await customerService.add(data);
      console.log(result);
      setData([...dataGood, data]);
    } catch(error){
      console.log("Lỗi!", error);
    }
    }

    // if(edittedData == []){
      
    // }else{
    //   // Cập nhật data mới với database
    // }
    reset();
    setLoading(false);
    

    //Sau khi submit thì gán lại data mới
    
    // const getData = async () => {
    //   const result = await fetchData(customers);
    //   setData(result);
    // }
    // getData();
  };

  return (
    <>
      <div class="bg-white w-full max-w-5xl rounded shadow-lg overflow-hidden flex flex-col max-h-[90vh] z-30 overflow-y-auto">
        {/* <!-- Header --> */}
        <div class="flex justify-between items-center px-5 py-3 bg-gray-100 border-b border-gray-200 sticky top-0">
          <h2 class="font-bold text-gray-800 text-lg">Thêm mới khách hàng</h2>
          <button class="text-gray-400 hover:text-gray-600" onClick={openForm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-4">
          {/* <!-- Body (Scrollable) --> */}
          <div class="flex-1 overflow-y-auto py-2">
            {/* <!-- Section 1: Basic Info --> */}
            <h3 class="text-gray-600 font-bold uppercase text-sm mb-4">
              Thông tin cơ bản
            </h3>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              {/* <!-- Row 1 --> */}
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Mã khách hàng <span class="text-red-500 focus:border-red-500">*</span>
                </label>
                <input
                  defaultValue={edittedData ? edittedData.customer_id : ""}
                  type="text"
                  placeholder="DL - 1203480990"
                  class={
                    "w-full md:w-2/3 border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 " +
                    (errors.customer_id ? "border-red-500 focus:border-red-500" : " border-gray-300")
                  }
                  {...register("customer_id", { required: "Bắt buộc" })}
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Tên khách hàng <span class="text-red-500">*</span>
                </label>
                <input
                  defaultValue={edittedData ? edittedData.customer_name : ""}
                  type="text"
                  class={
                    "w-full md:w-2/3 border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 " +
                    (errors.customer_name
                      ? "border-red-500 focus:border-red-500"
                      : " border-gray-300")
                  }
                  {...register("customer_name", { required: "Bắt buộc" })}
                />
              </div>

              {/* md:w-2/3 */}
              {/* <!-- Row 2 --> */}
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  CCCD
                </label>
                <input
                  value={edittedData ? edittedData.customer_citizenId : ""}
                  type="text"
                  class="w-full md:w-2/3 border-gray-300 border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 "
                  {...register("customer_citizenId")}
                />
              </div>
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Điện thoại <span class="text-red-500">*</span>
                </label>
                <input
                  defaultValue={edittedData ? edittedData.customer_phoneNumber : ""}
                  type="text"
                  class={
                    "w-full md:w-2/3 border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-5000 " +
                    (errors.customer_phoneNumber
                      ? "border-red-500 focus:border-red-500"
                      : " border-gray-300")
                  }
                  {...register("customer_phoneNumber", {
                    required: "Bắt buộc",
                  })}
                />
              </div>

              {/* <!-- Row 3 --> */}
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Số nợ tối đa
                </label>
                <input
                  value={edittedData ? edittedData.customer_maxDebt : ""}
                  type="text"
                  class="w-full md:w-2/3 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  {...register("customer_maxDebt")}
                />
              </div>
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Hạn nợ (ngày)
                </label>
                <input
                  value={edittedData ? edittedData.customer_debtTerm : ""}
                  type="text"
                  class="w-full md:w-2/3 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  {...register("customer_debtTerm")}
                />
              </div>

              {/* <!-- Row 4: Address (Full Width Logic) --> */}
              <div class="col-span-1 lg:col-span-2 flex flex-col md:flex-row md:items-start">
                <label class="w-full md:w-[16.66%] text-sm text-gray-700 mb-1 md:mt-2">
                  Địa chỉ
                </label>
                <div class="w-full md:w-[83.34%] space-y-2">
                  <div class="grid grid-cols-3 gap-2">
                    <select 
                    defaultValue={edittedData ? edittedData.customer_addressCity : ""}
                      {...register("customer_addressCity")}
                      class="border border-gray-300 rounded px-2 py-2 text-sm text-black bg-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Tỉnh thành</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="TP. Hồ Chí Minh">Hồ Chí Minh</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                    </select>
                    <select
                    defaultValue={edittedData ? edittedData.customer_addressDistrict : ""}
                      {...register("customer_addressDistrict")}
                      class="border border-gray-300 rounded px-2 py-2 text-sm text-black bg-white focus:outline-none focus:border-blue-500"
                    >
                      <option>Quận/Huyện</option>
                    </select>
                    <select
                     defaultValue={edittedData ? edittedData.customer_addressWard : ""}
                      {...register("customer_addressWard")}
                      class="border border-gray-300 rounded px-2 py-2 text-sm text-black bg-white focus:outline-none focus:border-blue-500"
                    >
                      <option>Phường/Xã</option>
                    </select>
                  </div>
                  <input
                  value={edittedData ? edittedData.customer_addressDetail : ""}
                    type="text"
                    placeholder="Số nhà, đường phố"
                    class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    {...register("customer_addressDetail")}
                  />
                </div>
              </div>

              {/* <!-- Row 5 --> */}
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Email
                </label>
                <input
                  value={edittedData ? edittedData.customer_email : ""}
                  type="text"
                  class="w-full md:w-2/3 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  {...register("customer_email")}
                />
              </div>
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Ngày sinh
                </label>
                <div class="relative w-full md:w-2/3">
                  <input
                    value={edittedData ? edittedData.customer_birthday : ""}
                    type="text"
                    placeholder="DD / MM / YYYY"
                    class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    {...register("customer_birthday")}
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Row 6: Gender --> */}
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Giới tính
                </label>
                <div class="w-full md:w-2/3 flex items-center space-x-6">
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      value="male"
                      class="form-radio text-blue-600 h-4 w-4 border-gray-300"
                      {...register("customer_gender")}
                    />
                    <span class="ml-2 text-sm text-gray-700">Nam</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      value="female"
                      class="form-radio text-blue-600 h-4 w-4 border-gray-300"
                      {...register("customer_gender")}
                    />
                    <span class="ml-2 text-sm text-gray-700">Nữ</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      value="unknown"
                      class="form-radio text-blue-800 h-4 w-4 border-gray-300"
                      {...register("customer_gender")}
                    />
                    <span class="ml-2 text-sm text-gray-700">
                      Không xác định
                    </span>
                  </label>
                </div>
              </div>
              {/* <!-- Empty cell for alignment if needed, or just flow naturally --> */}
              <div class="hidden lg:block"></div>

              {/* <!-- Row 7: Status --> */}
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Trạng thái
                </label>
                <div class="w-full md:w-2/3 flex items-center space-x-6">
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      value="Đang theo dõi"
                      class="form-radio text-blue-600 h-4 w-4 border-gray-300"
                      {...register("customer_status")}
                    />
                    <span class="ml-2 text-sm text-gray-700">
                      Đang theo dõi
                    </span>
                  </label>
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      value="Ngừng theo dõi"
                      class="form-radio text-blue-600 h-4 w-4 border-gray-300"
                      {...register("customer_status")}
                    />
                    <span class="ml-2 text-sm text-gray-700">
                      Ngừng theo dõi
                    </span>
                  </label>
                </div>
              </div>

              {/* <!-- Empty cell for alignment if needed, or just flow naturally --> */}
              <div class="hidden lg:block"></div>

              {/* <!-- Row 7: customer --> */}
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Nhóm khách hàng
                </label>
                <div class="w-full md:w-2/3 flex">
                  <div class="relative w-full">
                    <select
                    defaultValue={edittedData ? edittedData.customer_group : ""}
                      {...register("customer_group")}
                      class="w-full border border-gray-300 rounded-l px-3 py-2 text-sm appearance-none focus:outline-none focus:border-blue-500 bg-white text-gray-500"
                    >
                      <option>Nhập để tìm kiếm</option>
                      <option value="Khách lâu năm">Khách lâu năm</option>
                      <option value="Khách mới">Khách mới</option>
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
                  </div>
                  <button
                    type="button"
                    class="bg-gray-100 border border-l-0 border-gray-300 rounded-r px-3 text-blue-800 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Empty cell for alignment if needed, or just flow naturally --> */}
              <div class="hidden lg:block"></div>

              {/* <!-- Row 7: Staff --> */}
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Nhân viên phụ trách
                </label>
                <div class="relative w-full md:w-2/3">
                  <select
                  defaultValue={edittedData ? edittedData.customer_staff : ""}
                    {...register("customer_staff")}
                    class="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none focus:outline-none focus:border-blue-500 bg-white"
                  >
                    <option></option>
                    <option value="saler24h">Bán hàng 24h</option>
                    <option value="telesaler">Telesale</option>
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
                </div>
              </div>

              <div class="hidden lg:block"></div>

              {/* <!-- Row 8: Note (Full Width) --> */}
              <div class="col-span-1 lg:col-span-2 flex flex-col md:flex-row md:items-start">
                <label class="w-full md:w-[16.66%] text-sm text-gray-700 mb-1 md:mt-2">
                  Ghi chú
                </label>
                <textarea
                  {...register("customer_note")}
                  value={edittedData ? edittedData.customer_note : ""}
                  class="w-full md:w-[83.34%] border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 h-24"
                ></textarea>
              </div>

              {/* <!-- Row 9: Checkbox --> */}
              <div class="col-span-1 lg:col-span-2 flex flex-col md:flex-row md:items-center">
                <div class="w-full md:w-[16.66%]"></div>
                <label class="inline-flex items-center">
                  <input
                    defaultChecked={
                      edittedData ? edittedData.customer_isSupplier : false
                    }
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
                    {...register("customer_isSupplier")}
                  />
                  <span class="ml-2 text-sm text-gray-700">
                    Là nhà cung cấp
                  </span>
                </label>
              </div>
            </div>

            {/* <!-- Section 3: Company Info --> */}
            <h3 class="text-gray-600 font-bold uppercase text-sm mb-4 mt-6">
              Thông tin công ty
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Tên công ty
                </label>
                <input
                  value={edittedData ? edittedData.customer_companyName : ""}
                  type="text"
                  class="w-full md:w-2/3 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  {...register("customer_companyName")}
                />
              </div>
              <div class="flex flex-col md:flex-row md:items-center">
                <label class="w-full md:w-1/3 text-sm text-gray-700 mb-1 md:mb-0">
                  Mã số thuế
                </label>
                <input
                  value={edittedData ? edittedData.customer_taxId : ""}
                  type="text"
                  class="w-full md:w-2/3 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  {...register("customer_taxId")}
                />
              </div>
            </div>
          </div>

          {/* <!-- Footer --> */}
          <div class="flex flex-col md:flex-row justify-between items-center px-6 border-t border-gray-200 bg-white py-4">
            <button class="flex items-center text-blue-900 font-bold text-sm hover:underline mb-3 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
              Trợ giúp
            </button>

            <div class="flex space-x-3">
              <button
                class="flex items-center bg-[#313a66] text-white px-4 py-2 rounded shadow hover:bg-blue-900 text-sm font-medium"
                type="submit"
                disabled={loading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                </svg>
                Lưu
              </button>
              <button
                class="flex items-center text-[#313a66] px-4 py-2 rounded hover:bg-gray-300 text-sm font-medium"
                type="reset"
                disabled={loading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Hủy bỏ
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormCustomer;
