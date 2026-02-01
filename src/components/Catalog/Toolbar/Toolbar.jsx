import React from "react";

function Toolbar({openForm, edittedId, handleEdit, handleDelete}) {
  return (
    <>
      <div class="bg-[#283593] text-white flex items-center px-2 py-1 gap-1 overflow-x-auto shrink-0">
        <button
          class="flex items-center gap-1 px-3 py-1.5 hover:bg-white/10 rounded transition"
          onClick={openForm}
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          <span>Thêm mới</span>
        </button>
        <div class="w-px h-5 bg-white/20 mx-1"></div>
        <button
          class="flex items-center gap-1 px-3 py-1.5 hover:bg-white/10 rounded transition"
          disabled={edittedId == ""}
          onClick={handleEdit}
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
          <span>Sửa</span>
        </button>
        <button
          class="flex items-center gap-1 px-3 py-1.5 hover:bg-white/10 rounded transition"
          onClick={handleDelete}
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
          <span>Xóa</span>
        </button>
        <div class="w-px h-5 bg-white/20 mx-1"></div>
      </div>
    </>
  );
}

export default Toolbar;
