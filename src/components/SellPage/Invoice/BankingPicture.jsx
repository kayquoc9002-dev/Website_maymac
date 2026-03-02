import React from "react";
import { useState } from "react";
function BankingPicture() {
  const [previews, setPreviews] = useState("");
  const handleMultipleFiles = async (e) => {
    const files = Array.from(e.target.files); // Chuyển FileList thành Array

    if (files.length == 1) {
      // Tạo danh sách URL xem trước
      const imageUrls = files.map((file) => URL.createObjectURL(file));

      // Cập nhật vào state để hiển thị lên màn hình
      setPreviews(imageUrls[0]);

      //   try {
      //     const result = await uploadMultipleImages(files);
      //     good_urls.current = [...good_urls.current, ...result];
      //   } catch (error) {
      //     console.log("Lỗi!", error);
      //   } finally {
      //     // Mẹo tối ưu: Reset giá trị input để có thể chọn lại cùng 1 file nếu cần
      //     e.target.value = "";
      //   }
    } else {
      alert("Bạn chỉ được tải lên 1 ảnh làm minh chứng chuyển khoản");
    }
  };
  return (
    <div class="mb-6 flex justify-center flex-col items-center">
      <div class="flex items-start">
        {" "}
        <input
          class=""
          type="file"
          id={"fileInput"}
          hidden
          accept="image/*"
          multiple
          onChange={handleMultipleFiles}
        />
        <label
          for="fileInput"
          class="w-60 h-60 p-2 border-2 border-dashed border-blue-300 bg-blue-50 rounded flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-100 transition-colors relative"
        >
          <div className="overflow-hidden flex flex-wrap justify-center">
            {previews ? (
              <img src={previews} style={{ width: "100%", margin: "5px" }} />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <svg
                  class="w-8 h-8 text-gray-400 mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span class="text-xs font-medium text-gray-600">
                  Ảnh chuyển khoản
                </span>
                <div class="text-sm italic text-gray-400 w-48 mr-4">
                  Định dạng(.jpg, .jpeg, .png, .gif) và dung lượng {"<"}{" "}
                  2MB{" "}
                </div>
                <div class="mt-2 bg-[#2c3e50] text-white px-2 py-0.5 rounded text-xs">
                  ...
                </div>
              </div>
            )}
          </div>
          {/* <span class="text-xs text-gray-500">{previews.length}/10</span> */}
        </label>
      </div>
    </div>
  );
}

export default BankingPicture;
