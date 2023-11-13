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

export default function PenProduct() {
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPenPosts());
  }, []);

  useEffect(() => {}, [posts]);

  const handleAcceptButton = async (id) => {
    setStatus(1);
    console.log(status);
    const response = await apiUpdateStatus(id, status);
    console.log(response);
    setTimeout(() => {
      if (response?.data.err === 0) {
        dispatch(getPenPosts());
        Swal.fire("Thành công", "Đã chấp nhận tin đăng", "success").then(
          () => {}
        );
      } else {
        Swal.fire("Opps!", "Có lỗi gì đó", "error");
      }
      console.log(id);
    }, 300);
  };

  const handleRejectButton = async (id) => {
    setStatus(2);
    console.log(status);
    const response = await apiUpdateStatus(id, status);
    console.log(response);
    setTimeout(() => {
      if (response?.data.err === 0) {
        dispatch(getPenPosts());
        Swal.fire("Thành công", "Không chấp nhận tin đăng thành công", "success").then(
          () => {}
        );
      } else {
        Swal.fire("Opps!", "Có lỗi gì đó", "error");
      }
      console.log(id);
    }, 300);
  };

  return (
<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
  <strong className="font-semibold text-4xl">Duyệt bài đăng</strong>
  <div className="border-x border-gray-200 rounded-sm mt-3">
    <table className="w-full text-gray-700 border border-black">
      <thead>
        <tr>
          <th className="border border-black px-4 py-2">ID</th>
          <th className="border border-black px-4 py-2">Product Name</th>
          <th className="border border-black px-4 py-2">Customer Name</th>
          <th className="border border-black px-4 py-2">Created Date</th>
          <th className="border border-black px-4 py-2">Product Address</th>
          <th className="border border-black px-4 py-2">Services</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
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
