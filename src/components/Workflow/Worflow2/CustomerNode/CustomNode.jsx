import React from "react";
import { Handle, Position } from "reactflow";
import { User } from "lucide-react";

const CustomNode = ({ data, selected }) => {
  return (
    <div className={`shadow-md rounded-sm bg-white border-2 min-w-[180px] overflow-hidden transition-all ${
      selected ? "border-blue-600 ring-4 ring-blue-500/10" : "border-gray-300 hover:border-blue-400"
    }`}>
      <div className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider border-b ${
        data.isStart ? "bg-green-600 text-white" : "bg-gray-100 text-gray-500"
      }`}>
        {data.isStart ? "Điểm khởi đầu" : "Bước thực hiện"}
      </div>

      <div className="p-3 text-center bg-white">
        <Handle type="target" position={Position.Left} className="!bg-blue-600 !w-2 !h-2 !border-none" />
        <div className="font-bold text-slate-800 text-sm leading-tight">{data.label}</div>
        {data.assignee && (
          <div className="mt-2 flex items-center justify-center gap-1 text-[10px] bg-blue-50 text-blue-700 py-0.5 px-2 rounded-full border border-blue-100 font-medium">
            <User size={10} /> {data.assignee}
          </div>
        )}
        <Handle type="source" position={Position.Right} className="!bg-blue-600 !w-2 !h-2 !border-none" />
      </div>
    </div>
  );
};

export default CustomNode;