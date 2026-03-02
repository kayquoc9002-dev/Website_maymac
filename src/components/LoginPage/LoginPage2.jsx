import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const mockLoginApi = (email, password) => {
  return new Promise<any>((resolve, reject) => {
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
    }, 1500);
  });
};

function LoginPage2() {
  const navigate = useNavigate();

  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const updateInforUser = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMsg = "";

    if (name === "email" && !validateEmail(value)) {
      errorMsg = "Email không đúng định dạng";
    }

    if (name === "password" && value.length < 6) {
      errorMsg = "Mật khẩu phải từ 6 ký tự trở lên";
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !dataUser.email ||
      !dataUser.password ||
      errors.email ||
      errors.password
    ) {
      alert("Vui lòng kiểm tra lại thông tin!");
      return;
    }

    setLoading(true);
    try {
      const result = await mockLoginApi(
        dataUser.email,
        dataUser.password
      );

      localStorage.setItem("userName", result.user.name);
      localStorage.setItem("userRole", result.user.role);
      localStorage.setItem("login", "true");

      if (result.user.role === "admin") navigate("/admin");
      else if (result.user.role === "staff") navigate("/orders");
      else navigate("/shop");

    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Đăng nhập hệ thống
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={dataUser.email}
              onChange={updateInforUser}
              onBlur={handleBlur}
              className={`w-full p-3 rounded-lg border focus:outline-none transition ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Mật khẩu"
              name="password"
              value={dataUser.password}
              onChange={updateInforUser}
              onBlur={handleBlur}
              className={`w-full p-3 rounded-lg border focus:outline-none transition ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage2;