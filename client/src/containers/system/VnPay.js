// src/App.js
import React from "react";
import { NavLink } from "react-router-dom";

function VnPay() {
  const handlePaymentClick = () => {
    // Xử lý sự kiện khi người dùng ấn vào nút thanh toán VNPay
    console.log("Đã ấn nút thanh toán VNPay");
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Thông tin thanh toán</h1>
      <NavLink to={'http://localhost:8000/order/create_payment_url'}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handlePaymentClick}
      >
        <img
          src="https://on.net.vn/web/image/3876184-2b57e083/202166185_2021396718013233_8499389898242103910_n.png"
          alt="VNPay"
          className="h-5 w-5 inline-block mr-2"
        />
        Thanh toán VNPay
      </button>
      </NavLink>
    </div>
  );
}

export default VnPay;
