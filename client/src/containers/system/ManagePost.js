// ManagePostContainer.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import ManagePostPresenter from './ManagePostPresenter';
import { apiDeletePost } from '../../services';
import Swal from 'sweetalert2';

const ManagePostContainer = () => {
  const dispatch = useDispatch();
  const { postOfCurrent, dataEdit } = useSelector(state => state.post);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('0');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    !dataEdit && dispatch(actions.getPostsLimitAdmin());
  }, [dataEdit]);

  useEffect(() => {
    setPosts(postOfCurrent);
  }, [postOfCurrent]);

  const handleDeletePost = async postId => {
    const response = await apiDeletePost(postId);
    console.log(response);
    if (response?.data.err === 0) {
      dispatch(actions.getPostsLimitAdmin()); 
    } else {
      Swal.fire('Oops!', 'Xóa tin đăng thất bại', 'error');
    }
  };

  const handleEdit = item => {
    dispatch(actions.editData(item));
  };

  return (
    <ManagePostPresenter
      posts={posts}
      handleEdit={handleEdit}
      handleDelete={handleDeletePost}
      status={status}
      setStatus={setStatus}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
    />
  );
};

export default ManagePostContainer;
