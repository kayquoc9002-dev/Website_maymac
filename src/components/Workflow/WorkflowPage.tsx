import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MarkerType,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  X,
  User,
  CheckSquare,
  Paperclip,
  Layout,
  Settings,
  Info,
  Maximize2,
} from "lucide-react";
import { db } from "./database"; // Đảm bảo em đã tạo file database.js anh đưa lúc trước

// --- 1. CUSTOM NODE DESIGN (Giao diện từng bước trong xưởng may/in) ---
const CustomNode = ({ data, selected }) => {
  return (
    <div
      className={`shadow-md rounded-sm bg-white border-2 min-w-[180px] overflow-hidden transition-all ${
        selected 
          ? "border-blue-600 ring-4 ring-blue-500/10" 
          : "border-gray-300 hover:border-blue-400"
      }`}
    >
      {/* Header của Node - Phân biệt điểm bắt đầu và các bước thực hiện */}
      <div className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider border-b ${
        data.isStart ? "bg-green-600 text-white" : "bg-gray-100 text-gray-500"
      }`}>
        {data.isStart ? "Điểm khởi đầu" : "Bước thực hiện"}
      </div>

      <div className="p-3 text-center bg-white">
        {/* Điểm nối bên trái (Target) */}
        <Handle
          type="target"
          position={Position.Left}
          className="!bg-blue-600 !w-2 !h-2 !border-none"
        />
        <div className="font-bold text-slate-800 text-sm leading-tight">
          {data.label}
        </div>
        {data.assignee && (
          <div className="mt-2 flex items-center justify-center gap-1 text-[10px] bg-blue-50 text-blue-700 py-0.5 px-2 rounded-full border border-blue-100 font-medium">
            <User size={10} /> {data.assignee}
          </div>
        )}
        {/* Điểm nối bên phải (Source) */}
        <Handle
          type="source"
          position={Position.Right}
          className="!bg-blue-600 !w-2 !h-2 !border-none"
        />
      </div>
    </div>
  );
};

const nodeTypes = { custom: CustomNode };

// --- 2. COMPONENT CHÍNH ---
export default function WorkflowBuilder({ onBack, workflowId }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [info, setInfo] = useState({ name: "", description: "" });
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [users, setUsers] = useState([]);

  // Khởi tạo dữ liệu từ Mock DB
  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const userData = await db.getUsers();
      const workflowData = workflowId ? await db.getWorkflowById(workflowId) : null;

      if (!isMounted) return;

      setUsers(userData);
      if (workflowData) {
        setInfo({
          name: workflowData.name,
          description: workflowData.description,
        });
        setNodes(workflowData.nodes);
        setEdges(workflowData.edges);
        setCurrentStep(2);
      } else {
        // Nếu tạo mới, mặc định có 1 node Bắt đầu
        setNodes([
          {
            id: "1",
            type: "custom",
            position: { x: 50, y: 150 },
            data: { label: "Bắt đầu quy trình", isStart: true },
          },
        ]);
      }
    };
    init();
    return () => { isMounted = false; };
  }, [workflowId]);

  // Lưu quy trình
  const handleSave = async () => {
    const payload = { ...info, nodes, edges };
    if (workflowId) {
      await db.updateWorkflow(workflowId, payload);
    } else {
      await db.createWorkflow(payload);
    }
    onBack();
  };

  // Các hàm xử lý sơ đồ (Flow handlers)
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' },
            type: "smoothstep",
            style: { stroke: '#2563eb', strokeWidth: 2 },
          },
          eds,
        ),
      ),
    []
  );

  // Cập nhật thông tin của Node đang chọn
  const updateSelectedNode = (key, value) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === selectedNodeId
          ? { ...n, data: { ...n.data, [key]: value } }
          : n,
      ),
    );
  };

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  return (
    <div className="bg-gray-50 flex flex-col h-screen font-sans text-sm overflow-hidden">
      
      {/* HEADER */}
      <header className="h-14 bg-white border-b border-gray-200 flex justify-between items-center px-4 shrink-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-700 rounded-sm flex items-center justify-center text-white">
            <Layout size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">
            {workflowId ? "Chỉnh sửa quy trình" : "Thiết lập quy trình mới"}
          </h2>
        </div>
        
        <div className="flex gap-3">
          <button onClick={onBack} className="px-6 py-2 border border-gray-300 rounded-sm text-gray-600 font-bold uppercase text-xs hover:bg-gray-50 transition">
            Hủy bỏ
          </button>
          <button onClick={handleSave} className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-sm shadow flex items-center font-bold uppercase text-xs transition">
            <Save size={16} className="mr-2" /> Lưu quy trình
          </button>
        </div>
      </header>

      {/* THÂN CHƯƠNG TRÌNH */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-300 p-2">
        
        {/* NAVIGATION TOOLBAR */}
        <div className="bg-[#283593] text-white flex items-center px-2 py-1.5 gap-1 shrink-0 shadow-md mb-2 rounded-sm">
          <button 
            onClick={() => setCurrentStep(1)}
            className={`flex items-center gap-2 px-4 py-1 rounded-sm transition text-xs font-bold uppercase ${currentStep === 1 ? 'bg-white text-blue-900' : 'hover:bg-white/10'}`}
          >
            <Info size={14} /> 1. Thông tin chung
          </button>
          <div className="w-px h-4 bg-white/20 mx-1"></div>
          <button 
            onClick={() => setCurrentStep(2)}
            disabled={!info.name}
            className={`flex items-center gap-2 px-4 py-1 rounded-sm transition text-xs font-bold uppercase ${currentStep === 2 ? 'bg-white text-blue-900' : 'hover:bg-white/10 opacity-50'}`}
          >
            <Maximize2 size={14} /> 2. Thiết kế luồng công việc
          </button>

          {currentStep === 2 && (
            <div className="ml-auto flex gap-2">
              <button
                onClick={() =>
                  setNodes((nds) =>
                    nds.concat({
                      id: Date.now().toString(),
                      type: "custom",
                      position: { x: 250, y: 250 },
                      data: { label: "Bước thực hiện mới" },
                    }),
                  )
                }
                className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white rounded-sm text-xs font-bold uppercase flex items-center"
              >
                <Plus size={14} className="mr-1" /> Thêm bước
              </button>
            </div>
          )}
        </div>

        {/* NỘI DUNG THAY ĐỔI THEO STEP */}
        <div className="flex-1 flex overflow-hidden gap-2">
          
          {currentStep === 1 ? (
            /* STEP 1: FORM NHẬP TÊN/MÔ TẢ */
            <div className="flex-1 bg-white border border-gray-300 shadow-sm rounded-sm flex items-center justify-center">
              <div className="w-full max-w-xl p-8">
                <div className="border-b border-gray-100 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wider">Thông tin định nghĩa</h3>
                  <p className="text-gray-400 text-xs italic">Vui lòng nhập các thông tin cơ bản về quy trình vận hành</p>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Tên quy trình</label>
                    <input
                      value={info.name}
                      onChange={(e) => setInfo({ ...info, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:border-blue-600 outline-none font-bold text-gray-800 bg-gray-50 transition"
                      placeholder="VD: QUY TRÌNH KIỂM KÊ KHO TỔNG"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Mô tả chi tiết</label>
                    <textarea
                      value={info.description}
                      onChange={(e) => setInfo({ ...info, description: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:border-blue-600 outline-none min-h-[120px] bg-gray-50"
                      placeholder="Mô tả mục đích và phạm vi áp dụng..."
                    />
                  </div>
                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={!info.name}
                    className="w-full py-4 bg-blue-700 text-white rounded-sm hover:bg-blue-800 disabled:opacity-50 font-bold uppercase tracking-widest text-sm shadow-lg transition"
                  >
                    Bắt đầu thiết kế luồng <ArrowLeft size={18} className="inline ml-2 rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* STEP 2: BẢN VẼ SƠ ĐỒ FLOW */
            <>
              <div className="flex-1 bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden relative">
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  onNodeClick={(_, n) => setSelectedNodeId(n.id)}
                  onPaneClick={() => setSelectedNodeId(null)}
                  nodeTypes={nodeTypes}
                  fitView
                >
                  <Controls className="bg-white border-gray-300 shadow-sm" />
                  <Background color="#cbd5e1" gap={20} size={1} />
                </ReactFlow>
              </div>

              {/* SIDEBAR BÊN PHẢI (CHỈNH SỬA NODE) */}
              <div
                className={`w-96 bg-white border border-gray-300 shadow-sm rounded-sm flex flex-col transition-all duration-300 ${
                  selectedNodeId ? "translate-x-0" : "translate-x-[110%] absolute right-2 h-[calc(100%-1rem)]"
                } md:relative md:translate-x-0`}
              >
                {selectedNode ? (
                  <div className="flex flex-col h-full overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
                      <h3 className="font-bold text-gray-700 uppercase flex items-center gap-2">
                        <Settings size={16} /> Chi tiết bước
                      </h3>
                      <button onClick={() => setSelectedNodeId(null)} className="text-gray-400 hover:text-red-500 transition">
                        <X size={20} />
                      </button>
                    </div>

                    <div className="p-5 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Tên bước công việc</label>
                        <input
                          value={selectedNode.data.label}
                          onChange={(e) => updateSelectedNode("label", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm font-bold focus:border-blue-600 outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Người chịu trách nhiệm</label>
                        <select
                          value={selectedNode.data.assignee || ""}
                          onChange={(e) => updateSelectedNode("assignee", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm bg-gray-50 outline-none focus:border-blue-600 font-medium"
                        >
                          <option value="">-- Chỉ định nhân sự --</option>
                          {users.map((u) => (
                            <option key={u.id} value={u.name}>
                              {u.name} ({u.role})
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Hướng dẫn nghiệp vụ</label>
                        <textarea
                          value={selectedNode.data.description || ""}
                          onChange={(e) => updateSelectedNode("description", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm min-h-[100px] outline-none focus:border-blue-600"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button className="py-2 border border-dashed border-gray-300 rounded-sm text-gray-500 text-[10px] font-bold uppercase hover:bg-gray-50 transition flex items-center justify-center gap-2">
                          <CheckSquare size={14} /> Checklist
                        </button>
                        <button className="py-2 border border-dashed border-gray-300 rounded-sm text-gray-500 text-[10px] font-bold uppercase hover:bg-gray-50 transition flex items-center justify-center gap-2">
                          <Paperclip size={14} /> Đính kèm
                        </button>
                      </div>
                    </div>

                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <button
                        onClick={() => {
                          setNodes((nds) => nds.filter((n) => n.id !== selectedNodeId));
                          setSelectedNodeId(null);
                        }}
                        className="w-full py-2 bg-red-50 text-red-600 border border-red-200 rounded-sm hover:bg-red-600 hover:text-white transition text-xs font-bold uppercase flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Trash2 size={14} /> Xóa bước khỏi luồng
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-gray-400">
                    <Settings size={48} className="mb-4 opacity-20" />
                    <p className="text-xs font-medium uppercase tracking-widest">Chọn một bước để thiết lập</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* CSS TRỰC TIẾP CHO CÁC HIỆU ỨNG ĐẶC BIỆT */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        
        /* Hiệu ứng đường kẻ chạy khi kết nối */
        .react-flow__edge-path { stroke-dasharray: 5; animation: dash 1s linear infinite; }
        @keyframes dash { from { stroke-dashoffset: 10; } to { stroke-dashoffset: 0; } }
      `}} />
    </div>
  );
}