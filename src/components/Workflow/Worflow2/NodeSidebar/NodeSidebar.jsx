import React from 'react';
import { Settings, X, CheckSquare, Paperclip, Trash2 } from 'lucide-react';

const NodeSidebar = ({ selectedNode, users, updateNode, onDelete, onClose }) => {
  if (!selectedNode) return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-gray-400">
      <Settings size={48} className="mb-4 opacity-20" />
      <p className="text-xs font-medium uppercase tracking-widest">Chọn một bước để thiết lập</p>
    </div>
  );

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
        <h3 className="font-bold text-gray-700 uppercase flex items-center gap-2"><Settings size={16} /> Chi tiết bước</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-red-500"><X size={20} /></button>
      </div>

      <div className="p-5 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Tên bước công việc</label>
          <input 
            value={selectedNode.data.label} 
            onChange={(e) => updateNode("label", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm font-bold focus:border-blue-600 outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Người chịu trách nhiệm</label>
          <select 
            value={selectedNode.data.assignee || ""} 
            onChange={(e) => updateNode("assignee", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm bg-gray-50 outline-none"
          >
            <option value="">-- Chỉ định nhân sự --</option>
            {users.map((u) => <option key={u.id} value={u.name}>{u.name} ({u.role})</option>)}
          </select>
        </div>
        {/* ... (Các phần textarea, checklist giữ nguyên như code cũ) ... */}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <button onClick={onDelete} className="w-full py-2 bg-red-50 text-red-600 border border-red-200 rounded-sm hover:bg-red-600 hover:text-white font-bold uppercase text-xs flex items-center justify-center gap-2 transition">
          <Trash2 size={14} /> Xóa bước khỏi luồng
        </button>
      </div>
    </div>
  );
};

export default NodeSidebar;