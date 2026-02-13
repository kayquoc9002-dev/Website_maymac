import React from 'react'

function DetailGood({openDetail}) {
  return (
    <>
        <div class="rounded w-full max-w-[1200px] bg-white shadow-xl border border-gray-400 flex flex-col z-10 max-h-[90vh]">
            <div class="rounded-t flex justify-between items-center px-5 py-3 bg-gray-100 border-b border-gray-200 sticky top-0 mb-2">
          <span class="font-bold text-gray-800 text-lg">Phiếu xuất kho</span>
          <div class="flex space-x-2">
            <button class="text-gray-500 hover:text-gray-700">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
            <button
              class="text-gray-500 hover:text-gray-700"
              onClick={openDetail}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        </div>
    </>
  )
}

export default DetailGood
