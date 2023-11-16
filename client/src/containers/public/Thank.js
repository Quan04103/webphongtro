// src/ThankYouPage.js
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { apiPlusMoney } from '../../services';


const Thank = () => {

  const { currentData } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = parseInt(searchParams.get("vnp_Amount"),10);

  const currentMoney = parseInt(currentData.money,10) || 0;
  const total = amount + currentMoney
  console.log('tiền hiện tại',currentMoney)
  console.log('Tổng tiền',total)
  useEffect(() => {
    setTimeout(() => { 
      const plusMoney = async () => {
        try {
          const response = await apiPlusMoney(total);
          console.log('API response:', response);
        } catch (error) {
          console.error('Error updating status:', error);
        }
      };
    plusMoney();
    }, 2000)
  }, [total]);
    
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bạn đã thanh toán thành công</h1>
        <p className="text-lg mb-8">Số tiền được cộng thêm {amount / 100} VND</p>
 
        {/* You can display order details here */}
      </div>
    </div>
  );
};

export default Thank;
