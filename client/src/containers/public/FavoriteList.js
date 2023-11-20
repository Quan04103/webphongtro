// FavoriteList.js
import React, { useEffect, useState } from 'react';
import Item from '../../components/item';

const FavoriteList = () => {
  const [favoriteRooms, setFavoriteRooms] = useState([]);

  useEffect(() => {
    // Lấy danh sách phòng yêu thích từ localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Nếu có phòng yêu thích, lấy thông tin của chúng từ localStorage hoặc API (tùy vào thiết kế của bạn)
    if (favorites.length > 0) {
      // Ví dụ: Lấy thông tin từ localStorage, bạn có thể thay thế bằng API call nếu cần
      const rooms = favorites.map((postKey) => {
        const [title, id] = postKey.split('_');
        const roomInfo = JSON.parse(localStorage.getItem(postKey)) || {}; // Lấy thông tin từ localStorage

        return {
          id,
          title,
          ...roomInfo,
        };
      });

      setFavoriteRooms(rooms);
    }
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid md:grid-cols-3 md:px-[5rem]'>
      {favoriteRooms.map((room) => (
        <Item key={room.id} {...room} />
      ))}
    </div>
  );
};

export default FavoriteList;
