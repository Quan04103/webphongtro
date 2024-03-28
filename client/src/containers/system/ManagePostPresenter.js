import React from 'react';
import { ButtonEdit } from '../../components';
import UpdatePost from '../../components/UpdatePost';

const ManagePostPresenter = ({ posts, handleEdit, handleDelete, status, setStatus, isEdit, setIsEdit }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
      <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
          <h1 className='text-13xl font-medium '>Quản lý tin đăng</h1>
          <select onChange={e => setStatus(+e.target.value)} value={status} className='outline-none border p-2 border-gray-200 rounded-md'>
              <option value="0">Lọc theo trạng thái</option>
              <option value="1">Đang hoạt dộng </option>
              <option value="2">Đã hết hạn</option>
          </select>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      #
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Tiêu đề
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Hình
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Giá
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Ngày bắt đầu
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Ngày hết hạn
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Trạng thái
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Tùy chọn
                  </th>
              </tr>
          </thead>
          <tbody>
              {!posts
                  ? <tr>
                      <td>adadada</td>
                  </tr> : posts?.map(item => {
                      let statusText = '';
                      if (item?.status === 0) statusText = 'Đang chờ duyệt';
                      else if (item?.status === 1) statusText = 'Đã chấp nhận';
                      else if (item?.status === 2) statusText = 'Đã từ chối';
                      return (
                          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={item.id}>
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                                  {item?.overviews?.code}
                              </th>
                              <td className="px-6 py-4">
                                  {item?.title}
                              </td>
                              <td className="px-6 py-4 flex items-center justify-center">
                                  <img src={JSON.parse(item?.images?.image)[0] || ''} alt="avatar-post" className='w-10 h-10 object-cover rounded-md' />
                              </td>
                              <td className="px-6 py-4">
                                  {item?.attributes?.price}
                              </td>
                              <td className="px-6 py-4">
                                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{item?.overviews?.created}</a>
                              </td>
                              <td className="px-6 py-4">
                                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{item?.overviews?.expired}</a>
                              </td>
                              <td className="px-6 py-4">
                              <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{statusText}</a>
                              </td>
                              <td className="px-6 py-4">
                                  <ButtonEdit
                                      text='Sửa'
                                     
                                      bgColor=' bg-green-500 shadow-lg shadow-green-500/50 hover:bg-green-600'
                                      className='mx-6'
                                      textColor='text-white'
                                      onClick={() => {
                                          handleEdit(item);
                                          setIsEdit(true);
                                      }}
                                  />
                                  <ButtonEdit
                                      text='Xóa'
                                      bgColor='bg-red-400 shadow-lg shadow-red-500/50 hover:bg-red-700'
                                      textColor='text-white'
                                      onClick={() => handleDelete(item.id)}
                                  />
                              </td>
                          </tr>
                      )
                  })}
          </tbody>
      </table>
      {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
  </div>
  );
};

export default ManagePostPresenter;
