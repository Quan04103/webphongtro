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
import EditPost from "./editPost";
import { path } from "../ultils/constant";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { apiGetPenPosts } from "../services";
import { apiGetPostByDate } from "../services";
import rejectCommand from "../DesignPattern/command/rejectCommand";
import AcceptCommand from "../DesignPattern/command/acceptCommand";
import RejectCommand from "../DesignPattern/command/rejectCommand";
import getPenPostProxy from "../DesignPattern/proxy/getPenPostProxy";
export default function PenProduct() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const proxy=new getPenPostProxy(apiGetPenPosts);
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
      const getAccByDate = async () => {
        try{
          const response = await apiGetPostByDate(0,created);
          console.log('API response:', response);
          setPost(response?.data?.response);
        } catch (error) {
          console.error('Error updating status:', error);
        }
      };
    getAccByDate();
    }, 2000)

  };
  const [post, setPost] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const getPenPost = async () => {
        try {
          proxy.showCache();
          const response = await proxy.fetchData();
          proxy.showCache();
          // const response1 = await proxy.fetchData();
          console.log("API response:", response);
          //console.log(response?.data?.response[0])
          setPost(response);
        } catch (error) {
          console.error("Error updating status:", error);
        }
      };
      getPenPost();
    }, 2000);
  }, []);
  useEffect(() => {
    console.log('post',post)
   },[post])


  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { posts } = useSelector((state) => state.post);
  // useEffect(() => {
  //   dispatch(getPenPosts());
  // }, []);
  // useEffect(() => {}, [posts]);

  const handleAcceptButton = async (id) => {
    const acceptCommand=new AcceptCommand(id,1)
    acceptCommand.execute();
  };

  const handleRejectButton = async (id) => {
    const rejectCommand=new RejectCommand(id,2)
    rejectCommand.execute();

  };

  return (
<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
  <strong className="font-semibold text-4xl">Duyệt bài đăng</strong>
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
    <table className="w-full text-gray-700 border border-black">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-black px-4 py-2">ID</th>
          <th className="border border-black px-4 py-2">Post title</th>
          <th className="border border-black px-4 py-2">Customer Name</th>
          <th className="border border-black px-4 py-2">Created Date</th>
          <th className="border border-black px-4 py-2">Post Address</th>
          <th className="border border-black px-4 py-2">Services</th>
        </tr>
      </thead>
      <tbody>
        {post.map((post) => (
          <tr key={post.id}>
            <td className="border border-black px-4 py-2">
              <Link to={`/order/${post.id}`}>{post.id}</Link>
            </td>
            <td className="border border-black px-4 py-2">
              <Link to={`/product/${post.title}`}>{post.title}</Link>
            </td>
            <td className="border border-black px-4 py-2">
              <Link to={`/customer/${post.customer_id}`}>{post.user.name}</Link>
            </td>
            <td className="border border-black px-4 py-2">{post.attributes.published}</td>
            <td className="border border-black px-4 py-2">{post.address}</td>
            <td className="border border-black px-4 py-2">
              <div className="flex">
                <button className="bg-green-400 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded border border-black whitespace-nowrap" onClick={() => handleAcceptButton(post.id)}>
                  Chấp nhận
                </button>
                <button className="bg-red-300 hover:bg-red-900 text-white font-bold py-2 px-4 rounded ml-2 border border-black whitespace-nowrap" onClick={() => handleRejectButton(post.id)}>
                  Từ chối
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
