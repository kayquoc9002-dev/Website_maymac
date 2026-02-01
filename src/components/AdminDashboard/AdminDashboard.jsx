import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const navigate = useNavigate();  
  function handleLogout() {
    localStorage.clear();
    navigate('/');
  }
  return (
    <div>
      <h2>Chào Sếp! Đây là doanh thu xưởng may tháng này.</h2>
      <button onClick={handleLogout}> Đăng xuất</button>
    </div>
  );
};
export default AdminDashboard;
