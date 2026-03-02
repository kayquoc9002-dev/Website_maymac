import React from 'react';
import { Handle, Position } from 'reactflow';
import { User } from 'lucide-react';

const CustomNode = ({ data, selected }) => {
  return (
    <div className={`px-4 py-3 shadow-lg rounded-xl bg-white dark:bg-slate-800 border-2 min-w-[160px] text-center relative transition-all 
      ${selected ? "border-blue-500 ring-4 ring-blue-500/10" : "border-slate-200 dark:border-slate-700 hover:border-blue-400"}`}>
      
      <Handle type="target" position={Position.Left} className="!bg-slate-400 !w-3 !h-3" />
      
      <div className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider">
        {data.isStart ? "Bắt đầu" : "Bước thực hiện"}
      </div>
      
      <div className="font-bold text-slate-700 dark:text-slate-200 text-sm">
        {data.label}
      </div>

      {data.assignee && (
        <div className="mt-2 flex items-center justify-center gap-1 text-[10px] bg-slate-100 dark:bg-slate-700 py-0.5 px-2 rounded-full text-slate-500 dark:text-slate-300">
          <User size={10} /> {data.assignee}
        </div>
      )}

      <Handle type="source" position={Position.Right} className="!bg-blue-500 !w-3 !h-3" />
    </div>
  );
};

export default CustomNode;