// src/lib/database.js

// Dữ liệu người dùng giả lập trong hệ thống may mặc
const MOCK_USERS = [
  { id: 1, name: "Nguyễn Văn A", role: "Quản lý xưởng" },
  { id: 2, name: "Trần Thị B", role: "Tổ trưởng tổ cắt" },
  { id: 3, name: "Lê Văn C", role: "Kỹ thuật in ấn" },
  { id: 4, name: "Phạm Minh D", role: "Kiểm kho" },
];

export const db = {
  // 1. Lấy danh sách nhân viên để đổ vào Select box
  getUsers: async () => {
    // Giả lập delay mạng 300ms
    await new Promise((resolve) => setTimeout(resolve, 300));
    return MOCK_USERS;
  },

  // 2. Lấy chi tiết một quy trình theo ID
  getWorkflowById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const workflows = JSON.parse(localStorage.getItem("workflows") || "[]");
    return workflows.find((w) => w.id === id) || null;
  },

  // 3. Tạo quy trình mới
  createWorkflow: async (payload) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const workflows = JSON.parse(localStorage.getItem("workflows") || "[]");
    
    const newWorkflow = {
      ...payload,
      id: Date.now(), // Tạo ID tạm bằng timestamp
      createdAt: new Date().toISOString(),
    };
    
    workflows.push(newWorkflow);
    localStorage.setItem("workflows", JSON.stringify(workflows));
    console.log("Đã tạo quy trình mới:", newWorkflow);
    return newWorkflow;
  },

  // 4. Cập nhật quy trình đã có
  updateWorkflow: async (id, payload) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    let workflows = JSON.parse(localStorage.getItem("workflows") || "[]");
    
    workflows = workflows.map((w) => 
      w.id === id ? { ...w, ...payload, updatedAt: new Date().toISOString() } : w
    );
    
    localStorage.setItem("workflows", JSON.stringify(workflows));
    console.log("Đã cập nhật quy trình ID:", id);
    return true;
  },

  // 5. Hàm phụ: Lấy tất cả quy trình (để em làm trang danh sách)
  getAllWorkflows: async () => {
    return JSON.parse(localStorage.getItem("workflows") || "[]");
  }
};