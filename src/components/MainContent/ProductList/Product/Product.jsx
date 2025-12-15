function Product() {
  return (
    <>
      <div className="bg-white p-2 rounded shadow hover:shadow-lg transition">
        <img
          src="https://picsum.photos/id/30/200/200"
          className="w-full h-32 object-cover rounded mb-2"
        />
        <h4 className="text-xs text-gray-600 mb-1 line-clamp-2">
          Áo Thun Pope Thoáng Mát Seveny Seven 01 Trắng
        </h4>
        <div className="flex justify-between items-end">
          <span className="text-[10px] text-gray-400">1m50</span>
          <span className="text-xs font-bold">149.150 VND</span>
        </div>
      </div>
    </>
  );
}
export default Product;
