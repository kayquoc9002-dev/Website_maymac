function generateShipmentCode(prefix = "SHIP") {
    // Lấy thời gian hiện tại 
    const now = new Date();
    // Tạo chuỗi yyyyMMddHHmmss 
    const timestamp = now.getFullYear().toString() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0') + String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0') + String(now.getSeconds()).padStart(2, '0');
    // Tạo số ngẫu nhiên 4 chữ số 
    const random = Math.floor(1000 + Math.random() * 9000);
    // Ghép thành mã lô hàng 
    return `${prefix}-${timestamp}-${random}`;
}
export default generateShipmentCode;