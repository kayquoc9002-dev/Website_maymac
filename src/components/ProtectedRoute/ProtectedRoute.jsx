import { Navigate } from 'react-router-dom';

// allowedRoles là danh sách các quyền được phép vào trang này (ví dụ: ['admin', 'staff'])
const ProtectedRoute = ({ children, allowedRoles }) => {
  const loginStatus = localStorage.getItem("login") === "true";
  const userRole = localStorage.getItem("userRole"); // Lấy role từ kho

  // 1. Nếu chưa đăng nhập -> Bắt quay về trang login
  if (!loginStatus) {
    return <Navigate to="/" replace />;
  }

  // 2. Nếu đã đăng nhập nhưng quyền không nằm trong danh sách cho phép
  // Ví dụ: Khách hàng cố tình vào trang Admin
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>403 - Bạn không có quyền vào khu vực này!</h1>
        <p>Khu vực này chỉ dành cho: {allowedRoles.join(", ")}</p>
        <button onClick={() => window.location.href = '/'}>Quay lại</button>
      </div>
    );
  }

  console.log("Thành công");
  // 3. Nếu mọi thứ OK -> Cho xem nội dung (children)
  return children;
};

export default ProtectedRoute;