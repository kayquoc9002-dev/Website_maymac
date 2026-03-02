import React from 'react';
import { X, CheckSquare, Paperclip, Trash2, Layout } from 'lucide-react';

const NodeSidebar = ({ selectedNode, users, updateNode, onDelete, onClose }) => {
  if (!selectedNode) {
    return (
      <div className="w-96 border-l border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
        <Layout size={40} className="opacity-50 mb-4 animate-pulse" />
        <p className="text-base font-medium">Chưa chọn bước nào</p>
      </div>
    );
  }

  return (
    <div className="w-96 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col">
      <div className="flex justify-between items-center border-b p-5 bg-slate-50 dark:bg-slate-900/50">
        <h3 className="font-bold text-lg dark:text-white">Chi tiết bước</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-red-500"><X size={20} /></button>
      </div>
      
      <div className="p-5 space-y-5 overflow-y-auto flex-1">
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block">Tên công việc</label>
          <input 
            value={selectedNode.data.label} 
            onChange={(e) => updateNode("label", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block">Người phụ trách</label>
          <select 
            value={selectedNode.data.assignee || ""} 
            onChange={(e) => updateNode("assignee", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:text-white outline-none"
          >
            <option value="">-- Chọn --</option>
            {users.map(u => <option key={u.id} value={u.name}>{u.name} ({u.role})</option>)}
          </select>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block">Mô tả</label>
          <textarea 
            value={selectedNode.data.description || ""} 
            onChange={(e) => updateNode("description", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 dark:text-white min-h-[100px] outline-none"
          />
        </div>
      </div>

      <div className="p-5 border-t">
        <button onClick={onDelete} className="w-full py-2.5 bg-red-50 text-red-600 rounded-lg font-bold flex items-center justify-center gap-2">
          <Trash2 size={16} /> Xóa bước này
        </button>
      </div>
    </div>
  );
};

export default NodeSidebar;