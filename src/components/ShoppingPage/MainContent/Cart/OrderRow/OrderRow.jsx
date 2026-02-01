function OrderRow({keyFabric, id, color, quantity, fabricWidth, price, handleDelete}) {
    
  return (
    <>
      <tr className="group hover:bg-gray-50" keyFabric={keyFabric} key={id}>
        <td className="py-2 text-left">{color}</td>
        <td className="py-2">{quantity}</td>
        <td className="py-2">{fabricWidth}</td>
        <td className="py-2">{new Intl.NumberFormat('vi-VN').format(price)}</td>
        <td className="py-2">{new Intl.NumberFormat('vi-VN').format(price*quantity)}</td>
        <td className="py-2 flex justify-center gap-2">
          <button className="text-blue-500 border border-blue-500 rounded p-0.5 hover:bg-blue-200">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          </button>
          <button className="text-red-500 border border-red-500 rounded p-0.5 hover:bg-red-200" onClick={() => {handleDelete(keyFabric, id)}}>
            <svg
              className="w-4 h-4"
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
          </button>
        </td>
      </tr>
    </>
  );
}
export default OrderRow;
