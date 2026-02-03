export  const formatCurrency = (val) => {
    if (!val) return "";
    return new Intl.NumberFormat("vi-VN").format(val) + " ₫";
  };