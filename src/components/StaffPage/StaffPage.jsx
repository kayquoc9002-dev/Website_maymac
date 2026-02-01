import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const navigate = useNavigate();  
  function handleLogout() {
    localStorage.clear();
    navigate('/');
  }
  return (
    <div>
      <h2>Danh sách 50 đơn hàng cần in ngay hôm nay!</h2>
      <button onClick={handleLogout}> Đăng xuất</button>
    </div>
  );
};
export default AdminDashboard;
