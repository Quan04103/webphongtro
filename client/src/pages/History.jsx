import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../lib/helpers";
import { useDispatch, useSelector } from "react-redux";
import { getPenPosts, getPosts } from "../store/actions/post";
import { useEffect, useState } from "react";
import { apiUpdateStatus } from "../services";
import Swal from "sweetalert2";
import { CreatePost } from "../containers/public";
import EditPost from "./EditPost";
import { path } from "../ultils/constant";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { apiGetHistoryUserAll } from "../services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { apiGetHistoryUserByDate } from "../services";

export default function History() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearch = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
  
    // Tạo chuỗi ngày mới
    const created = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  
    console.log(created);

    setTimeout(() => { 
      const getHistory = async () => {
        try{
          const response = await apiGetHistoryUserByDate(created);
          console.log('API response:', response);
          setHistory(response?.data?.response)
        } catch (error) {
          console.error('Error updating status:', error);
        }
      };
    getHistory();
    }, 2000)
  };
  

  const [history, setHistory] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const getHistory = async () => {
        try {
          const response = await apiGetHistoryUserAll();
          console.log("API response:", response);
          //console.log(response?.data?.response[0])
          setHistory(response?.data?.response);
        } catch (error) {
          console.error("Error updating status:", error);
        }
      };
      getHistory();
    }, 2000);
  }, []);
  console.log(history);

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="font-semibold text-4xl">Lịch sử giao dịch người dùng</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="p-4">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            className="ml-2 bg-blue-500 text-white p-2 rounded"
            onClick={handleSearch}
          >
            Tìm kiếm theo ngày
          </button>
        </div>
        <table className="w-full text-gray-700">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black px-4 py-2">Mã giao dịch</th>
              <th className="border border-black px-4 py-2">Mã khách hàng</th>
              <th className="border border-black px-4 py-2">Ngày giao dịch</th>
              <th className="border border-black px-4 py-2">Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id}>
                <td className="border border-black px-4 py-2">
                  <Link to={`/order/${item.transaction_id}`}>
                    {item.transaction_id}
                  </Link>
                </td>
                <td className="border border-black px-4 py-2">
                  <Link to={`/product/${item.title}`}>{item.user_id}</Link>
                </td>
                <td className="border border-black px-4 py-2">
                  <Link to={`/customer/${item.customer_id}`}>
                    {item.createdAt}
                  </Link>
                </td>
                <td className="border border-black px-4 py-2">
                  {item.amount} VND
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
