import React from 'react';
import { Layout, Save } from 'lucide-react';

const WorkflowHeader = ({ isEdit, onBack, onSave }) => (
  <div className="h-16 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center px-6 shrink-0 bg-white dark:bg-slate-900">
    <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
      <Layout size={20} className="text-blue-600" />
      {isEdit ? "Chỉnh sửa quy trình" : "Tạo quy trình mới"}
    </h2>
    <div className="flex gap-3">
      <button onClick={onBack} className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 font-medium">
        Hủy
      </button>
      <button onClick={onSave} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg flex items-center font-bold">
        <Save size={18} className="mr-2" /> Lưu lại
      </button>
    </div>
  </div>
);

export default WorkflowHeader;