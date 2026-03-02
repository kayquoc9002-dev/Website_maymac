import React from "react";
import { useState } from "react";
import { uploadMultipleImages } from "../../../../Helpers/functionsSupabase";
function GoodAvatar({ good_urls }) {
  const [previews, setPreviews] = useState([]);
  const handleMultipleFiles = async (e) => {
    const files = Array.from(e.target.files); // Chuyển FileList thành Array

    if (previews.length + files.length > 10) {
      alert("Bạn đã vượt só lượng ảnh được tải (10)");
    } else {
      // Tạo danh sách URL xem trước
      const imageUrls = files.map((file) => URL.createObjectURL(file));

      // Cập nhật vào state để hiển thị lên màn hình
      setPreviews([...previews, ...imageUrls]);

      // setAllUrl();
      try {
        const result = await uploadMultipleImages(files);
        good_urls.current = [...good_urls.current, ...result];
      } catch (error) {
        console.log("Lỗi!", error);
      } finally {
        // Mẹo tối ưu: Reset giá trị input để có thể chọn lại cùng 1 file nếu cần
        e.target.value = "";
      }
    }
  };

  return (
    <>
      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">
          Ảnh hàng hóa hiển thị trên sàn bán
        </label>
        <div class="flex items-start">
          <div class="text-sm italic text-gray-400 w-48 mr-4">
            Định dạng(.jpg, .jpeg, .png, .gif) và dung lượng {"<"} 2MB{" "}
          </div>{" "}
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
            class="w-120 h-60 p-2 border-2 border-dashed border-blue-300 bg-blue-50 rounded flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-100 transition-colors relative"
          >
            <div className="overflow-hidden flex flex-wrap justify-center">
              {previews.length ? (
                previews.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    style={{ width: "70px", margin: "5px" }}
                  />
                ))
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
                    Thêm hình ảnh
                  </span>
                </div>
              )}
            </div>
            <span class="text-xs text-gray-500">{previews.length}/10</span>
            <div class="mt-2 bg-[#2c3e50] text-white px-2 py-0.5 rounded text-xs">
              ...
            </div>
          </label>
        </div>
      </div>
    </>
  );
}

export default GoodAvatar;
