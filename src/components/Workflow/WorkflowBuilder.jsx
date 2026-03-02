import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge, MarkerType } from "reactflow";
import "reactflow/dist/style.css";
import { ArrowLeft, Plus } from "lucide-react";
import { db } from "./database";

import CustomNode from "./CustomerNode/CustomNode";
import WorkflowHeader from "./WorkflowHeader/WorkflowHeader";
import NodeSidebar from "./NodeSidebar/NodeSidebar";

const nodeTypes = { custom: CustomNode };

export default function WorkflowBuilder2({ onBack, workflowId }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [info, setInfo] = useState({ name: "", description: "" });
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [users, setUsers] = useState([]);

  // 1. Khởi tạo dữ liệu
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
        setNodes([{ id: "1", type: "custom", position: { x: 50, y: 150 }, data: { label: "Bắt đầu", isStart: true } }]);
      }
    };
    init();
  }, [workflowId]);

  // 2. Xử lý logic sơ đồ (Flow)
  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, markerEnd: { type: MarkerType.ArrowClosed }, type: "smoothstep" }, eds)), []);

  const updateSelectedNode = (key, value) => {
    setNodes((nds) => nds.map((n) => n.id === selectedNodeId ? { ...n, data: { ...n.data, [key]: value } } : n));
  };

  const handleSave = async () => {
    const payload = { ...info, nodes, edges };
    workflowId ? await db.updateWorkflow(workflowId, payload) : await db.createWorkflow(payload);
    onBack();
  };

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  return (
    <div className="bg-white dark:bg-slate-900 fixed inset-0 z-50 flex flex-col overflow-hidden">
      <WorkflowHeader isEdit={!!workflowId} onBack={onBack} onSave={handleSave} />

      <div className="flex-1 flex overflow-hidden">
        {currentStep === 1 ? (
          /* Step 1: Form thông tin chung */
          <div className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
            <div className="w-full max-w-lg bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6 text-center text-slate-800 dark:text-white">Thông tin chung</h3>
              <div className="space-y-5">
                <input 
                  placeholder="Tên quy trình (VD: Quy trình cắt vải)" 
                  value={info.name} 
                  onChange={e => setInfo({...info, name: e.target.value})}
                  className="w-full px-4 py-3 border rounded-xl dark:bg-slate-800 dark:text-white"
                />
                <textarea 
                  placeholder="Mô tả..." 
                  value={info.description} 
                  onChange={e => setInfo({...info, description: e.target.value})}
                  className="w-full px-4 py-3 border rounded-xl dark:bg-slate-800 dark:text-white" rows={4} 
                />
                <button 
                  onClick={() => setCurrentStep(2)} 
                  disabled={!info.name}
                  className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold disabled:opacity-50"
                >
                  Tiếp theo
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Step 2: Canvas vẽ sơ đồ & Sidebar */
          <>
            <div className="flex-1 relative bg-slate-100 dark:bg-slate-950">
              <ReactFlow
                nodes={nodes} edges={edges}
                onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}
                onNodeClick={(_, n) => setSelectedNodeId(n.id)}
                onPaneClick={() => setSelectedNodeId(null)}
                nodeTypes={nodeTypes} fitView
              >
                <Controls />
                <Background color="#94a3b8" gap={20} size={1} />
              </ReactFlow>
              
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <button onClick={() => setCurrentStep(1)} className="px-3 py-2 bg-white dark:bg-slate-800 border rounded-lg shadow text-sm font-medium">
                  <ArrowLeft size={16} className="inline mr-1" /> Info
                </button>
                <button 
                  onClick={() => setNodes(nds => [...nds, { id: Date.now().toString(), type: 'custom', position: { x: 250, y: 250 }, data: { label: "Bước mới" } }])}
                  className="px-3 py-2 bg-white dark:bg-slate-800 border rounded-lg shadow text-sm font-medium"
                >
                  <Plus size={16} className="inline mr-1 text-blue-500" /> Thêm Bước
                </button>
              </div>
            </div>

            <NodeSidebar 
              selectedNode={selectedNode}
              users={users}
              updateNode={updateSelectedNode}
              onClose={() => setSelectedNodeId(null)}
              onDelete={() => {
                setNodes(nds => nds.filter(n => n.id !== selectedNodeId));
                setSelectedNodeId(null);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}