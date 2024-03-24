import React, { useEffect, useState } from "react";
import Item from "../../components/item";

// Singleton FavoriteList module
const FavoriteListSingleton = (() => {
  let instance;

  const createInstance = () => {
    const FavoriteList = ({ favorites }) => {
      const [favoriteRooms, setFavoriteRooms] = useState([]);

      useEffect(() => {
        if (favorites.length > 0) {
          const rooms = favorites.map((postKey) => {
            const [title, id] = postKey.split("_");
            const roomInfo = JSON.parse(localStorage.getItem(postKey)) || {};
            return {
              id,
              title,
              ...roomInfo,
            };
          });
          setFavoriteRooms(rooms);
        }
      }, [favorites]);

      return (
        <div className="grid grid-cols-1 md:grid md:grid-cols-3 md:px-[5rem]">
          {favoriteRooms.map((room) => (
            <Item key={room.id} {...room} />
          ))}
        </div>
      );
    };

    return FavoriteList;
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default FavoriteListSingleton;