// src/ThankYouPage.js
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { apiPlusMoney } from '../../services';
import { apiCreateHistoryTransaction } from '../../services';


const Thank = () => {

  const { currentData } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = parseInt(searchParams.get("vnp_Amount"),10) / 100;
  const transaction_id = searchParams.get("vnp_TxnRef");
  const dateTrans = searchParams.get("vnp_PayDate");
  const amountafter = amount
  const iduser = currentData.id
// Chuyển định dạng chuỗi thành đối tượng Date
const parsedDate = new Date(
  parseInt(dateTrans.substring(0, 4)),   // Năm
  parseInt(dateTrans.substring(4, 6)) - 1, // Tháng (đánh số từ 0)
  parseInt(dateTrans.substring(6, 8)),   // Ngày
  parseInt(dateTrans.substring(8, 10)),  // Giờ
  parseInt(dateTrans.substring(10, 12)), // Phút
  parseInt(dateTrans.substring(12, 14))  // Giây
);

// Format lại thành chuỗi theo định dạng yyyy/mm/dd
const formattedDate = `${parsedDate.getFullYear()}/${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}/${parsedDate.getDate().toString().padStart(2, '0')}`;


console.log('id trans',transaction_id);
console.log(amount/100);
console.log('ngày tháng năm',formattedDate);
console.log(currentData.id)
const [payload, setPayload] = useState({
  transaction_id: transaction_id || '',
  amount:amountafter || '',
  createdAt:formattedDate || '',
  updatedAt:'',
})
const updated = 'null'

console.log(payload)
  const currentMoney = parseInt(currentData.money,10);
  console.log('currentMN', currentMoney)
  console.log('amount', amount)
  const total = currentMoney + amount
  console.log('total',total)
  useEffect(() => {  
    if (total) {
    setTimeout(() => { 
      const plusMoney = async () => {
        try {
          let finalPayload = {
            ...payload,
            user_id:currentData.id
          }
          console.log('final payload',finalPayload)
          const response = await apiPlusMoney(total);
          const responseHistory = await apiCreateHistoryTransaction(finalPayload)
          console.log('API response:', response);
        } catch (error) {
          console.error('Error updating status:', error);
        }
      };
    plusMoney();
    },2000)
  }
  }, [total]);
    
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bạn đã thanh toán thành công</h1>
        <p className="text-lg mb-8">Số tiền được cộng thêm {amount} VND</p>
 
        {/* You can display order details here */}
      </div>
    </div>
  );
};

export default Thank;
