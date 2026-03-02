import React from "react";
import { useState, useEffect } from "react";
import { useTransactionStore } from "../../Helpers/cartStore";
import { formatCurrencyNoUnit } from "../../Helpers/formatCurrency";
import { useNavigate } from "react-router-dom";
import { cashBookService } from "../../Helpers/functionsSupabase";
function Stats({type}) {
  const { transactionItems, setTransactionItems} = useTransactionStore();
  const navigate = useNavigate();
  //   const [totalAmount, setTotalAmount] = useState({ income: 0, expense: 0 });
//   const income = transactionItems.reduce(
//     (total, item) =>
//       total + (item.transaction_type === "INCOME" ? item.amount : 0),
//     0,
//   );
console.log(transactionItems);
  const totalAmount = transactionItems.reduce(
    (money, item) => {
      if (item.transaction_type == "INCOME") {
        money.income += item.amount;
      } else if (item.transaction_type == "EXPENSE") {
        money.expense += item.amount;
      } else if (item.transaction_type == "RECEIVABLE") {
        money.receivable += item.receivable_amount;
      } else{
        money.payable += item.payable_amount;
      }
      return money;
    },
    { income: 0, expense: 0, payable: 0, receivable: 0 },
  );

  const handleNavigate = (path) => {
    navigate(`/cashbook/` + path)
  }

  
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 mb-2">
      <div 
      onClick={() => {handleNavigate("income")}}
      className={" p-3 border border-gray-300 flex flex-col shadow-sm " + (type == "INCOME" ? "bg-blue-50" : "bg-white")}>
        <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">
          Tổng thu (Tháng)
        </span>
        <span className="text-green-600 text-lg font-bold">{formatCurrencyNoUnit(totalAmount.income)}</span>
      </div>
      <div
       onClick={() => {handleNavigate("expense")}}
       className={" p-3 border border-gray-300 flex flex-col shadow-sm "+ (type == "EXPENSE" ? "bg-blue-50" : "bg-white")}>
        <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">
          Tổng chi (Tháng)
        </span>
        <span className="text-red-600 text-lg font-bold">{formatCurrencyNoUnit(totalAmount.expense)}</span>
      </div>
      <div 
      onClick={() => {handleNavigate("payable")}}
      className={" p-3 border border-blue-200 flex flex-col shadow-sm "+ (type == "PAYABLE" ? "bg-blue-50" : "bg-white")}>
        <span className="text-blue-600 text-[10px] uppercase font-bold italic">
          Dự kiến thu nợ
        </span>
        <span className="text-blue-800 text-lg font-bold">{formatCurrencyNoUnit(totalAmount.payable)}</span>
      </div>
      <div 
        onClick={() => {handleNavigate("receivable")}}
        className={" p-3 border border-blue-200 flex flex-col shadow-sm "+ (type == "RECEIVABLE" ? "bg-blue-50" : "bg-white")}>
        <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">
          Tồn quỹ hiện tại
        </span>
        <span className="text-blue-700 text-lg font-bold">{formatCurrencyNoUnit(totalAmount.receivable)}</span>
      </div>
      
    </div>
  );
}

export default Stats;
