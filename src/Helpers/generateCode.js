function generateCode() {
  // Tạo 4 chữ cái ngẫu nhiên
  const letters = Array.from({ length: 4 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join('');

  // Tạo 8 chữ số ngẫu nhiên
  const numbers = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 10)
  ).join('');

  return `${letters}-${numbers}`;
}

// Ví dụ sử dụng
// console.log(generateCode()); // Ví dụ: "QWER-48291037"

export default generateCode;