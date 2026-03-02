import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge, MarkerType } from "reactflow";
import "reactflow/dist/style.css";
import { Plus, Info, Maximize2, ArrowLeft } from "lucide-react";
import { db } from "./database";

import CustomNode from "./CustomNode";
import WorkflowHeader from "./WorkflowHeader";
import NodeSidebar from "./NodeSidebar";

const nodeTypes = { custom: CustomNode };

export default function WorkflowBuilder({ onBack, workflowId }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [info, setInfo] = useState({ name: "", description: "" });
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [users, setUsers] = useState([]);

  // Logic lấy dữ liệu
  useEffect(() => {
    const init = async () => {
      const userData = await db.getUsers();
      const workflowData = workflowId ? await db.getWorkflowById(workflowId) : null;
      setUsers(userData);
      if (workflowData) {
        setInfo({ name: workflowData.name, description: workflowData.description });
        setNodes(workflowData.nodes);
        setEdges(workflowData.edges);
        setCurrentStep(2);
      } else {
        setNodes([{ id: "1", type: "custom", position: { x: 50, y: 150 }, data: { label: "Bắt đầu quy trình", isStart: true } }]);
      }
    };
    init();
  }, [workflowId]);

  // Logic xử lý Flow
  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge({
    ...params,
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' },
    type: "smoothstep",
    style: { stroke: '#2563eb', strokeWidth: 2 },
  }, eds)), []);

  const handleSave = async () => {
    const payload = { ...info, nodes, edges };
    workflowId ? await db.updateWorkflow(workflowId, payload) : await db.createWorkflow(payload);
    onBack();
  };

  const updateSelectedNode = (key, value) => {
    setNodes((nds) => nds.map((n) => n.id === selectedNodeId ? { ...n, data: { ...n.data, [key]: value } } : n));
  };

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  return (
    <div className="bg-gray-50 flex flex-col h-screen font-sans text-sm overflow-hidden">
      <WorkflowHeader workflowId={workflowId} onBack={onBack} onSave={handleSave} />

      <div className="flex-1 flex flex-col overflow-hidden bg-gray-300 p-2">
        {/* Toolbar */}
        <div className="bg-[#283593] text-white flex items-center px-2 py-1.5 gap-1 shrink-0 shadow-md mb-2 rounded-sm">
          <button onClick={() => setCurrentStep(1)} className={`flex items-center gap-2 px-4 py-1 rounded-sm text-xs font-bold uppercase ${currentStep === 1 ? 'bg-white text-blue-900' : 'hover:bg-white/10'}`}>
            <Info size={14} /> 1. Thông tin chung
          </button>
          <button onClick={() => setCurrentStep(2)} disabled={!info.name} className={`flex items-center gap-2 px-4 py-1 rounded-sm text-xs font-bold uppercase ${currentStep === 2 ? 'bg-white text-blue-900' : 'hover:bg-white/10 opacity-50'}`}>
            <Maximize2 size={14} /> 2. Thiết kế luồng
          </button>
          {currentStep === 2 && (
            <button onClick={() => setNodes(nds => nds.concat({ id: Date.now().toString(), type: "custom", position: { x: 250, y: 250 }, data: { label: "Bước mới" } }))}
              className="ml-auto px-4 py-1 bg-green-600 hover:bg-green-700 text-white rounded-sm text-xs font-bold uppercase flex items-center">
              <Plus size={14} className="mr-1" /> Thêm bước
            </button>
          )}
        </div>

        <div className="flex-1 flex overflow-hidden gap-2">
          {currentStep === 1 ? (
            /* Bước 1: Form thông tin */
            <div className="flex-1 bg-white border border-gray-300 shadow-sm rounded-sm flex items-center justify-center">
              <div className="w-full max-w-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-6">Thông tin định nghĩa</h3>
                <div className="space-y-6">
                  <input value={info.name} onChange={e => setInfo({...info, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-sm font-bold bg-gray-50" placeholder="TÊN QUY TRÌNH" />
                  <textarea value={info.description} onChange={e => setInfo({...info, description: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-sm min-h-[120px] bg-gray-50" placeholder="Mô tả..." />
                  <button onClick={() => setCurrentStep(2)} disabled={!info.name} className="w-full py-4 bg-blue-700 text-white rounded-sm font-bold uppercase tracking-widest text-sm shadow-lg">
                    Bắt đầu thiết kế <ArrowLeft size={18} className="inline ml-2 rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Bước 2: Canvas vẽ Flow */
            <>
              <div className="flex-1 bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden relative">
                <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}
                  onNodeClick={(_, n) => setSelectedNodeId(n.id)} onPaneClick={() => setSelectedNodeId(null)} nodeTypes={nodeTypes} fitView>
                  <Controls />
                  <Background color="#cbd5e1" gap={20} size={1} />
                </ReactFlow>
              </div>

              <div className={`w-96 bg-white border border-gray-300 shadow-sm rounded-sm flex flex-col transition-all ${selectedNodeId ? "translate-x-0" : "translate-x-[110%] absolute right-2"} md:relative md:translate-x-0`}>
                <NodeSidebar 
                  selectedNode={selectedNode} 
                  users={users} 
                  updateNode={updateSelectedNode} 
                  onClose={() => setSelectedNodeId(null)}
                  onDelete={() => { setNodes(nds => nds.filter(n => n.id !== selectedNodeId)); setSelectedNodeId(null); }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .react-flow__edge-path { stroke-dasharray: 5; animation: dash 1s linear infinite; }
        @keyframes dash { from { stroke-dashoffset: 10; } to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}