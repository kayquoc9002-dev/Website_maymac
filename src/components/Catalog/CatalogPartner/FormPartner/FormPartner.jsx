import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { partnerService } from "../../../../Helpers/functionsSupabase";
function FormPartner({openForm, dataPartner, edittedData, setData}) {

  const [loading, setLoading] = useState(false);
      const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    
      const onSubmit = async (data) => {
        console.log(data);
        // console.log([...dataSupplier, data]);
        
        setLoading(true);
        // // await postData(data, setLoading, customers);
        if(Object.keys(edittedData).length != 0){
          try{
            console.log("Chỉnh sửa")
          const result = await partnerService.edit(edittedData.id, data);
          console.log(result);
          setData(dataPartner.map(item => {
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
              console.log("Thêm")
            console.log([...dataPartner, data]);
            const result = await partnerService.add(data);
            console.log(result);
  
            //Gán lại data ở Frontend để đỡ phải gọi lại BE
            setData([...dataPartner, data]);
          } catch(error){
            console.log("Lỗi!", error);
          }
        }
        reset();
        setLoading(false);
      };
  return (
    <>
      {/* <div class="bg-gray-50 min-h-screen"> */}
      {/* <div class="font-sans text-sm text-gray-700 bg-gray-50 min-h-screen flex items-center justify-center p-4">
  <!-- Modal Container -->
  <div class="w-full max-w-5xl bg-white rounded shadow-lg overflow-hidden border border-gray-300"> */}

      <div class="bg-white w-full max-w-5xl rounded shadow-lg overflow-hidden flex flex-col max-h-[90vh] z-30 overflow-y-auto">
        {/* <!-- Header --> */}
        <div class="flex justify-between items-center px-4 py-3 bg-gray-100 border-b border-gray-200">
          <h2 class="font-bold text-gray-800 text-base">
            Thêm mới đơn vị gia công
          </h2>
          <button class="text-gray-400 hover:text-gray-600" onClick={openForm}>
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        {/* <!-- Body --> */}
        <div class="p-6 overflow-y-auto max-h-[80vh]">
          {/* <!-- Radio Group --> */}
          <div class="flex items-center gap-6 mb-6">
            <label class="flex items-center gap-2 cursor-pointer">
              <div class="relative flex items-center justify-center">
                <input
                  type="radio"
                  value="Tổ chức"
                  {...register("partner_type", {required: "Bắt buộc"})}
                  class="peer appearance-none w-5 h-5 border-2 border-blue-900 rounded-full checked:border-blue-900"
                  defaultChecked={true}
                />
                <div class="absolute w-2.5 h-2.5 bg-blue-900 rounded-full hidden peer-checked:block"></div>
              </div>
              <span class="text-gray-900">Tổ chức</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <div class="relative flex items-center justify-center">
                <input
                  type="radio"
                  value="Cá nhân"
                  {...register("partner_type", {required: "Bắt buộc"})}
                  class="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-blue-900"
                />
                <div class="absolute w-2.5 h-2.5 bg-blue-900 rounded-full hidden peer-checked:block"></div>
              </div>
              <span class="text-gray-900">Cá nhân</span>
            </label>
          </div>

          {/* <!-- Section 1: Basic Info --> */}
          <h3 class="font-bold text-gray-500 uppercase mb-4">
            THÔNG TIN CƠ BẢN
          </h3>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 mb-6">
            {/* <!-- Row 1 --> */}
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">
                Mã đơn vị <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                  {...register("partner_id", {required: "Bắt buộc"})}
                class={"flex-1 border border-blue-400 rounded h-9 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 " + (errors.partner_id
                      ? "border-red-500 focus:ring-red-500"
                      : " border-gray-300")}
              />
            </div>
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">
                Tên đơn vị <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                  {...register("partner_name", {required: "Bắt buộc"})}
                class={"flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500 " + (errors.partner_name
                      ? "border-red-500 focus:ring-red-500"
                      : " border-gray-300")}
              />
            </div>

            {/* <!-- Row 2: Address (Full Width) --> */}
            <div class="flex items-center lg:col-span-2">
              <label class="w-36 flex-shrink-0">Địa chỉ <span class="text-red-500">*</span></label>
              <input
                type="text"
                  {...register("partner_address", {required: "Bắt buộc"})}
                class={"flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500 " + (errors.partner_address
                      ? "border-red-500 focus:ring-red-500"
                      : " border-gray-300")}
              />
            </div>

            {/* <!-- Row 3 --> */}
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">Mã số thuế</label>
              <input
                type="text"
                 {...register("partner_taxCode")}
                class="flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">Điện thoại <span class="text-red-500">*</span></label>
              <input
                type="text"
                {...register("partner_phoneNumber", {required: "Bắt buộc"})}
                class={"flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500 " + (errors.partner_address
                      ? "border-red-500 focus:ring-red-500"
                      : " border-gray-300")}
              />
            </div>

            {/* <!-- Row 5 --> */}
            
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">Ngân hàng</label>
              <input
                type="text"
                {...register("partner_nameBank")}
                class="flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* <!-- Row 6 --> */}
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">Số tài khoản</label>
              <input
                type="text"
                {...register("partner_bankAccNumber")}
                class="flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* <!-- Row 4 --> */}
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">Nhóm ĐV</label>
              <div class="flex-1 flex">
                <div class="relative w-full">
                  <select {...register("partner_group")} class="w-full border border-gray-300 rounded-l h-9 px-3 appearance-none bg-white focus:outline-none focus:border-blue-500 text-gray-500">
                    <option>Nhập để tìm kiếm</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <button class="w-9 h-9 border border-l-0 border-gray-300 rounded-r flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-blue-900">
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
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div></div>

            

            {/* <!-- Checkbox Row --> */}
            <div class="flex items-center lg:col-span-2">
              <div class="w-36"></div>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("partner_isCustomer")}
                  class="w-4 h-4 border-gray-300 rounded text-blue-900 focus:ring-blue-900"
                />
                <span>Là khách hàng</span>
              </label>
            </div>
          </div>

          {/* <!-- Section 2: Contact Info --> */}
          <h3 class="font-bold text-gray-500 uppercase mb-4">
            THÔNG TIN NGƯỜI LIÊN HỆ
          </h3>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            {/* <!-- Row 1 --> */}
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">Họ và tên</label>
              <div class="flex-1 flex gap-2">
                <div class="relative w-24">
                  <select {...register("partner_contactGender")} class="w-full border border-gray-300 rounded h-9 px-2 appearance-none bg-white focus:outline-none focus:border-blue-500">
                    <option>Ông</option>
                    <option>Bà</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  class="flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">Email</label>
              <input
                type="text"
                {...register("partner_contactEmail")}
                class="flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* <!-- Row 2 --> */}
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">Điện thoại</label>
              <input
                type="text"
                {...register("partner_contactPhoneNumber")}
                class="flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="flex items-center">
              <label class="w-36 flex-shrink-0">Chức danh</label>
              <input
                type="text"
                {...register("partner_contactPosition")}
                class="flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* <!-- Row 3: Address (Full Width) --> */}
            <div class="flex items-center lg:col-span-2">
              <label class="w-36 flex-shrink-0">Địa chỉ</label>
              <input
                type="text"
                {...register("partner_contactAddress")}
                class="flex-1 border border-gray-300 rounded h-9 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div class="flex justify-between items-center px-6 py-4 border-t border-gray-200 bg-white">
          <a
            href="#"
            class="flex items-center gap-2 text-blue-900 font-semibold hover:underline"
          >
            <div class="bg-blue-900 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
              ?
            </div>
            Trợ giúp
          </a>

          <div class="flex items-center gap-3">
            <button type="submit" class="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
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
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
              <span class="font-semibold">Lưu và thêm mới</span>
            </button>

            <button type="reset" class="flex items-center gap-2 text-blue-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span class="font-semibold">Hủy bỏ</span>
            </button>
          </div>
        </div>
        </form>
      </div>
      
    </>
  );
}

export default FormPartner;
