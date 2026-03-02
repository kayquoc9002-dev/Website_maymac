import React from 'react';
import { Layout, Save } from 'lucide-react';

const WorkflowHeader = ({ workflowId, onBack, onSave }) => (
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
      <button onClick={onBack} className="px-6 py-2 border border-gray-300 rounded-sm text-gray-600 font-bold uppercase text-xs hover:bg-gray-50">
        Hủy bỏ
      </button>
      <button onClick={onSave} className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-sm shadow flex items-center font-bold uppercase text-xs">
        <Save size={16} className="mr-2" /> Lưu quy trình
      </button>
    </div>
  </header>
);

export default WorkflowHeader;