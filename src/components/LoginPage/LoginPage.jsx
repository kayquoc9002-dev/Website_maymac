import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Catalog/Sidebar/Sidebar";
// Helper functions nên để ngoài Component để tránh khởi tạo lại khi render
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const mockLoginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@maymac.com" && password === "123456") {
        resolve({
          token: "fake-jwt-token-111",
          user: { name: "Anh Quản Lý", role: "admin" },
        });
      } else if (email === "staff@maymac.com" && password === "123456") {
        resolve({
          token: "fake-jwt-token-222",
          user: { name: "Chị Nhân Viên", role: "staff" },
        });
      } else if (email === "customer@maymac.com" && password === "123456") {
        resolve({
          token: "fake-jwt-token-333",
          user: { name: "Khách Hàng Thân thiết", role: "customer" },
        });
      } else {
        reject("Sai tài khoản hoặc mật khẩu!");
      }
    }, 1500); // Giả lập mạng chậm 1.5s
  });
};

// function LoginPage() {
//   const navigate = useNavigate(); // Hook dùng để chuyển trang

//   const [dataUser, setDateUser] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // State mới để quản lý lỗi cho từng trường
//   const [errors, setErrors] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//   });

//   const updateInforUser = (e) => {
//     const { name, value } = e.target;
//     setDateUser({ ...dataUser, [name]: value });

//     // Khi người dùng gõ lại, mình nên xóa lỗi của ô đó đi
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }
//   };

//   // Hàm kiểm tra lỗi cho từng ô khi người dùng rời chuột (Blur)
//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     let errorMsg = "";

//     if (name === "fullname") {
//       if (!/^\p{L}+( \p{L}+)*$/u.test(value)) {
//         errorMsg = "Họ tên chỉ được chứa chữ cái và khoảng trắng";
//       }
//     }

//     if (name === "email") {
//       if (!validateEmail(value)) {
//         errorMsg = "Email không đúng định dạng (vd: abc@gmail.com)";
//       }
//     }

//     if (name === "password") {
//       if (value.length < 6) {
//         errorMsg = "Mật khẩu phải từ 6 ký tự trở lên";
//       }
//     }

//     setErrors((prev) => ({ ...prev, [name]: errorMsg }));
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();

//     // Kiểm tra lại lần cuối trước khi gửi
//     if (
//       !dataUser.fullname ||
//       !dataUser.email ||
//       !dataUser.password ||
//       errors.fullname ||
//       errors.email ||
//       errors.password
//     ) {
//       alert("Vui lòng kiểm tra lại thông tin!");
//       return;
//     }

//     console.log("Dữ liệu hợp lệ, gửi lên server:", dataUser);
//     setLoading(true);
//     try {
//       const result = await mockLoginApi(dataUser.email, dataUser.password);
//       localStorage.setItem("userName", result.user.name);
//       localStorage.setItem("userRole", result.user.role);
//       localStorage.setItem("login", "true");
//     } catch (error) {
//       alert("Error: " + error);
//     } finally {
//       setLoading(false);
//       setDateUser({ fullname: "", email: "", password: "" });
//       const userRole = localStorage.getItem("userRole");
//       //Chuyển hướng dựa trên role
//       if (userRole === "admin") {
//         navigate("/admin");
//       } else if (userRole === "staff") {
//         navigate("/orders");
//       } else {
//         navigate("/shop");
//       }
//     }
//     // Xóa form sau khi thành công
//   }

//   return (
//     <>
//       <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-mdontainer">
//         <form onSubmit={handleSubmit} noValidate>
//           <h2 className="text-2xl font-semibold mb-6 text-center">
//             Đăng ký thành viên
//           </h2>

//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Họ và tên"
//               name="fullname"
//               value={dataUser.fullname}
//               onChange={updateInforUser}
//               onBlur={handleBlur}
//               className={` w-[250px] p-2.5 border rounded-md focus:outline-none ${
//                 errors.fullname ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.fullname && (
//               <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={dataUser.email}
//               onChange={updateInforUser}
//               onBlur={handleBlur}
//               className={`block w-[250px] p-2.5 border rounded-md focus:outline-none ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Mật khẩu"
//               name="password"
//               value={dataUser.password}
//               onChange={updateInforUser}
//               onBlur={handleBlur}
//               className={`block w-[250px] p-2.5 border rounded-md focus:outline-none ${
//                 errors.password ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.password && (
//               <p className="text-red-500 text-xs mt-1">{errors.password}</p>
//             )}
//           </div>

//           <button type="submit" disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
//           >
//             {loading ? "Đang gửi dữ liệu" : "Gửi thông tin"}
//           </button>
//         </form>

//         <style jsx>{`
//           .form-group {
//             margin-bottom: 15px;
//           }
//           .input-error {
//             border: 1px solid red;
//             outline: none;
//           }
//           .error-msg {
//             color: red;
//             font-size: 12px;
//             margin: 5px 0 0 0;
//           }
//           input {
//             display: block;
//             width: 250px;
//             padding: 10px;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// }

// export default LoginPage;


function LoginPage(){

  return (
    <>
      <Sidebar />
    </>
  )
}