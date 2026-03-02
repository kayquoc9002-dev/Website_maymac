export const formatCurrency = (val) => {
  if (!val) return "";
  return new Intl.NumberFormat("vi-VN").format(val) + " ₫";
};
export const formatCurrencyNoUnit = (val) => {
  val = JSON.stringify(val);
  if (!val) return ""; // bỏ ký tự không phải số
  const numeric = val.replace(/\D/g, ""); // format theo kiểu có dấu phẩy ngăn cách
  return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};